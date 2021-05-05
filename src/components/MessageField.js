import React, { useEffect, useState, useCallback } from "react";
import {Message} from "./Message"
// console.info('Include MessageField');

export const MessageField = () => {

    const [objMessage,setObjMessage] = useState({
        author: "I am author",
        myMessage: "My first message"
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setObjMessage((prevObjMessage) => ({...prevObjMessage, [name]:value}));
    }

    const [send,setSend] = useState(false);
    const handleSubmit = (event) => {
        setSend(true);
        setTimeout(() => setSend(false), 1000);
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p><input name="author" value={objMessage.author} onChange={handleChange} placeholder="Enter author name" /></p>
                <p><textarea name="myMessage" value={objMessage.myMessage} onChange={handleChange} placeholder="Enter your message" rows="5" cols="40" /></p>
                <p><input type="submit" value="Click" /></p>
            </form>
            <Message objMessage={objMessage} send={send}/>
        </>
    )
}