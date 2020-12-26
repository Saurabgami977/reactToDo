import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

const useStyles = makeStyles({
    root: {
        margin: '20px auto',
        maxWidth: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
export default function Note(props) {
    const classes = useStyles();
    return (
        <div key={props.id}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.message} | {props.id}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button size="small" variant="contained" color="secondary" onClick={() => props.delete(props.id)}><DeleteIcon /></Button>
                </CardActions>
            </Card>
        </div >
    )
}

