import firebase from 'firebase/app'

import 'firebase/firestore'

import 'firebase/auth'

const config ={
    apiKey: "AIzaSyA08nU_1PEr9MLZumdVubBawGYl8AyjwuI",
    authDomain: "crwn-db-4a57d.firebaseapp.com",
    projectId: "crwn-db-4a57d",
    storageBucket: "crwn-db-4a57d.appspot.com",
    messagingSenderId: "34449364671",
    appId: "1:34449364671:web:94d83156fcef6085dad80a"
  }


  export const createUserPRofileDocument = async (userAuth,additionalData) => {

    if(!userAuth) {
        return 
    }


    const userRef=firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get(); 

    if(!snapShot.exists) {
        const {displayName,email} =userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user',err.message);
        }
    }


    return userRef


  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInwithGoogle =() => auth.signInWithPopup(provider);

export default firebase;