import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../styles/Form.css";

const Questions = props => {
  let [questions, setQuestions] = useState({});
  // prase csv into javascript object
  // source: https://gist.github.com/iwek/7154578
  function csvToObj(csv) {
    const lines = csv.split("\n");
    const result = [];

    // header values are hard coded since assuming quiz functionality
    const headers = ["question", "answer"];

    lines.splice(0, 1);

    lines.forEach(function(line) {
      if (line.length < 2) {
        return;
      }

      const obj = {};
      const curLine = line.split(",");

      headers.forEach(function(header, i) {
        obj[header] = curLine[i];
      });

      result.push(obj);
    });

    return result;
  }

  function onChangeHandler(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(event) {
      let result = csvToObj(reader.result);
      setQuestions((questions = result));
      // save the questions obj as a string to local storage
      localStorage.setItem("questions", JSON.stringify(questions));
      props.history.push("/deck");
    };

    reader.readAsText(file);
  }

  return (
    <div className="upload-form">
      <h1 className="upload-title">
        Upload new questions CSV to local storage.
      </h1>
      <br></br>
      <div>
        <label className="input-label">
          <button className="input-btn">upload</button>
          <input
            className="input-form"
            type="file"
            accept=".csv"
            name="file"
            onChange={onChangeHandler}
          />
        </label>
      </div>
    </div>
  );
};
export default withRouter(Questions);
