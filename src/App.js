import React from "react";
import "./App.css";
import "./css/bootstrap-fresca-theme.min.css";

import TriviaQuiz from "./components/TriviaQuiz";
import { QuizConfigContextProvider } from "./contexts/QuizConfigContext";

function App() {
  return (
    <QuizConfigContextProvider>
      <TriviaQuiz />
    </QuizConfigContextProvider>
  );
}

export default App;
