import React from "react";
import NextButton from "./NextButton";
import TextPanel from "./TextPanel";
import AnsweredQuestion from "./AnsweredQuestion";
import ListGroup from "react-bootstrap/ListGroup";

const Score = ({ userAnswers, questions, onRestart }) => {
  const numQuestions = questions.length;
  const correctAnswers = userAnswers.reduce((sum, answer, index) => {
    return answer === questions[index].correct_answer ? sum + 1 : sum;
  }, 0);

  return (
    <div className="fixed-width">
      <TextPanel
        header="Resultat"
        text={`${correctAnswers} av ${numQuestions} rätt`}
      />
      <ListGroup style={{ marginTop: "10px" }}>
        {questions.map((question, index) => (
          <AnsweredQuestion
            key={index}
            questionNumber={index + 1}
            question={questions[index]}
            userAnswer={userAnswers[index]}
          />
        ))}
      </ListGroup>

      <NextButton text="Nytt Quiz" onClick={onRestart} />
    </div>
  );
};

export default Score;
