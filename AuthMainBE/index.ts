import express, { Application } from "express"
import { mainApp } from "./mainApp"
import mongoose from "mongoose"

const app : Application = express()
const port : number = 6589
mainApp(app)

const URL : string = "mongodb://localhost:27017/anotherAuth"

const server = app.listen(port, ()=>{
    // console.log("listening", port);

    mongoose.connect(URL).then(()=>{
        console.log("listening", port);
        
    })
    
})

process.on("uncaughtException", (error : any)=>{
    console.log("server is shutting down due to uncaughtException");
    console.log(error);
    process.exit(1)
})

process.on("unhandledRejection", (error : any)=>{
    console.log("server is shutting down due to unhandledRejection");
    console.log(error);
   
    server.close(()=>{
        process.exit(1)
    })
})
