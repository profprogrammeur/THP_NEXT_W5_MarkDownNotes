import React from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import NotesList from './components/NotesList';

function App() {
  const [textMarkdowned, setTextMarkdowned]=React.useState("")
  const getText = (textComponent) => { 
    setTextMarkdowned(textComponent)
 }

  const clearDisplayNote = () => {
    setTextMarkdowned("")
  }

  const [notes, setNotes] = React.useState([])
  const DisplayList = () => {
    let noteId = localStorage.getItem('noteId');
    noteId = Number.parseInt(noteId);
    let notesArray=[]
    for (let i=0;i<noteId;i++){
     notesArray.push(localStorage.getItem(`note${i}`))
    }
    setNotes(notesArray)
    console.log("arrraay: "+ notesArray)
  }
  React.useEffect(() => { DisplayList() }, []);


  return (
    <div className="App container-fluid">
      <div className='row'>
        <div className="col-3 bg-success">
        <NotesList notes={notes}/>
      </div>
      <header className="App-header col-9">
        <img src={logo} className="App-logo" alt="logo" />
        <NoteDisplay text={textMarkdowned}/>
        <MarkdownInput onChange={getText} refreshDisplay={DisplayList} clearDisplayNote={clearDisplayNote}/>
      </header>
      </div>
    </div>
  );
}

export default App;
