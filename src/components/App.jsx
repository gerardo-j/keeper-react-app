import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import AddNote from "./AddNote";

function App() {

    const [notes, updateNotes] = useState([]);

    return (
        <div>
            <Header />
            <AddNote onAdd={updateNotes}/>
            {notes.map( (note, index) =>
                <Note 
                    key={index}
                    id={index}
                    onDelete={updateNotes}
                    title={note.title} 
                    content= {note.content} 
                />
            )}
        </div>
    );
}

export default App;