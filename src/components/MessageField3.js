import React, { useEffect, useState, useRef } from "react";
import { TopMenu } from "./TopMenu";
import { Message3 } from "./Message3";
import { ChatList } from "./ChatList3";
import { CONSTANTS } from "../helpers/Constants";
import { Grid, Paper, IconButton, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
// console.info('Include MessageField');

export const MessageField3 = ({ chatId, chatsList, setChatsList }) => {
    let timeout;
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
    const [answer, setAnswer] = useState({})
    useEffect(() => {
        if (send == true && objMessage.myMessage != '') {

            // p.s. лучше решения не придумал
            if (answer[chatId] !== undefined) {
                setAnswer(
                    {
                        [chatId]: [
                            ...answer[chatId],
                            { 'author': CONSTANTS.author, 'message': objMessage.myMessage, 'date': new Date().toLocaleTimeString() },
                        ]
                    },
                );
            } else {
                setAnswer(
                    {
                        [chatId]: [
                            { 'author': CONSTANTS.author, 'message': objMessage.myMessage, 'date': new Date().toLocaleTimeString() },
                        ]
                    },
                );
            }

            setObjMessage({ myMessage: "" });

            return () => clearTimeout(timeout);
        }
    }, [send]);

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
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><h2>#Lesson 4 - Routes - <TopMenu /></h2></Paper>
                </Grid>
                <Grid item xs={3}>
                    <ChatList chatsList={chatsList} setChatsList={setChatsList} chatId={chatId}/>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <div>Chat with - {chatsList[chatId].name}</div>
                        {
                            answer[chatId] !== undefined &&
                            <Message3 answer={answer} send={send} chatId={chatId} />
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