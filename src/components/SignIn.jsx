import React from 'react'
import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const SignIn = ({auth}) => {

const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )
}

export default SignIn