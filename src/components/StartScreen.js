import React from "react";
import NextButton from "./NextButton";
import TextPanel from "./TextPanel";

const StartScreen = ({ onStartQuiz }) => {
  return (
    <div className="fixed-width">
      <TextPanel
        header="Trivia Quiz"
        text={
          <span>
            Frågor hämtas från{" "}
            <a
              href="https://opentdb.com/api_config.php"
              title="Trivia API"
              rel="noopener noreferrer"
              target="_blank"
            >
              Trivia API
            </a>
          </span>
        }
      />
      <NextButton text="Start Quiz" onClick={onStartQuiz} />
    </div>
  );
};

export default StartScreen;
