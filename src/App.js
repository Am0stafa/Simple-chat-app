import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import SignOut from './components/SignOut';
import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';

firebase.initializeApp({
  apiKey: "AIzaSyD9tyb5YCSsZoSbnGf82pp5vXExr4iAHDU",
  authDomain: "ourchat-aa787.firebaseapp.com",
  projectId: "ourchat-aa787",
  storageBucket: "ourchat-aa787.appspot.com",
  messagingSenderId: "47825630975",
  appId: "1:47825630975:web:ef2983ae7a44ca68a87eca"
})

const auth = firebase.auth();



function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <input className="key"/>
        <input className="key2"/>
        <input className="key3"/>
        <input className="key4"/>

        <SignOut auth={auth} />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn auth={auth} />}
      </section>

    </div>
  );
}



export default App;
