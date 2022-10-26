import React from 'react'

import {auth} from './firebase/config';

import SignIn from './SignIn';
import './App.css';
import ChatRoom from './ChatRoom';

function App() {


  return (
  <div className="App">
    <header>
      <h1>⚛️🔥💬</h1>
      <SignOut />
    </header>
    
    <section>
      {auth.currentUser ? <ChatRoom /> : <ChatRoom />}
    
    </section>
  </div>
  );
  
  
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }
}

export default App;
