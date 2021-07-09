
import { Box,makeStyles , Typography, Grid } from "@material-ui/core";
import {Edit,Delete} from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import {getPost, updatePost , deletePost } from "../../service/api";
import {useHistory} from "react-router-dom";
//import { border } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
    image:{
        width:'100%',
        height: '50vh',
        objectFit:'cover'
    },
    container:{
        padding:'0 100px',
        // important this is for switching css in small screens, down is for screen size lower than this
        [theme.breakpoints.down('md')]:{
            padding: 0
        }
    },
    icons:{
        float: 'right'
    },
    icon:{
        margin: 5,
        padding: 5,
        border:'1px solid #878787',
        borderRadius:10
    },
    heading:{
        fontSize:38,
        fontWeight:'bold',
        textAlign:'center',
        margin:'50px 0 100px 0'
    },
    subheading:{
        color:'#878787',
        display:'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    }
}));

const DetailView = ({ match }) => {
    const history = useHistory();
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';


    const [posts, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    }, []);

    const deleteBlog = async () =>{
        await deletePost(posts._id);
        history.push('/');
    }
    return (
        <Box className={classes.container}>
            <img src={posts.picture||url} alt='Banner' className={classes.image}/>
            <Box className={classes.icons}>
                <Link to={`/update/${posts._id}`} style={{textDecoration:'none', color:'inherit'}}><Edit className={classes.icon} color='primary'/></Link>
                <Delete onClick={()=>deleteBlog()} className={classes.icon} color='error'/>
            </Box>

            <Typography className={classes.heading}>{posts.title}</Typography>

            <Box className={classes.subheading}>
                <Typography>Author:<span style={{fontWeight:'bold'}}>{posts.username}</span></Typography>
                <Typography style={{marginLeft:'auto'}}>{new Date (posts.createDate).toDateString()}</Typography>
            </Box>

            <Typography>{posts.description}</Typography>
        </Box>
    )
}




export default DetailView; 