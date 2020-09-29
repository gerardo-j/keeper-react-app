import React, { useState } from "react";

function AddNote(props) {

    const [formValue, setFormValue] = useState({
        title: "",
        content: ""
    })
    function onClick() {
        props.onAdd(prevValue => {
            return [...prevValue, formValue];
        })
        setFormValue({
            title: "",
            content: ""
        })
    }
    function handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setFormValue(prevValue => ({
            ...prevValue,
            [inputName]: inputValue
        }))
    }
    return (
        <div className="note-container create-note">
            <input 
                name="title" 
                onChange={handleChange} 
                className="create-note-input" 
                placeholder="Title"
                value={formValue.title}
            />
            <textarea 
                name="content" 
                onChange={handleChange} 
                className="create-note-input" 
                placeholder="Take a note..."
                value={formValue.content}
            />
            <button onClick={onClick} className="create-note-button">Add</button>
        </div>
    )
}

export default AddNote;