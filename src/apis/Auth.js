import axios from "axios"
import baseUrl from "../constants/baseUrl"

const options = {
    headers : {
        'Content' : 'application/json'
    }
}

const POSTRegister = async (data={})=>{
    try{
        const response = await axios.post(baseUrl+'register', data,options);
        if(response.data){
            return response.data;
        }
    }catch(e){
        throw new Error(e.message);
    }
}

export const POSTLogin = async (data={})=>{
    try{
        const response = await axios.post(baseUrl+'login', data,options);
        if(response.data){
            return response.data;
        }
    }catch(e){
        throw new Error(e.message);
    }
}

export default POSTRegister