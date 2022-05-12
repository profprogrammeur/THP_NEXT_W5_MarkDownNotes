import React from 'react';


const MarkdownInput = (props) => {
  const [input, setInput] = React.useState({ text: '' });
  let content = localStorage.getItem("content");
  const addText = () => {
  let value = document.getElementById('content').value;
    props.onChange(value)
  setInput({ text: value });
  };

  const handleSave =(e) => {
    console.log(e)
    let noteId = localStorage.getItem('noteId');
    if (!noteId) {
      localStorage.setItem('noteId', "0");
      noteId=0
    };
    localStorage.setItem(`note${noteId}`, input.text);
    localStorage.setItem('noteId', Number.parseInt(noteId) + 1 );
    e();
    console.log("LS =" + localStorage.getItem(`note${noteId}`))
    document.getElementById('content').value=""
    props.clearDisplayNote()  // !!!!
  }


  return (
    <div className="mt-3">
        Espace confortable pour rédiger la note (MarkdownInput.jsx) :
          <textarea id="content" name="story" defaultValue={content} rows="5" cols="33" onChange={addText} className="w-100">
          </textarea>
        <button className="btn btn-primary w-100" onClick={()=>handleSave(props.refreshDisplay)}>Sauver la note actuelle</button>
      <button className="btn btn-danger w-100 mt-2" onClick={() => { localStorage.clear();  window.location.reload(); }}>Vider la liste</button>
    </div>
  )

};

export default MarkdownInput;