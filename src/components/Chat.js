import React, { useState } from 'react'
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (newMessages) => {
        setMessages([...messages, newMessages]);
    }


    return (
        <div className='container'>
            <div className='chat-container'>
                <Messages messages={messages} />
                <Input addMessage={addMessage} />
            </div>
        </div>
    )
}

export default Chat;
