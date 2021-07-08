import { Grid } from "@material-ui/core";
import Post from "./Post";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllPosts} from "../../service/api";

const Posts = () => {

    const [posts,setPosts] = useState([]);
    //let posts = [1,2,3,4,5,6,7,8,9];

    useEffect(()=>{
        const fetchData = async ()=>{
            let data = await getAllPosts();
            console.log(data);
            //below function is used to set data in posts in const[posts,setPosts]
             setPosts(data);
        }
        fetchData();
    },[])

    return (
        posts.map(post => (
            // total screen is 12 but we define 10 for the posts so it will treat this 10 as 12 
            // thus to get 4 posts we define lg=3 so that 12/3 = 4
            <Grid item lg={3} sm={4} xs={12}>
                <Link to={`/details/${post._id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                    <Post post={post}/>
                </Link>
            </Grid>
        ))
    )
}

export default Posts ;