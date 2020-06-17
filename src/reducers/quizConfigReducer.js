const QUIZ_CONFIG_DEFAULT = {
  numQuestions: "3",
  category: "any",
  difficulty: "medium",
};

const QuizConfigReducer = (state, action) => {
  switch (action.type) {
    case "SET_NUMBER_OF_QUESTIONS":
      return { ...state, numQuestions: action.numQuestions };
    case "SET_CATEGORY":
      return { ...state, category: action.category };
    case "SET_DIFFICULTY":
      return { ...state, difficulty: action.difficulty };
    case "RESET_CONFIG":
      return QUIZ_CONFIG_DEFAULT;
    default:
      return state;
  }
};

export default QuizConfigReducer;
export { QUIZ_CONFIG_DEFAULT };
