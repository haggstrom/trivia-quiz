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

      {/* <Answer
        answer={question.a}
        isSelected={selectedAnswer === "a"}
        onClick={() => onAnswerClick("a")}
      />
      <Answer
        answer={question.b}
        isSelected={selectedAnswer === "b"}
        onClick={() => onAnswerClick("b")}
      />
      <Answer
        answer={question.c}
        isSelected={selectedAnswer === "c"}
        onClick={() => onAnswerClick("c")}
      />
      <Answer
        answer={question.d}
        isSelected={selectedAnswer === "d"}
        onClick={() => onAnswerClick("d")}
      /> */}
    </Row>
  );
};

export default Answers;
