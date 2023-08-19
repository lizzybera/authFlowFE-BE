import express, { Request, Response } from "express"
import authModel from "../model/authModel"
import bcrypt from "bcrypt"
import cloudinary from "../config/cloudinary"

export const regUsers = async (req: any, res : Response) => {
    try {
        const {myFamilyName, myContactAddress, email, password} = req.body

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const { secure_url, public_id } = await cloudinary.uploader.upload(req.file?.path)

        const users = await authModel.create({myFamilyName, myContactAddress, email, password : hash,
            myPicture : secure_url,
            myPictureID : public_id 
        })

        return res.status(201).json({
            message : "created account",
            data : users
            
        })
    } catch (error) {
        return res.status(404).json({
            message : "eror  creating account",
            
        })
    }
}

export const singUsers = async (req: any, res : Response) => {
    try {
      
        const {email, password} = req.body

        const user = await authModel.findOne({email})

        if (user) {

            const passed = await bcrypt.compare(password, user?.password!)

            if (passed) {
                
        return res.status(201).json({
            message : "welcome Back",
            data : user._id
            
        })
            } else {
                return res.status(404).json({
                    message : "incorrect password",
                    
                })
                
            }
            
        } else {
            return res.status(404).json({
                message : "no user",
                
            })
        }

    } catch (error) {
        return res.status(404).json({
            message : "eror  creating account",
            
        })
    }
}

export const viewUsers = async (req: any, res : Response) => {
    try {
      
        const user = await authModel.find()

        return res.status(200).json({
            message : "users found",
            data : user
            
        })

    } catch (error) {
        return res.status(404).json({
            message : "eror finding users",
            
        })
    }
}
