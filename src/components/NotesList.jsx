import React from 'react';

const NotesList = (props) => {
  let content = localStorage.getItem("content");
  const [notes, setNotes] = React.useState({text: content});


  return (
    <div>
      <h3>Affichage des notes (NotesList.jsx)</h3>
      <ul >
        {props.notes.map(
          (note, index) => { return (<li key={index} className="list-group-item list-group-item-success">{note}</li>)}
        )}
      </ul>
    </div>
  )

};

export default NotesList;