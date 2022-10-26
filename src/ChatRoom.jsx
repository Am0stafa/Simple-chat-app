import React, { useRef, useState } from 'react';
import {db ,auth} from './firebase/config';

const ChatRoom = () => {
    const dummy = useRef();

    const messagesRef = db.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');
    
    const sendMessage = async (e) => {
        e.preventDefault();
        
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          photoURL
        })

        setFormValue('');
        
        //! scroll down to the bottom of the chat
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

  return (
  <>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
        <button type="submit" disabled={!formValue}>🕊️</button>
    </form>

    </main>

  </>
  )
}

export default ChatRoom