import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import QuizConfigContext from "../../contexts/QuizConfigContext";
import FormSelect from "./FormSelect";

const QuizConfigForm = () => {
  const { quizConfig, dispatch } = useContext(QuizConfigContext);

  const difficulties = [
    { value: "any", text: "Any Difficulty" },
    { value: "easy", text: "Easy" },
    { value: "medium", text: "Medium" },
    { value: "hard", text: "Hard" },
  ];

  const numQuestions = [
    { value: "1", text: "1" },
    { value: "2", text: "2" },
    { value: "3", text: "3" },
    { value: "4", text: "4" },
    { value: "5", text: "5" },
    { value: "6", text: "6" },
    { value: "7", text: "7" },
    { value: "8", text: "8" },
    { value: "9", text: "9" },
    { value: "10", text: "10" },
  ];
  const categories = [
    { value: "any", text: "Any Category" },
    { value: "9", text: "General Knowledge" },
    { value: "10", text: "Entertainment: Books" },
    { value: "11", text: "Entertainment: Film" },
    { value: "12", text: "Entertainment: Music" },
    { value: "13", text: "Entertainment: Musicals & Theatres" },
    { value: "14", text: "Entertainment: Television" },
    { value: "15", text: "Entertainment: Video Games" },
    { value: "16", text: "Entertainment: Board Games" },
    { value: "17", text: "Science & Nature" },
    { value: "18", text: "Science: Computers" },
    { value: "19", text: "Science: Mathematics" },
    { value: "20", text: "Mythology" },
    { value: "21", text: "Sports" },
    { value: "22", text: "Geography" },
    { value: "23", text: "History" },
    { value: "24", text: "Politics" },
    { value: "25", text: "Art" },
    { value: "26", text: "Celebrities" },
    { value: "27", text: "Animals" },
    { value: "28", text: "Vehicles" },
    { value: "29", text: "Entertainment: Comics" },
    { value: "30", text: "Science: Gadgets" },
    { value: "31", text: "Entertainment: Japanese Anime & Manga" },
    { value: "32", text: "Entertainment: Cartoon & Animations" },
  ];

  const onNumQuestionsChanged = (e) => {
    dispatch({ type: "SET_NUMBER_OF_QUESTIONS", numQuestions: e.target.value });
  };

  const onCategoryChange = (e) => {
    dispatch({ type: "SET_CATEGORY", category: e.target.value });
  };

  const onDifficultyChange = (e) => {
    dispatch({ type: "SET_DIFFICULTY", difficulty: e.target.value });
  };

  return (
    <Form>
      <FormSelect
        id="from.NumQuestions"
        label="Antal Frågor"
        onChange={onNumQuestionsChanged}
        defaultValue={quizConfig.numQuestions}
        options={numQuestions}
      />
      <FormSelect
        id="form.Category"
        label="Välj kategori"
        onChange={onCategoryChange}
        defaultValue={quizConfig.category}
        options={categories}
      />
      <FormSelect
        id="form.difficulty"
        label="Välj svårighetsgrad"
        onChange={onDifficultyChange}
        defaultValue={quizConfig.difficulty}
        options={difficulties}
      />
    </Form>
  );
};

export default QuizConfigForm;
