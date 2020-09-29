import React from "react";

function Note(props) {

    function deleteItem() {
        const id = props.id;
        props.onDelete(prevValue => {
            return prevValue.filter((item, index) => index !== id)
        })
    }
    return (
        <div className="note-container">
            <h1> {props.title} </h1>
            <p> {props.content} </p>
            <button className="note-container-button" onClick={deleteItem}>DELETE</button>
        </div>
    );
}

export default Note;