import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai';

const Input = ({ addMessage }) => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        const text = e.target.value
        setMessage(text);
        console.log(text);
    }

    const clickHandler = () => {
        if (message.trim() !== '') {
            addMessage(message);
            setMessage('');
        }
    }

    return (
        <div className='send-messages'>
            <input
                className='messages-input'
                placeholder='Type something...'
                value={message}
                onChange={handleMessageChange}

            />
            <button className='messages-button'
                onClick={clickHandler}
            >
                <AiOutlineSend className='icon' />
            </button>
        </div>
    )
}

export default Input
