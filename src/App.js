import React from "react";
import "./App.css";
import "./css/bootstrap-fresca-theme.min.css";

import TriviaQuiz from "./components/TriviaQuiz";
import { QuizConfigContextProvider } from "./contexts/QuizConfigContext";
import { QuizContextProvider } from "./contexts/QuizContext";

function App() {
  return (
    <QuizConfigContextProvider>
      <QuizContextProvider>
        <TriviaQuiz />
      </QuizContextProvider>
    </QuizConfigContextProvider>
  );
}

export default App;
