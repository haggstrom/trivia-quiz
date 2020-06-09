import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const AnsweredQuestion = ({ questionNumber, question, userAnswer }) => {
  const variant = userAnswer === question.correct_answer ? "success" : "danger";
  return (
    <ListGroup.Item key={questionNumber} variant={variant}>
      {questionNumber}. {question.question} - {question.correct_answer}
    </ListGroup.Item>
  );
};

export default AnsweredQuestion;
