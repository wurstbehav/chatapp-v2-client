import React from 'react'
import ReactEmoji from 'react-emoji'
import './Message.css'



const Message = ({ name, message: { user, text } }) => {
    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    if (user === trimmedName) {
        isSentByCurrentUser = true
    }


    return (

        <div>
            {
                isSentByCurrentUser
                    ? (
                        <div className="messageContainer justifyEnd">
                            <p className="sentText pr-10">{trimmedName}</p>
                            <div className="messageBox backgroundBlue">
                                <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                            </div>
                        </div>
                    )
                    : (
                        <div className="messageContainer justifyStart">
                            <div className="messageBox backgroundLight">
                                <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                            </div>
                            <p className="sentText pl-10">{user}</p>
                        </div>
                    )
            }
        </div>

    )
}


export default Message