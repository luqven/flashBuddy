import React from "react";
import QuestionsUploadForm from "./UploadForm";
import WelcomeText from "./WelcomeText";
import "../styles/Reset.css";
import "../styles/App.css";

// Components
import Deck from "./Deck";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Flashcard-buddy. Let's get studying.</p>
      </header>
      <WelcomeText />
      <Deck />
      <br></br>
      <QuestionsUploadForm />
    </div>
  );
}

export default App;
