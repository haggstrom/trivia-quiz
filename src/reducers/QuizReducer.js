const QuizReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return {
        userAnswers: [],
        questions: action.questions,
        question: action.questions[0],
        questionNumber: 1,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        question: state.questions[state.questionNumber],
        questionNumber: state.questionNumber + 1,
      };
    case "SET_CURRENT_ANSWER":
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.currentAnswer],
      };
    default:
      return state;
  }
};

export default QuizReducer;
