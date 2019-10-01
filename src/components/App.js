import React from "react";
import logo from "../assets/logo.svg";
import "../styles/Reset.css";
import "../styles/App.css";

// Components
import Deck from "./Deck";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>FlashCard Buddy. Let's get studying.</p>
      </header>
      <p className="deck-title">Click to flip card.</p>
      <Deck
        questions={{
          "why did the chicken cross the road?": "to get to the other side",
          "what did the fox say?": "AWHOOOOOOOO"
        }}
      />
    </div>
  );
}

export default App;
