import React, { useState } from "react";
import { MessageField3 } from "./components/MessageField3";
import { Container } from '@material-ui/core';
import { useParams, Redirect } from "react-router-dom";

// console.info('Render app');

const initialChatsList = {
    chat1:{
        avatar: "H",
        classname: "orange",
        name: "Harrison Smith"
    },
    chat2:{
        avatar: "E",
        classname: "indigo",
        name: "Emma Watson"
    },
    chat3:{
        avatar: "J",
        classname: "fuchsia",
        name: "Jasica Alba"
    },
}

export const App = (props) => {
    const [arr, setArr] = useState([new Date().toLocaleTimeString()]);
    const [chatsList, setChatsList] = useState(initialChatsList);

    const params = useParams();
    const { chatId } = params;

    if (!chatId || !chatsList[chatId]) {
        return <Redirect to="/chats/chat1" />
    }

    return (
        <>
            <Container fixed>
                <MessageField3 chatId={chatId} chatsList={chatsList} setChatsList={setChatsList}/>
            </Container>
        </>
    );
}