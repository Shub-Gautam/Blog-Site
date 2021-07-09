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
// export const getAllPosts = async (req,res)=>{
//     const username = request.query.username;
//     const category = request.query.category;
//     let posts
//     try{
//         if (username)
//             posts = await Post.find({username: username});
//         else if (category)
//             posts = await Post.find({ categories: category});
//         // you dont have to mention querry in the route.js like you have to do in params
//         else
//             posts = await Post.find({});
//
//         res.status(200).json(posts);
//     }catch (e) {
//         res.status(500).json(e);
//     }
// }

export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {
        if(username)
            posts = await Post.find({ username: username });
        else if (category)
            posts = await Post.find({ categories: category });
        // you dont have to mention querry in the route.js like you have to do in params
        else
            posts = await Post.find({});

        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
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
        await post.delete();
        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}
