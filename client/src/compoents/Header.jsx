
import {AppBar , Toolbar, Typography , makeStyles, colors, Container } from "@material-ui/core"
import {Link, useHistory} from "react-router-dom";
import {useOktaAuth} from "@okta/okta-react";

// mmakeStyles is used to implements CSS inside this.
const useStyles = makeStyles({
    components:{
        background: "#FFFFFF",
        color: "black"
    },

    container:{
        justifyContent: "center",
        // this is a property , by this all the child elements will get
        // this property by default ,,,, we use this to provide padding
        //to the child components like HOME, ABOUT etc.
        '&>*':{
            padding:"20px"
        }
    }
});



//We create a JS function that defines Header  
const Header = () => {
    const classes = useStyles();
    const history = useHistory();


    const login = async () => history.push('/login');

    const logout = async () => oktaAuth.signOut();

    const { oktaAuth, authState } = useOktaAuth();

    if (!authState) return null;


    const button = authState.isAuthenticated ?
        <button onClick={logout}
                style={{
                    background: "unset",
                    border:"none",
                    textTransform:'uppercase',
                    fontFamily: 'Roboto',

                    fontSize:18,
                    cursor:'pointer'
                }
                }
        >Logout</button> :
        <button onClick={login}


        >Login</button>;

    return(
        //we use className instead of class because class is reserved in React
        <AppBar className={classes.components} >
            <Toolbar className={classes.container}>
                <Link to={'/'} style={{textDecoration:'none', color:'inherit'}}>
                    <Typography>HOME</Typography>
                </Link>
                
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>{button}</Typography>
            </Toolbar>
        </AppBar>
    )
}


// We export the Header
export default Header ;
