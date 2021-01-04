import { React, useState } from "react";
import './App.css'
import { Button } from '@material-ui/core';



export default function QuizApp() {
  const [option, setoption] = useState();

  
  function handleClick(event) {
    var element = document.getElementById(event.target.id);
    element.classList.toggle("onClick");
    console.log(event.target);
    setoption(event.target.textContent);
  }

  function handleSubmit() {
    console.log("submitted");
    console.log(option);
    
  }

  return (
    <div>
    <div className="question-container">
      <div className="question-statement">
        What is your name?
      </div>
      
        <div className="option"
          onClick={handleClick}
          id="A">
          option A
        </div>
        <div className="option"
          onClick={handleClick}
          id="B">
          option B
        </div>

        <div className="option"
          onClick={handleClick}
          id="C">
          option C
        </div>

        <div className="option"
          onClick={handleClick}
          id="D">
          option D
        </div>
      </div>
      <Button
        color="primary" onClick={handleSubmit}>
        Submit
       </Button>
      </div>

  );
}
