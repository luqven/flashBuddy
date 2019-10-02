import React, { useState } from "react";

const Questions = () => {
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
    };

    reader.readAsText(file);
  }

  return (
    <div className="upload-form">
      <h1 className="upload-title">
        Upload new questions CSV to local storage.
      </h1>
      <br></br>
      <input type="file" name="file" onChange={onChangeHandler} />
    </div>
  );
};
export default Questions;
