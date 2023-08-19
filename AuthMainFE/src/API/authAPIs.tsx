import axios from "axios"

const URL : string = "http://localhost:6589/api/v1"

export const createAuth = async (data : any) =>{
    try {

        const config:any = {
            "content-type" : "multipart/formdata"
        }
        return await axios.post(`${URL}/reg`, data, config).then((res : any)=>{
            return res.data.data 
        })


    } catch (error) {
        console.log(error);
        
    }
}

export const signInAuth = async (data : any) =>{
    try {
        return await axios.post(`${URL}/sign`, data).then((res : any)=>{
            console.log(res);
            
            return res.data.data 
        })


    } catch (error) {
        console.log(error);
        
    }
}