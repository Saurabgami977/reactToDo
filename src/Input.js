import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import Alert from './alert';
import Note from './Note';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Input() {
    const classes = useStyles();
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('');
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        const timer = (alert === true) ? setTimeout(() => setAlert(false), 3000) : null;
        return () => clearTimeout(timer)
    }, [alert]);
    const inputHandler = (e) => {
        setInput(e.target.value)
    };
    const submitHandler = (e, input, notes) => {
        e.preventDefault();
        const id = (notes.length) ? notes[notes.length - 1].id + 1 : 1;
        setNotes([...notes, { message: input, id: id }]);
        setInput('');
        setAlert(false);
    }
    const deleteNoteHandler = (id, notes, setNotes) => {
        setNotes(notes.filter(note => note.id !== id))
    }
    return (
        <div>
            {alert === true ?
                <div className={classes.root}>
                    <Alert
                        click={() => { setAlert(false) }}
                        message='Please Enter Valid Notes' />
                    {/* <Alert severity="error" onClose={() => { setAlert(false) }}></Alert> */}
                </div> : null
            }
            <form
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '30px auto'
                }}
                onSubmit={((input.length) > 2) ? (e) => submitHandler(e, input, notes) : (e) => {
                    e.preventDefault();
                    setAlert(true);
                }}
                key='form'>
                <TextField
                    style={{ width: '900px' }}
                    onChange={(e) => inputHandler(e)}
                    value={input}
                    label="Add notes" />
                <Button
                    size="small"
                    type='submit'
                    variant="contained"
                    color="primary">
                    Add Note
                </Button>
            </form>
            {
                notes.length > 0 ? notes.map(note => (
                    <Note
                        key={note.id}
                        message={note.message}
                        id={note.id}
                        delete={(id) => deleteNoteHandler(id, notes, setNotes)} />
                )) : <Alert message='Nothing to show!' />
            }
        </div>
    )
}
