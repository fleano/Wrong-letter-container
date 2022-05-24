import WrongLettersContainer from "./wrongLettersContainer/WrongLettersContainer";
import { useState } from "react";

const DummyLetterChosen = "a";
// Dummy database of wrong letters chosen by player
const DummyWrongLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
];

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
    <div>
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
    </div>
  );
}

export default App;
