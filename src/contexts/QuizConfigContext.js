import React, { createContext, useReducer } from "react";
import QuizConfigReducer, {QUIZ_CONFIG_DEFAULT} from "../reducers/quizConfigReducer";

const QuizConfigContext = createContext();

const QuizConfigContextProvider = (props) => {

  const [quizConfig, dispatch] = useReducer(QuizConfigReducer, QUIZ_CONFIG_DEFAULT);

  return (
    <QuizConfigContext.Provider
      value={{ quizConfig: quizConfig, dispatch: dispatch }}
    >
      {props.children}
    </QuizConfigContext.Provider>
  );
};

export default QuizConfigContext;
export { QuizConfigContextProvider };
