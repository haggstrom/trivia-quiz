import React, { useState } from "react";
import Answers from "./Answers";
import NextButton from "./NextButton";
import TextPanel from "./TextPanel";
import useNextQuestion from "../hooks/useNextQuestion";

const Questions = ({ questions, onQuizDone }) => {
  const { question, questionNumber, nextQuestion } = useNextQuestion(questions);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const changeQuestion = () => {
    if (currentAnswer !== "") {
      setUserAnswers([...userAnswers, currentAnswer]);
      setCurrentAnswer("");

      if (nextQuestion()) {
        onQuizDone(userAnswers);
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
        text={question.question}
        metaText={`${question.category} - ${question.difficulty}`}
      />
      <Answers
        selectedAnswer={currentAnswer}
        onAnswerClick={onAnswerClick}
        answers={question.randomAnswers}
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
