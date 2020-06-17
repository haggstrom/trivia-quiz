import React, { useState, useContext } from "react";
import Quiz from "./Quiz";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import triviaApiUtil from "../util/triviaApiUtil";
import StartScreen from "./StartScreen/StartScreen";
import QuizConfigContext from "../contexts/QuizConfigContext";
import useTriviaApi from "../hooks/useTriviaApi";

const TriviaQuiz = () => {
  const { quizConfig, dispatch } = useContext(QuizConfigContext);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [url, setUrl] = useState("");
  const { questions, isLoading } = useTriviaApi(url);

  const onRestart = () => {
    dispatch({ type: "RESET_CONFIG" });
    setShowStartScreen(true);
  };

  const onStartQuiz = () => {
    setUrl(triviaApiUtil.buildUrl(quizConfig));
    setShowStartScreen(false);
  };

  return (
    <Container className="h-100 bg-primary">
      <Row className="align-items-center h-100">
        {/* <div className="mx-auto"> */}
        <div className="fixed-width">
          <Jumbotron className="bg-primary my-border">
            {showStartScreen || isLoading ? (
              <StartScreen onStartQuiz={onStartQuiz} />
            ) : (
              <Quiz questions={questions} onRestart={onRestart} />
            )}
          </Jumbotron>
        </div>
      </Row>
    </Container>
  );
};

export default TriviaQuiz;
