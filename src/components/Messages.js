import React from 'react'

const Messages = ({ messages }) => {
    return (
        <div className='messages-container'>
            {
                messages.map((message, index) => (
                    <p key={index} className='message'>{message}</p>
                ))
            }
        </div>
    )
}

export default Messages;

