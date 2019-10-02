import React, { useState, useEffect } from "react";
// styles
import "../styles/Card.css";
// components
import CardContent from "./CardContent";

function Card(props) {
  // store the state of the card
  const [flipped, setFlipped] = useState(false);
  const [color, setColor] = useState("transparent");
  const [content, setContent] = useState(!flipped ? props.front : props.back);

  function handleClick(e) {
    setColor("transparent");
    setFlipped(!flipped);
  }

  useEffect(() => {
    setTimeout(function() {
      setColor("black");
      setContent(!flipped ? props.front : props.back);
    }, 500);
  });

  return (
    <section className="card-container">
      <div
        onClick={e => handleClick(e)}
        className={`card ${!flipped ? "card-front" : "card-back"}`}
      ></div>
      <CardContent color={color} content={content} />
      <CardContent content={""} />
    </section>
  );
}

export default Card;
