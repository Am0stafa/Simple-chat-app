import React, { useRef, useState } from 'react';
import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth } from './firebase/config.js'
import SignOut from './components/SignOut';
import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}








export default App;
