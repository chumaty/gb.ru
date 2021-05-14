import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Avatar, MenuList, MenuItem, Typography, Button, IconButton } from '@material-ui/core';
import { AddChat } from "./AddChat";
import DeleteIcon from '@material-ui/icons/Close';

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

const handleRemoveItem = ({ index, chatsList, setChatsList }) => {
    const temp = { ...chatsList };
    delete temp[index];
    setChatsList(temp);
}

export const ChatList = ({ chatsList, setChatsList, chatId }) => {
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.paper}>
                <MenuList>
                    {Object.keys(chatsList).map((index) =>
                        <Link to={`/chats/${index}`} className={classes.link} key={index}>
                            <MenuItem>
                                <Avatar className={classes[chatsList[index].classname]}>{chatsList[index].avatar}</Avatar>
                                <Typography variant="inherit" className={classes.typography}>{chatsList[index].name}</Typography>
                                {chatId != index && <IconButton aria-label="send" className={classes.iconButton} color="secondary" onClick={() => handleRemoveItem({ index, chatsList, setChatsList })}>
                                    <DeleteIcon />
                                </IconButton>}
                            </MenuItem>
                        </Link>
                    )}
                </MenuList>
            </Paper>
            <Paper className={classes.paperCenter}>
                <Button variant="contained" color="primary" onClick={() => AddChat({ chatsList, setChatsList })}>Add Chat</Button>
            </Paper>
        </>
    )
}