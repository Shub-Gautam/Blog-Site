import { Box , makeStyles ,FormControl,InputBase,Button,TextareaAutosize} from "@material-ui/core";
import {AddCircle} from '@material-ui/icons';

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

const UpdateView = () =>{
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    return (
        <Box className={classes.container}>
            <img className={classes.image} src={url}  alt='banner'/>
            <FormControl className={classes.form}>
                <AddCircle fontSize='large' color='action'/>
                <InputBase placeholder='Title' className={classes.textfield} color="primary"/>
                <Button variant>Update</Button>
                </FormControl>
                <TextareaAutosize 
                minRows={5} 
                placeholder='Tell your story...'
                className={classes.textarea}
                />
            
        </Box>
    )
}

export default UpdateView;