import React from 'react'
import { auth } from '../firebase/config.js'

const ChatMessage = (props) => {
    const { text, uid, photoURL } = props.message;
  
    //^ to distinguish between massages send and received by comparing the currently logged in user with the user id on the message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
     </>
    
    )
}



export default ChatMessage