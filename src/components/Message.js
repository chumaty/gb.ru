//system
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//custom
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '450px',
        backgroundColor: theme.palette.background.paper,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
}));

export const Message3 = ({ answer,chatId }) => {
    const author = useSelector((state) => state.profile.author);
    const classes = useStyles();
    return (
        <>
            {   
                answer[chatId].map((v, index) =>
                    v.date != '' &&
                    <div className={classes.root} key={index}>
                        <div className={classes.section1}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h5">
                                        {author}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6">
                                        {v.date}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="textSecondary" variant="body2">
                                {v.message}
                            </Typography>
                        </div>
                    </div>
                )
            }
        </>
    )

}
