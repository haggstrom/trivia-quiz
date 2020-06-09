import React, { useState } from "react";
import Answers from "./Answers";
import NextButton from "./NextButton";
import TextPanel from "./TextPanel";

const Quiz = ({ userAnswers, setUserAnswers, questions, onQuizDone }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const nextQuestion = () => {
    if (currentAnswer !== "") {
      setUserAnswers([...userAnswers, currentAnswer]);
      setCurrentAnswer("");

      var quizDone = currentQuestion + 1 === questions.length;
      setCurrentQuestion(currentQuestion + 1);

      if (quizDone) {
        onQuizDone();
      }
    }
  };

  const onAnswerClick = (answer) => {
    setCurrentAnswer(answer);
  };

  return (
    <div className="fixed-width">
      <TextPanel
        header={`Fråga (${currentQuestion + 1} av ${questions.length})`}
        text={questions[currentQuestion].question}
        metaText={questions[currentQuestion].category}
      />
      <Answers
        selectedAnswer={currentAnswer}
        onAnswerClick={onAnswerClick}
        // key={questions[currentQuestion].id}
        answers={questions[currentQuestion].randomAnswers}
      />
      <NextButton
        text="Nästa fråga"
        onClick={nextQuestion}
        disabled={currentAnswer === ""}
      />
    </div>
  );
};

export default Quiz;
