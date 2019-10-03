import React from "react";
import QuestionsUploadForm from "./UploadForm";
import Home from "./Home";
import { Route } from "react-router-dom";
import "../styles/Reset.css";
import "../styles/App.css";

// Components
import Deck from "./Deck";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/deck" component={Deck} />
      <Route exact path="/" component={QuestionsUploadForm} />
    </div>
  );
}

export default App;
