
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

// Firebase Initializing
export const initializeLogInFramework = () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }else {
        firebase.app();
    }
}


// Google Sign In

export const getGoogleAuth = () => {
    
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(googleProvider)
    .then((result) => {
        const {displayName, email, photoURL} = result.user;
        const signedInUser = {
            isSignIn: true,
            name: displayName,
            email: email,
            image: photoURL,
            success: true
        };

        return signedInUser;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        console.log(error);
        console.log(error.message);
    });

}


// Sign Out 

export const getSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
        const signedInUser = {
            isSignIn: false,
            name: '',
            email: '',
            image: '',
            success: false
        }
        return signedInUser
    })
    .catch((error) => {
     console.log(error, error.message)
    });
}

