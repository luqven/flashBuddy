import React, { useState } from "react";
import Card from "./Card";
import "../styles/Deck.css";

export default function Deck() {
  // read the questions object from client storage
  const questions = JSON.parse(localStorage.getItem("questions") || {});
  const max = Object.keys(questions).length - 1;

  let [selected, setSelected] = useState(0);

  // hide current question and select next on click
  const handleNext = function(e) {
    const disabled = e.target.classList.contains("disabled") ? true : false;

    if (disabled) {
      return;
    }

    setSelected(selected + 1);
    const curCard = document.getElementById("card-" + selected);
    if (curCard) {
      curCard.classList.toggle("hidden");
    }
  };

  const handlePrev = function(e) {
    const disabled = e.target.classList.contains("disabled") ? true : false;

    if (disabled) {
      return;
    }
    setSelected(selected - 1);
    const curCard = document.getElementById("card-" + selected);
    if (curCard) {
      curCard.classList.toggle("hidden");
    }
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
      <div className="button-container">
        <button
          className={`deck-button ${selected === max ? "disabled" : ""}`}
          onClick={handleNext}
        >
          Next card
        </button>
        <button
          className={`deck-button ${selected === 0 ? "disabled" : ""}`}
          onClick={handlePrev}
        >
          Previous card
        </button>
      </div>
    </section>
  );
}
