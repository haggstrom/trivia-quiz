import { useState } from "react";

const useNextQuestion = (questions) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [question, setQuestion] = useState(questions[questionIndex]);

  const nextQuestion = () => {
    if (questionIndex + 1 === questions.length) {
      return true;
    }
    setQuestionNumber(questionNumber + 1);
    setQuestionIndex(questionIndex + 1);
    setQuestion(questions[questionIndex + 1]);
    return false;
  };
  return { question, questionNumber, nextQuestion };
};

export default useNextQuestion;
