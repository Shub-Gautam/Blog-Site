import { Box , makeStyles ,FormControl,InputBase,Button,TextareaAutosize} from "@material-ui/core";
import {AddCircle} from '@material-ui/icons';
import {useEffect, useState} from "react";
import { createPost , uploadFile } from "../../service/api";
import {useHistory} from "react-router-dom";

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
    username: 'ShubhamGautam',
    categories: 'All',
    createDate: new Date()
}

const CreateView = () =>{
    const history = useHistory();
    const classes = useStyles();

    const [post, setPost] = useState(initialValues);
    const [file, setFile] = useState('');
    const [image,setImage] = useState('');

    const url = post.picture ?  post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

    //use effect is used to do some action when a thing is changed

    useEffect(()=>{
        const getImage =async ()=>{
            if(file){
                const data = new FormData();
                data.append("name",file.name);
                data.append("file",file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();
    },[file])

    const handleChange = (e)=>{
        setPost({...post,[e.target.name]:e.target.value })
    }

    const savePost = async ()=>{
       await createPost(post);
       history.push('/');
    }

    return (
        <Box className={classes.container}>
            <img className={classes.image} src={url}  alt='banner'/>
            <FormControl className={classes.form}>
                {/*with the help of lable tag you can do work on input tag (which is used to
                get image) by the addcircle icon */}
                <label htmlFor='fileinput'>
                    <AddCircle fontSize='large' color='action'/>
                    <input
                        type='file'
                        id='fileinput'
                        style={{display:'none'}}
                        onChange={(e)=>setFile(e.target.files[0])}
                    />
                </label>

                <InputBase onChange={(e)=>handleChange(e)} placeholder='Title' className={classes.textfield} color="primary" name='title'/>
                <Button onClick={()=> savePost()} variant>Publish</Button>
                </FormControl>

                <TextareaAutosize
                    onChange={(e)=>handleChange(e)}
                    minRows={5}
                    placeholder='Tell your story...'
                    className={classes.textarea}
                    name='description'
                />
            
        </Box>
    )
}

export default CreateView;