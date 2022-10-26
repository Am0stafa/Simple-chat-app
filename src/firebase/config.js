import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'




const firebaseConfig = {
    apiKey: "AIzaSyAqCRXCXUZwLgE23_hW51KzLJLAgn0ozns",
    authDomain: "superchat-5e202.firebaseapp.com",
    projectId: "superchat-5e202",
    storageBucket: "superchat-5e202.appspot.com",
    messagingSenderId: "461431567446",
    appId: "1:461431567446:web:54c9bee52bb51ad87b37f7"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const db = firebase.firestore()
//! this give us user info, is authenticated 
const auth = firebase.auth()


// timestamp
const timestamp = firebase.firestore.Timestamp

const signInWithGoogle = () => { 

    auth
        .signInWithPopup(provider)
        .then((result) => {


            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            console.log(user)
            const {displayName , uid , photoURL} = user;
            
            console.log(auth.currentUser)
    
        }).catch((error) => {
          var errorCode = error.code;
          
          var errorMessage = error.message;
    
          var email = error.email;
    
          var credential = error.credential;
            
            console.log(error)
        });
}

var provider = new firebase.auth.GoogleAuthProvider();



export { db, auth, timestamp,signInWithGoogle }