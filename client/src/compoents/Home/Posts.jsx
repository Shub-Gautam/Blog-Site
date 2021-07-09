import { Grid } from "@material-ui/core";
import Post from "./Post";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllPosts} from "../../service/api";
import { useLocation } from "react-router-dom";

const Posts = () => {
    // const { search } = useLocation();
    //
    // const [posts,setPosts] = useState([]);
    //let posts = [1,2,3,4,5,6,7,8,9];
    const [posts, getPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllPosts(search); // params in url
            getPosts(data);
        }
        fetchData();
    }, [search]);


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