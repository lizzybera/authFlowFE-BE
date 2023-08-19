import express, { Application, Request, Response } from "express"
import cors from "cors"
import auth from "./router/authRouter"


export const mainApp = (app : Application)=>{
    app.use(cors())
    app.use(express.json())
    app.get("/", (req :Request, res : Response)=>{
        try {

            return res.status(200).json({
                message : "welcome"
            })

        } catch (error) {
          return res.status(404).json({
                message : "an error occured",
                data : error.message
            })
        }
    })

    app.use("/api/v1", auth)
}