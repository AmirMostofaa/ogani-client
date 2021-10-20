import React from 'react';
import './Login.css';
import { Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { getGoogleAuth, getSignOut, initializeLogInFramework } from './LoginManager';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


const Login = () => {

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };






     const classes = useStyles();

     initializeLogInFramework();

     const [loggedInUser, setLoggedInUser] = useContext(UserContext);

     const [user, setUser] = useState({
         isSignIn: false,
         name: '',
         email: '',
         password: ''
     })

     // Google Sign In
    const handleGoogleSignIn = () => {
        getGoogleAuth()
        .then(res => {
            setUser(res)
            setLoggedInUser(res);
            history.replace(from);
            console.log(res)
        })

    }

    // Sign Out
    const handleSignOut = () => {
        getSignOut()
        .then(res => {
            setUser(res);
            setLoggedInUser(res)
            if(res){
                alert("You've successfully Signed Out")
            }
        })
    }


    return (
        <div className="p-5 text-center login-area">
            <Container>
                

                {
                    user.isSignIn &&
                    <div className="loggedUser">
                        <img src={user.image} alt="" />
                        <h4>Welcome, {user.name}</h4>
                        <p>You're Using this Email:</p>
                        <p>{user.email}</p>
                    </div>
                }

                {
                    user.isSignIn ?
                    <Button
                        onClick={handleSignOut}
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                    >
                        Sign Out
                    </Button>

                    :

                    <Button
                        onClick={handleGoogleSignIn}
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                    >
                        Sign In With Google
                    </Button>
                }
    
                
            {/* <Button
                onClick={handleGoogleSignIn}
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
            >
                Sign In With Google
            </Button> */}
                
            </Container>
        </div>
    );
};

export default Login;