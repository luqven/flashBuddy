import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Card from "./Card";
import "../styles/Deck.css";
const icon = require("../assets/refresh.svg");

function Deck(props) {
  // read the questions object from client storage
  const questions = JSON.parse(localStorage.getItem("questions")) || "";
  const max = Object.keys(questions).length - 1;

  //https://icons8.com/icons/set/refresh Refresh icon by Icons8
  const refreshIcon = max > 0 ? icon : "";

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

  const handleReset = function(e) {
    localStorage.removeItem("questions");
    props.history.push("/");
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

  const emptyDeck = questions.length > 1 ? "" : "hidden";

  return (
    <section className="deck-container">
      <ul className="deck">{deck}</ul>{" "}
      <div className="button-container">
        <button
          className={`deck-button ${emptyDeck} ${
            selected === 0 ? "disabled" : ""
          }`}
          onClick={handlePrev}
        >
          Previous card
        </button>
        <button
          className={`deck-button ${emptyDeck} ${
            selected === max ? "disabled" : ""
          }`}
          onClick={handleNext}
        >
          Next card
        </button>
        <img
          onClick={handleReset}
          src={refreshIcon}
          className={`refresh-icon ${max > 0 ? "" : "hidden"}`}
          alt="reset"
        />
      </div>
    </section>
  );
}

export default withRouter(Deck);
