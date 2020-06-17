import React, { useState } from "react";
import Questions from "./Questions";
import Score from "./Score";

const Quiz = ({ questions, onRestart }) => {
  const [showQuestions, setShowQuestions] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);

  const onQuizDone = (userAnswers) => {
    setUserAnswers(userAnswers);
    setShowQuestions(false);
  };

  return (
    <>
      {showQuestions ? (
        <Questions
          questions={questions}
          onQuizDone={onQuizDone}
        />
      ) : (
        <Score
          userAnswers={userAnswers}
          questions={questions}
          onRestart={onRestart}
        />
      )}
    </>
  );
};

export default Quiz;
