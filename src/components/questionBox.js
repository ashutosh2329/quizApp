import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Card, Container, Paper, Typography } from "@material-ui/core";

const Option = ({ data, id }) => {
  return (
    <Typography
      variant="h6"
      color="textSecondary"
      style={{ height: 50, padding: 10, marginTop: 10 }}
      id={id}
    >
      {data}
    </Typography>
  );
};

export default function QuestionBox({ question, counter, setResult }) {
  const answer = question.answer;
  const [clicked, setClicked] = useState(false);
  const [clickedValue, setClickedValue] = useState("");

  const handleClick = (value) => {
    if (!clicked) {
      setClicked(true);
      var element = document.getElementById(value.id);
      if (answer === value.textContent.slice(3)) {
        setResult(1);
        element.style.backgroundColor = "Lime";
      } else {
        setResult(0);
        element.style.backgroundColor = "red";
      }
    }
  };

  return (
    <Paper
      style={{
        padding: 20,
        marginTop: 30,
      }}
    >
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        {counter}.{question.Question}
      </Typography>
      <div>
        <div onClick={(e) => handleClick(e.target)}>
          <Option id="A" data={`a. ${question.options[0]}`} />
        </div>
        <div onClick={(e) => handleClick(e.target)}>
          <Option id="B" data={`b. ${question.options[1]}`} />
        </div>
        <div onClick={(e) => handleClick(e.target)}>
          <Option id="C" data={`c. ${question.options[2]}`} />
        </div>

        <div onClick={(e) => handleClick(e.target)}>
          <Option id="D" data={`d. ${question.options[3]}`} />
        </div>
      </div>
    </Paper>
  );
}
