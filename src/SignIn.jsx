import React from 'react'
import {signInWithGoogle} from './firebase/config';



const SignIn = () => {


  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )
}

export default SignIn