import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Card, Container, Paper, Typography } from "@material-ui/core";

const Option = ({ data }) => {
  return (
    <Typography
      variant="h6"
      color="textSecondary"
      style={{ height: 50, padding: 10, marginTop: 10 }}
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
      if (answer === value.slice(3)) {
        setResult(1);
      } else {
        setResult(0);
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
        <div onClick={(e) => handleClick(e.target.textContent)}>
          <Option data={`a. ${question.options[0]}`} />
        </div>
        <div onClick={(e) => handleClick(e.target.textContent)}>
          <Option data={`b. ${question.options[1]}`} />
        </div>
        <div onClick={(e) => handleClick(e.target.textContent)}>
          <Option data={`c. ${question.options[2]}`} />
        </div>

        <div onClick={(e) => handleClick(e.target.textContent)}>
          <Option data={`d. ${question.options[3]}`} />
        </div>
      </div>
    </Paper>
  );
}
