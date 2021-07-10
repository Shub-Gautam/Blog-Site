// you cant just upload image to the mongodb so woe have to process it
// this can be done using multer
import multer from "multer";
import {GridFsStorage} from "multer-gridfs-storage";

const storage = new GridFsStorage({
    url : 'mongodb+srv://Admin:%23%40Mongodb225@blogweb.izfi5.mongodb.net/BLOGSITE?retryWrites=true&w=majority',
    options: { useNewUrlParser:true, useUnifiedTopology:true },
    file: (request,file)=>{
      const match = ["image/png","image/jpg"];
      if(match.indexOf(file.memetype)===-1){
        return `${Date.now()}-blog-${file.originalname}`;
      }
      return{
        bucketName:"photos",
        filename:`${Date.now()}-blog-${file.originalname}`
      }
    }
});

export default multer({ storage });