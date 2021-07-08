
import { Box , colors, makeStyles , Typography} from "@material-ui/core";
import { width } from "@material-ui/system";

const useStyles = makeStyles({
    image:{
        //` diff from '
        background:`url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        width:'100%',
        height:'50vh',
        // to arrange everything in one line 
        display:"flex",
        //to arrange in column
        flexDirection:"column",
        alignItems:"center",
        //to align something vertically
        justifyContent:"center",
        '& :first-child':{
            fontSize:70,
            color:'white',
            lineHeight:1
        },
        '& :last-child':{
            fontSize:40,
            background:'white'
        }
    },
  
});


const Banner = () => {
    const classes = useStyles();
    const url = "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";

    return (
        //we can use this but we will use css to display our image 
        //<img src={url} alt="banner"/>
        <Box className={classes.image}>
            <Typography>
                BLOG
            </Typography>
            <Typography>Shubham Gautam</Typography>
        </Box>
    )
}

export default Banner ;