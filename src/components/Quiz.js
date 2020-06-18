import React, { useState } from "react";
import Questions from "./Questions";
import Score from "./Score";

const Quiz = ({ onRestart }) => {
  const [showQuestions, setShowQuestions] = useState(true);

  const onQuizDone = () => {
    setShowQuestions(false);
  };

  return (
    <>
      {showQuestions ? (
        <Questions onQuizDone={onQuizDone} />
      ) : (
        <Score onRestart={onRestart} />
      )}
    </>
  );
};

export default Quiz;
