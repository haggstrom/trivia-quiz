import React, { useState, useContext } from "react";
import Quiz from "./Quiz";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import triviaApiUtil from "../util/triviaApiUtil";
import StartScreen from "./StartScreen/StartScreen";
import QuizConfigContext from "../contexts/QuizConfigContext";
import QuizContext from "../contexts/QuizContext";

const TriviaQuiz = () => {
  const { quizConfig, configDispatch } = useContext(QuizConfigContext);
  const { dispatch } = useContext(QuizContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showStartScreen, setShowStartScreen] = useState(true);

  const onRestart = () => {
    configDispatch({ type: "RESET_CONFIG" });
    setShowStartScreen(true);
  };

  const onStartQuiz = () => {
    let url = triviaApiUtil.buildUrl(quizConfig);
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          let questions = triviaApiUtil.parseQuestions(result);
          dispatch({ type: "SET_QUESTIONS", questions: questions });
          setIsLoading(false);
          setShowStartScreen(false);
        },
        (error) => {
          console.log("error" + error);
        }
      );
  };

  return (
    <Container className="h-100 bg-primary">
      <Row className="align-items-center h-100">
        <div className="fixed-width">
          <Jumbotron className="bg-primary my-border">
            {showStartScreen || isLoading ? (
              <StartScreen onStartQuiz={onStartQuiz} />
            ) : (
              <Quiz onRestart={onRestart} />
            )}
          </Jumbotron>
        </div>
      </Row>
    </Container>
  );
};

export default TriviaQuiz;
