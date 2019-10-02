import React, { useState } from "react";
import Card from "./Card";
import "../styles/Deck.css";

export default function Deck() {
  // read the questions object from client storage
  const questions = JSON.parse(localStorage.getItem("questions") || {});

  let [selected, setSelected] = useState(0);

  // hide current question and select next on click
  const handleClick = function(e) {
    e.target.classList.toggle("hidden");
    setSelected((selected + 2) / questions.length);
  };

  // store array of cards as li elements
  const createDeck = function() {
    const deckList = [];

    Object.keys(questions).forEach((key, idx) => {
      let curQuestion = questions[key].question;
      let curAnswer = questions[key].answer;

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

  const deck = createDeck();

  return (
    <section className="deck-container">
      <ul className="deck">{deck}</ul>{" "}
      <button className="deck-button" onClick={handleClick}>
        Next card
      </button>
    </section>
  );
}
