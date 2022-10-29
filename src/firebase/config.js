
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';



const firebaseConfig = {
    apiKey: "AIzaSyAqCRXCXUZwLgE23_hW51KzLJLAgn0ozns",
    authDomain: "superchat-5e202.firebaseapp.com",
    projectId: "superchat-5e202",
    storageBucket: "superchat-5e202.appspot.com",
    messagingSenderId: "461431567446",
    appId: "1:461431567446:web:54c9bee52bb51ad87b37f7"
};

firebase.initializeApp(firebaseConfig)
var provider = new firebase.auth.GoogleAuthProvider();
const time = firebase.firestore.FieldValue.serverTimestamp()
const signInWithGoogle = () => { 

auth
    .signInWithPopup(provider)
    .then((result) => {


        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(user)
        const {displayName , uid , photoURL} = user;
        
        


    }).catch((error) => {
      var errorCode = error.code;
      
      var errorMessage = error.message;

      var email = error.email;

      var credential = error.credential;
        
        console.log(error)
    });
}



const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

export { firestore, auth,analytics,signInWithGoogle , time  }

