import React from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";

// Components
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>FlashCard Buddy. Let's get studying.</p>
      </header>
      <p className="quiz-title">Click to flip card.</p>
      <Card
        front="why did the chicken cross the road?"
        back="to get to the other side"
      />
    </div>
  );
}

export default App;
