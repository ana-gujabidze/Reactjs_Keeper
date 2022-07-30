import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function removeNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        console.log(note, index);
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            removeNote={removeNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
