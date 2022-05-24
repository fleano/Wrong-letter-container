import "./wrongLettersContainer.css";

function WrongLettersContainer(props) {
  const letterChosen = props.letterChosen;
  const wrongLetters = props.wrongLetters;

  function ListItem(props) {
    //  There is no need to specify the key here:
    return <li className="grave-letter">{props.value}</li>;
  }

  function WrongLetters(props) {
    const listItems = props.wrongLetters.map((number, index) => (
      // Key should be specified inside the array.
      <ListItem key={index.toString()} value={number} />
    ));
    return <ul>{listItems}</ul>;
  }

  return (
    <div id="letter-graveyard" className="col-sm-4">
      <WrongLetters wrongLetters={wrongLetters} />
    </div>
  );
}

export default WrongLettersContainer;
