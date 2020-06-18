import React, { useState, useContext } from "react";
import Answers from "./Answers";
import NextButton from "./NextButton";
import TextPanel from "./TextPanel";
import QuizContext from "../contexts/QuizContext";

const Questions = ({ onQuizDone }) => {
  const [currentAnswer, setCurrentAnswer] = useState("");
  const { quizData, dispatch } = useContext(QuizContext);
  const { question, category, difficulty, randomAnswers } = quizData.question;
  const { questionNumber, questions } = quizData;

  const changeQuestion = () => {
    if (currentAnswer !== "") {
      dispatch({ type: "SET_CURRENT_ANSWER", currentAnswer: currentAnswer });
      setCurrentAnswer("");

      if (questionNumber === questions.length) {
        onQuizDone();
      } else {
        dispatch({ type: "NEXT_QUESTION" });
      }
    }
  };

  const onAnswerClick = (answer) => {
    setCurrentAnswer(answer);
  };

  return (
    <div>
      <TextPanel
        header={`Fråga (${questionNumber} av ${questions.length})`}
        text={question}
        metaText={`${category} - ${difficulty}`}
      />
      <Answers
        selectedAnswer={currentAnswer}
        onAnswerClick={onAnswerClick}
        answers={randomAnswers}
      />
      <NextButton
        text="Nästa fråga"
        onClick={changeQuestion}
        disabled={currentAnswer === ""}
      />
    </div>
  );
};

export default Questions;
