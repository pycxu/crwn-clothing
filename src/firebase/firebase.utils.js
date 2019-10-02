import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/analytics";
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAFkDh-BAqozF7i3Rr87Ueht05E9SOlw8",
    authDomain: "crwn-db-db5a5.firebaseapp.com",
    databaseURL: "https://crwn-db-db5a5.firebaseio.com",
    projectId: "crwn-db-db5a5",
    storageBucket: "",
    messagingSenderId: "790386517311",
    appId: "1:790386517311:web:5bff0ccbfc8aeca52e5f8a",
    measurementId: "G-4PQNKHQF8X"
}; 

export const  createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firebase.firestore().doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log("error creating user: ", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;