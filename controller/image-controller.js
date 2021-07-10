
import grid from "gridfs-stream";
import mongoose from "mongoose";
const url = 'http://localhost:8000'

const conn = mongoose.connection;
let gfs;
conn.once('open',()=>{
    gfs = grid(conn.db,mongoose.mongo);
    gfs.collection('fs');
})

export const uploadImage = (request,response) =>{
    try{
        if(!request.file){
            return response.status(404).json("File not found");
        }
        const imageURL = `${URL}/file/${request.file.filename}`

        response.status(200).json(imageURL);
    }catch (e) {
        response.status(500).json(e);
    }

}

export const getImage = async (request,response) => {
    try{
        const file = await gfs.files.findOne({filename: request.params.filename})
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(response);
    }catch (e) {
        response.status(500).json("Filed to fetch the image")
    }
}