import React, { useState } from "react";
// styles
import "../styles/Card.css";
// components
import CardContent from "./CardContent";

function Card(props) {
  // store the state of the card
  const [flipped, setFlipped] = useState(false);

  function handleClick(e) {
    setFlipped(!flipped);
  }

  // store the cards contents
  const message = !flipped ? props.front : props.back;

  return (
    <section className="card-container">
      <div
        onClick={e => handleClick(e)}
        className={`card ${!flipped ? "card-front" : "card-back"}`}
      >
        <CardContent content={message} />
      </div>
    </section>
  );
}

export default Card;
