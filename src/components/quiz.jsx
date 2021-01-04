import { Grid, Typography } from "@material-ui/core";
import { React, useState } from "react";
import Questions from "./question";
import QuestionBox from './questionBox';

function handleChange() {}

export default function Quiz() {
  const [state, setstate] = useState();
  return (
    <Grid alignContent="center" container spacing={3}>
      <Grid item xs={8}>
        <QuestionBox {Questions[0].question}  />
        
      </Grid>
    </Grid>
  );
}
