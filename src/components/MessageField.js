//system
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Grid, Paper, IconButton, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { useSelector, useDispatch } from "react-redux";
//custom
import { TopMenu } from "./TopMenu";
import { Message3 } from "./Message";
import { ChatList } from "./ChatList";
import { addMessageWithThunk } from "../store/messages/actions";
import { readChatWithThunk } from "../store/chat/actions";
import { Weather } from "./Weather";

export const MessageField3 = () => {
    let timeout;
    const chatsList = useSelector((state) => state.chats.chatList)
    const params = useParams();
    const { chatId } = params;
    const author = useSelector((state) => state.profile.author);
    const textarea = useRef();
    const [objMessage, setObjMessage] = useState({
        myMessage: ""
    });

    const handleChangeMessage = (event) => {
        const value = event.target.value;
        setObjMessage({ myMessage: value });
    }

    const [send, setSend] = useState(false);
    const formSubmit = (event) => {
        event.preventDefault();
        setSend(true);
        timeout = setTimeout(() => setSend(false), 1000);
    }

    const dispatch = useDispatch();
    const answer = useSelector((state) => state.messages.answer);
    // console.log(answer);
    if (send == true && objMessage.myMessage != '') {

        // dispatch(addMessage(
        dispatch(addMessageWithThunk(
            {
                'author': author,
                'message': objMessage.myMessage,
                'date': new Date().toLocaleTimeString(),
                'id': new Date().getTime(),
                'chatId': chatId,
                'read': false
            },
        ));
        // dispatch(readChat({
        dispatch(readChatWithThunk({
            [chatId]:true,
        }))

        setObjMessage({ myMessage: "" });
    }

    useEffect(() => {
        textarea.current.focus();
    }, []);

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'left',
            color: theme.palette.text.secondary,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        form: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
        },
        typography: {
            margin: '10px'
        },
        divscroll: {
            overflowY: 'auto',
            height: '50vh'
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><h2>#Lesson 7 - API - <TopMenu /></h2></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <Weather />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <ChatList />
                </Grid>
                <Grid item xs={9} className={classes.divscroll}>
                    <Paper className={classes.paper}>
                        {
                            chatsList[chatId] !== undefined &&
                            <div>Chat with - {chatsList[chatId].name}</div>
                        }
                        {
                            answer[chatId] !== undefined &&
                            <Message3 answer={answer} chatId={chatId} />
                        }
                    </Paper>
                    <Paper>
                        <form onSubmit={formSubmit} className={classes.form}>
                            <TextareaAutosize
                                className={classes.input}
                                rowsMax={4}
                                placeholder="Enter your message ..."
                                value={objMessage.myMessage}
                                onChange={handleChangeMessage}
                                ref={textarea}
                            />
                            <IconButton aria-label="send" className={classes.iconButton} color="primary" type="submit">
                                <SendIcon />
                            </IconButton>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}