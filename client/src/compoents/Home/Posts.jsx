import { Grid } from "@material-ui/core";
import Post from "./Post";
import { Link } from "react-router-dom";

const Posts = () => {
    let posts = [1,2,3,4,5,6,7,8,9];
    return (
        posts.map(post =>(
            // total screen is 12 but we define 10 for the posts so it will treat this 10 as 12 
            // thus to get 4 posts we define lg=3 so that 12/3 = 4
        <Grid item lg={3} sm={4} xs={12}>
            <Link to={'/details'} style={{textDecoration:'none', color:'inherit'}}>
                <Post/>
            </Link>
        </Grid>
        ))
    )
}

export default Posts ;