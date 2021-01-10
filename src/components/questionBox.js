import React, { useState } from "react";
import { Paper, Typography } from "@material-ui/core";

// main Questionbox function
export default function QuestionBox({
  question,
  counter,
  setResult,
  setTotalMarks,
}) {
  const answer = question.answer;
  const [clicked, setClicked] = useState("-1");
  var optionNumber = 65;

  // function to handle selections
  const handleSelect = (value, j) => {
    if (clicked === "-1") {
      setClicked(j);
      setTotalMarks(1);
      if (value === answer) {
        setResult(1);
      }
    }
  };

  return (
    <Paper
      style={{
        padding: 20,
        marginTop: 30,
        borderRadius: 20,
      }}
    >
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        Q {counter}. {question.Question}
      </Typography>
      <div>
        {question.options.map((option, j) => (
          <div
            key={j}
            onClick={(e) => handleSelect(e.target.innerText.slice(4), j)}
          >
            <Option
              optionNumber={optionNumber}
              optionData={option}
              backgroundColor={"lightBlue"}
              clicked={clicked}
              index={j}
              answer={answer}
            />
          </div>
        ))}
      </div>
    </Paper>
  );
}

// option box
const Option = ({
  optionNumber,
  optionData,
  backgroundColor,
  clicked,
  index,
  answer,
}) => {
  // color logic
  backgroundColor =
    clicked === index
      ? answer === optionData.toString()
        ? "lightLime"
        : "lightPink"
      : backgroundColor;
  if (clicked !== "-1") {
    backgroundColor =
      answer === optionData.toString() ? "lightGreen" : backgroundColor;
  }
  return (
    <Typography
      variant="h6"
      color="textSecondary"
      style={{
        height: 50,
        padding: 10,
        marginTop: 10,
        backgroundColor: backgroundColor,
        borderRadius: 20,
      }}
    >
      {String.fromCharCode(optionNumber)} : {optionData}
    </Typography>
  );
};
