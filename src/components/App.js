import React from "react";
import QuestionsUploadForm from "./UploadForm";
import "../styles/Reset.css";
import "../styles/App.css";

// Components
import Deck from "./Deck";

const questions = {};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Flashcard-Buddy. Let's get studying.</p>
      </header>
      <p className="deck-title">Click to flip card.</p>
      <Deck questions={questions} />
      <br></br>
      <QuestionsUploadForm questions={questions} />
    </div>
  );
}

export default App;
