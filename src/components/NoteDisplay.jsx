import React from 'react';
import MarkdownView from 'react-showdown';


const NoteDisplay = (props) => {
  return (
      <div className="card text-dark bg-secondary mb-3" >
        <div className="card-header">
          Affichage, centrage et interprétation du MarkDown (NoteDisplay.jsx)
        </div>
        <MarkdownView markdown={props.text} options={{ tables: true, emoji: true }} className="text-white bg-dark " />
      </div>
)
};

export default NoteDisplay;