import {useState,useEffect} from "react";
import { Box , makeStyles ,FormControl,InputBase,Button,TextareaAutosize} from "@material-ui/core";
import {AddCircle} from '@material-ui/icons';
import {getPost,updatePost} from "../../service/api";
import {useHistory} from "react-router-dom";
// useHistory is used to got to the the detail view page when the update button is clicked

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
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop: 10
    },
    textfield:{
        flex:1,
        margin:'0 30px',
        fontsize: 25
    },
    textarea:{
        width:'100%',
        marginTop:50,
        border:'none',
        fontSize:18,
        '&:focus-visible':{
            outline:'none'
        }
    }
}));


const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: 'All',
    createDate: new Date()
}



const UpdateView = ({ match }) =>{
    const classes = useStyles();
    const history = useHistory();

    const [post,setPost] = useState(initialValues);

    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    //console.log(match.params.id)
    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    }, []);
    //we use [] so that it does'nt call again

    const handleChange = (e)=>{
        setPost({...post,[e.target.name]:e.target.value })
    }

    const updateBlogPost = async () => {
        await updatePost(match.params.id, post);
        history.push(`/details/${match.params.id}`);
    }

    return (
        <Box className={classes.container}>
            <img className={classes.image} src={url}  alt='banner'/>
            <FormControl className={classes.form}>
                <AddCircle fontSize='large' color='action'/>
                <InputBase placeholder='Title' name="title" onChange={(e)=>handleChange(e)} value={post.title} className={classes.textfield} color="primary"/>
                <Button variant onClick={()=> updateBlogPost()} >Update</Button>
                </FormControl>
                <TextareaAutosize
                    name="description"
                    onChange={(e)=>handleChange(e)}
                minRows={5} 
                placeholder='Tell your story...'
                className={classes.textarea}
                value={post.description}
                />
        </Box>
    )
}

export default UpdateView;