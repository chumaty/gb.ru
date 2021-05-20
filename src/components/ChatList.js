//system
import React, { useEffect } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Avatar, MenuList, MenuItem, Typography, Button, IconButton, Badge } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from '@material-ui/icons/Close';

//custom
import { addChat, delChat, readChatWithThunk } from "../store/chat/actions";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    paperCenter: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    orange: {
        color: theme.palette.getContrastText('#FF4500'),
        backgroundColor: '#FF4500',
    },
    fuchsia: {
        color: theme.palette.getContrastText('#FF00FF'),
        backgroundColor: '#FF00FF',
    },
    indigo: {
        color: theme.palette.getContrastText('#4B0082'),
        backgroundColor: '#4B0082',
    },
    typography: {
        margin: '10px'
    },
    link: {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.54)',
    }
}));

export const ChatList = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const { chatId } = params;
    const classes = useStyles();

    const chatsList = useSelector((state) => state.chats.chatList);
    const chatRead = useSelector((state2) => state2.chats.chatRead);

    //add chat
    const handleAddChat = () => {
        dispatch(addChat());
    }

    //remove chat
    const handleRemoveItem = ({ index }) => {
        const newChat = { ...chatsList };
        delete newChat[index];
        dispatch(delChat(newChat));
    }

    if (!chatId || !chatsList[chatId]) {
        return <Redirect to="/chats/chat1" />
    }

    //reset read chat
    useEffect(() => {
        dispatch(readChatWithThunk({
            [chatId]:false,
        }))
    }, [chatRead[chatId]]);

    return (
        <>
            <Paper className={classes.paper}>
                <MenuList>
                    {Object.keys(chatsList).map((index) =>
                        <Link to={`/chats/${index}`} className={classes.link} key={index}>
                            <MenuItem>
                                <Badge
                                    color="secondary"
                                    variant="dot"
                                    invisible={chatRead[index] == true ? false : true}
                                >
                                    <Avatar className={classes[chatsList[index].classname]}>{chatsList[index].avatar}</Avatar>
                                </Badge>
                                <Typography variant="inherit" className={classes.typography}>{chatsList[index].name}</Typography>
                                {chatId != index && <IconButton aria-label="send" className={classes.iconButton} color="secondary" onClick={() => handleRemoveItem({ index })}>
                                    <DeleteIcon />
                                </IconButton>}
                            </MenuItem>
                        </Link>
                    )}
                </MenuList>
            </Paper>
            <Paper className={classes.paperCenter}>
                <Button variant="contained" color="primary" onClick={() => handleAddChat()}>Add Chat</Button>
            </Paper>
        </>
    )
}