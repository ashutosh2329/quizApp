import { React, useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import Qbank from './question';

export default function QuizApp() {
  const [option, setoption] = useState();

  function handleClick(event) {
    const id = ["A", "B", "C", "D"];
    id.splice(id.indexOf(event.target.id), 1);
    id.forEach((id) => {
      document.getElementById(id).classList = "option";
    });
    document.getElementById(event.target.id).classList.toggle("onClick");
    setoption(event.target.textContent);
  }

  function handleSubmit() {
    var Score = 0;
    (option === Qbank[0].answer) ? Score++ : console.log("wrong");
    return (
      <div>
        <h1>
          Your Score is {Score} out of 1
        </h1>
      </div>
    )
  }

  return (
    <div>
      <div className="question-container">
        <div className="question-statement">{ Qbank[0].Question}</div>

        <div className="option" onClick={handleClick} id="A">
          {Qbank[0].options[0]}
        </div>
        <div className="option" onClick={handleClick} id="B">
          { Qbank[0].options[1]}
        </div>

        <div className="option" onClick={handleClick} id="C">
          { Qbank[0].options[2]}
        </div>

        <div className="option" onClick={handleClick} id="D">
          { Qbank[0].options[3]}
        </div>
      </div>
      <Button color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      
    </div>
  );
}
