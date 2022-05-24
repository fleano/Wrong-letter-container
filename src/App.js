import logo from "./logo.svg";
import "./App.css";
import WrongLettersContainer from "./components/WrongLettersContainer";
import { useState } from "react";

const DummyLetterChosen = "a";
// Dummy database of wrong letters chosen by player
const DummyWrongLetters = ["b", "f", "g"];

function App() {
  const [letterChosen, setLetterChosen] = useState(DummyLetterChosen);
  const [wrongLetters, setWrongLetters] = useState(DummyWrongLetters);

  // console.log functions
  function onCheckWrongLetters() {
    console.log("wrong Letters in the system are ", wrongLetters);
  }

  function onCheckLetterChosen() {
    console.log("Letter chosen by player is", letterChosen);
  }
  // end console.log functions

  function onWrongLetter() {
    console.log("wrong letter guessed");
    setWrongLetters((prevState) => [...prevState, letterChosen]);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/*         {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <button onClick={onCheckLetterChosen}>Log letter chosen by user</button>

        <button onClick={onCheckWrongLetters}>
          Log Wrong Letters already in the system
        </button>

        <button onClick={onWrongLetter}>Wrong Guess</button>
        {/* Custom component to be used in project, letter chosen prop is not used in component, just put it inside for just in case,
        when database of wrong letters updates, compoenet should also update with it  */}
        <WrongLettersContainer
          letterChosen={letterChosen}
          wrongLetters={wrongLetters}
        />
      </header>
    </div>
  );
}

export default App;
