import React, { createContext, useReducer } from "react";
import QuizReducer from "../reducers/QuizReducer";

const QuizContext = createContext();

const QuizContextProvider = (props) => {
  const [quizData, dispatch] = useReducer(QuizReducer, {});

  return (
    <QuizContext.Provider value={{ quizData: quizData, dispatch: dispatch }}>
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
export { QuizContextProvider };
