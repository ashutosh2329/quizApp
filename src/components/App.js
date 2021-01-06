import { Container, Typography } from "@material-ui/core";
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
      totalMarks: 0,
    };
  }

  render() {
    let counter = 1;
    return (
      <Container maxWidth="md">
        <Typography align="center" variant="h2">
          QuizApp
        </Typography>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 4, marginRight: 20 }}>
            {this.state.questions.map((question) => {
              return (
                <QuestionBox
                  key={question.Question}
                  question={question}
                  counter={counter++}
                  setResult={(res) => {
                    this.setState(
                      { result: this.state.result + res },
                      () => {}
                    );
                  }}
                  setTotalMarks={(marks) => {
                    this.setState(
                      { totalMarks: this.state.totalMarks + marks },
                      () => {}
                    );
                  }}
                />
              );
            })}
          </div>
          <div style={{ flex: 2 }}>
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
                borderRadius: 20,
              }}
            >
              <Typography variant="h4">RESULT</Typography>
              <Typography variant="h2" color="textSecondary">
                {this.state.result}/{this.state.totalMarks}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
