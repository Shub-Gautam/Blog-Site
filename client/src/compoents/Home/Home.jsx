
import { Grid , makeStyles } from "@material-ui/core";


import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";

const useStyles = makeStyles({

});


const Home = () => {
    const classes = useStyles();
    return (
    <>
       <Banner />
       {/* We can use this but it will make our project less responsive <Box style={{display:'flex'}}> */}
        <Grid container>

            {/* Remember that our display is divided into 12 parts */}
            <Grid item lg={2} xs={12} sm={12}>
                <Categories/>
            </Grid>
            <Grid container item  lg={10} xs={12} sm={10}>
                <Posts/>
            </Grid>
        </Grid>
       
      
       
    </>
    )
}

export default Home;