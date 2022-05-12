import logo from './logo.svg';
import './App.css';
import Paragraphs from './components/Paragraphs';
import TotalAmount from './components/TotalAmount';
import Test from './components/Test';



function App() {
  let myVariable = 10
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test />
        <p>
          Edito <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Paragraphs />
        <TotalAmount />
        <TotalAmount />
        <ul>
          <li>Boooooks: </li>
          <li>Pencils: <TotalAmount amount={125689} /></li>
          <li>Erasers: <TotalAmount /></li>
        </ul>

        <div>
          {myVariable === 0 ? <span>Nothing</span> : <span>{myVariable} €</span>}
          <h1>Hello world!</h1>
       
          <p>How are you?</p>
        </div>
      </header>
    </div>
  );
}

export default App;
