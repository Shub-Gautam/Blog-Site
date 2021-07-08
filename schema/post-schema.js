import  mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:false
    },
    categories:{
        type:String,
        required:false
    },
    createDate:{
        type:Date,
    }
})

// to create a collections

const post = mongoose.model('post', PostSchema);

export default post;