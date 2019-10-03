import React from "react";
import WelcomeText from "./WelcomeText";

export default function Home() {
  return (
    <div className="home-container">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Flashcard-buddy. Let's get studying.</p>
      </header>
      <WelcomeText />
    </div>
  );
}
