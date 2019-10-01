import React, { useState } from "react";
import Card from "./Card";
import "../styles/Deck.css";

export default function Deck(props) {
  const questions = Object.keys(props.questions);

  let [selected, setSelected] = useState(0);

  const handleClick = function(e) {
    e.target.classList.toggle("hidden");
    setSelected((selected + 2) / questions.length);
  };

  const createDeck = function(props) {
    const deckList = [];

    questions.forEach((curQuestion, idx) => {
      let curAnswer = props.questions[curQuestion];

      deckList.push(
        <li
          key={idx}
          id={"card-" + idx}
          className={idx === selected ? "" : "hidden"}
        >
          <Card front={curQuestion} back={curAnswer} />
        </li>
      );
    });
    return deckList;
  };

  const deck = createDeck(props);

  return (
    <section className="deck-container">
      <ul className="deck">{deck}</ul>{" "}
      <button className="deck-button" onClick={handleClick}>
        Next card
      </button>
    </section>
  );
}
