import Post from "../schema/post-schema.js";
import {request, response} from "express";
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

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        await post.delete()

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}
