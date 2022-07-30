import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

function Note(props) {
  function handleChange() {
    props.removeNote(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleChange}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
