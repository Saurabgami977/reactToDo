// import React, { useState } from 'react';
// import Note from './Note';

// const Input = () => {
//     const [notes, setNotes] = useState([]);
//     const [input, setInput] = useState('');

//     const handleSubmit = (e, input, notes) => {
//         e.preventDefault();
//         const id = (notes.length) ? notes[notes.length - 1].id + 1 : 1;
//         setNotes([...notes, { message: input, id: id }]);
//         setInput(' ')
//     }

//     const deleteNoteHandler = (id, notes, setNotes) => {
//         setNotes(notes.filter(note => note.id != id))
//     }

//     return (
//         <div>
//             <form onSubmit={(e) => handleSubmit(e, input, notes)}>
//                 <input onChange={(e) => setInput(e.target.value)} value={input}></input>
//                 <button type="submit">Add Note</button>
//             </form>
//             {notes.map(note => (
//                 <Note
//                     message={note.message}
//                     id={note.id}
//                     delete={(id) => deleteNoteHandler(id, notes, setNotes)} />
//             ))}
//         </div>
//     )
// }

// export default Input;


import React, { useState } from 'react';
import Note from './Note';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

export default function Input() {

    const [notes, setNotes] = useState([]);

    const [input, setInput] = useState();
    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    const submitHandler = (e, input, notes) => {
        e.preventDefault();
        const id = (notes.length) ? notes[notes.length - 1].id + 1 : 1;
        setNotes([...notes, { message: input, id: id }]);
        setInput('');
    }

    const deleteNoteHandler = (id, notes, setNotes) => {
        setNotes(notes.filter(note => note.id !== id))
    }
    return (
        <div>
            <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px auto' }} onSubmit={(e) => submitHandler(e, input, notes)} key='form'>
                <TextField style={{ width: '900px' }} onChange={(e) => inputHandler(e)} value={input} label="Add notes" />
                <Button size="small" type='submit' variant="contained" color="primary">Add Note</Button>
            </form>
            {notes.length > 0 ? notes.map(note => (
                <Note
                    key={note.id}
                    message={note.message}
                    id={note.id}
                    delete={(id) => deleteNoteHandler(id, notes, setNotes)} />
            )) : <h1>Nothing to show! Add notes </h1>}
        </div>
    )
}
