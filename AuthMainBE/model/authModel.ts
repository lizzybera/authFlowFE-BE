import mongoose from "mongoose";

interface iAuth{
    myFamilyName : string;
    myContactAddress : string;
    email : string;
    password : string;
    myPicture : string;
    myPictureID : string;
}

interface iAuthData extends iAuth, mongoose.Document {}

export const authSchema = new mongoose.Schema<iAuth>({
    myFamilyName : {
        type : String
    },
    myContactAddress : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    myPicture : {
        type : String
    },
    myPictureID : {
        type : String
    },
}, {timestamps: true})

export default mongoose.model<iAuthData>("auths", authSchema)