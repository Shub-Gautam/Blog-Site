import Post from "../schema/post-schema.js";
// import {response} from "express";


export const createPost = async (req,res)=>{
    console.log(req.body);
    try{
    const post = await new Post(req.body);
    post.save();

    res.status(200).json('blog saved succesfully');
    }catch(error){
        res.status(500).json(error);
    }
}
export const getAllPosts = async (req,res)=>{
    try{
        let posts = await Post.find({});
        res.status(200).json(posts);
    }catch (e) {
        res.status(500).json(e);
    }
}

export const getPost = async (req,res)=>{
    try{
        let post = Post.findById(req.param.id);
        res.status(200).json(post);
    }catch(e){
        res.status(500).json(e);
    }
}