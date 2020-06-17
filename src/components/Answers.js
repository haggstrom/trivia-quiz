import React from "react";
import Row from "react-bootstrap/Row";
import Answer from "./Answer";

const Answers = ({ answers, selectedAnswer, onAnswerClick }) => {

  return (
    <Row>
      {answers.map((answer, index) => {
        return (
          <Answer
            key={index}
            answer={answer}
            isSelected={selectedAnswer === answer}
            onClick={() => onAnswerClick(answer)}
          />
        );
      })}
    </Row>
  );
};

export default Answers;
