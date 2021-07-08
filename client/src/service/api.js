import axios from 'axios';
import URL8000 from '../Constants/data';


const URL = URL8000;

export  const createPost = async (post)=>{
    try{ return await axios.post( ''+URL8000+'/create',post )}
    catch(error){
        console.log('Error while calling createPost API',error);
    }
}

export const getAllPosts = async ()=>{
    try{
       let response = await axios.get(`${URL}/posts`);
       return response.data;
    }catch(e){
        console.log("Error while calling getAllPosts API",e);
    }
}

export const getPost = async (id)=>{
    try {
        let res = await axios.get(`${URL}/post/${id}`);
        return res.data;
    }catch (e){
        console.log("Error while calling getPost API",e);
    }
}