import React from "react";

export default function WeclomeText() {
  const questions = JSON.parse(localStorage.getItem("questions")) || "";
  const welcomeText =
    Object.keys(questions).length > 1 ? "Click to flip card." : "Deck is empty";
  return (
    <div className="deck-title-container">
      <p className="deck-title">{`${welcomeText}`}</p>
    </div>
  );
}
