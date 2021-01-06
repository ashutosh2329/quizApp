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
  var optionSelected = 0;
  const [clicked, setClicked] = useState(false);
  const [clickedValue, setClickedValue] = useState("");

  const handleClick = (value) => {
    if (!clicked) {
      setClicked(true);
      optionSelected = value;
      if (answer === value) {
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
        {question.options.map((option) => {
          return (
            <div onClick={(e) => handleClick(e.target.innerText)}>
              <Typography
                variant="h6"
                color="textSecondary"
                style={{
                  height: 50,
                  padding: 10,
                  marginTop: 10,
                  backgroundColor: clicked
                    ? answer === optionSelected
                      ? "green"
                      : "red"
                    : "lightpink",
                }}
              >
                {option}
              </Typography>
            </div>
          );
        })}
      </div>
    </Paper>
  );
}
