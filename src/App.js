import React, { useState } from "react";
import "./App.css";
import "./css/bootstrap-fresca-theme.min.css";

import Quiz from "./components/Quiz";
import Score from "./components/Score";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import questionUtil from "./util/questionUtil";
import StartScreen from "./components/StartScreen";

function App() {
  const [showQuiz, setShowQuiz] = useState(true);
  const [showStart, setShowStart] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  
  const onQuizDone = () => {
    setShowQuiz(false);
  };
  
  const onRestart = () => {
    setShowStart(true);
    setUserAnswers([]);
  };

  const onStartQuiz = () => {
    fetch("https://opentdb.com/api.php?amount=3&difficulty=medium&type=multiple")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          let questions = questionUtil.parseQuestions(result);
          setQuestions(questions);
          setShowStart(false);
          setShowQuiz(true);
        },
        (error) => {
          console.log(error);
        }
      )
  };

  return (
    <Container className="h-100">
      <Row className="align-items-center h-100">
        <div className="mx-auto">
          <Jumbotron className="bg-primary">
            {showStart ? (
              <StartScreen onStartQuiz={onStartQuiz} />
            ) : showQuiz ? (
              <Quiz
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
                questions={questions}
                onQuizDone={onQuizDone}
              />
            ) : (
              <Score
                userAnswers={userAnswers}
                questions={questions}
                onRestart={onRestart}
              />
            )}
          </Jumbotron>
        </div>
      </Row>
    </Container>
  );
}

export default App;
