import { Card, Container, Typography } from "@material-ui/core";
import { Component, React } from "react";
import "./App.css";
import QUESTIONS from "./question";
import QuestionBox from "./questionBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: QUESTIONS,
      result: 0,
    };
  }

  render() {
    let counter = 1;
    return (
      <Container>
        <Typography variant="h2">Homepage</Typography>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 5, marginRight: 20 }}>
            {this.state.questions.map((question) => {
              return (
                <QuestionBox
                  key={question.Question}
                  question={question}
                  counter={counter++}
                  setResult={(res) => {
                    this.setState({ result: this.state.result + res }, () => {
                      console.log(this.state);
                    });
                  }}
                />
              );
            })}
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                position: "fixed",
                right: 300,
                top: 400,
                backgroundColor: "lightskyblue",
                height: 200,
                width: 200,
                textAlign: "center",
                paddingTop: 40,
              }}
            >
              <Typography variant="h4">RESULT</Typography>
              <Typography variant="h2" color="textSecondary">
                {this.state.result}/{counter - 1}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
