import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.addNote(text);
    setText({
      title: "",
      content: ""
    });
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {isExpanded && (
        <input
                onChange={handleChange}
                name="title"
                placeholder="Title"
                value={text.title}
              />
      )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={text.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
