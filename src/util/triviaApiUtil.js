import ReactHtmlParser from "react-html-parser";

const triviaApiUtil = {
  buildUrl: (quizConfig) => {
    const categoryParameter =
      quizConfig.category === "any" ? "" : "&category=" + quizConfig.category;

    const difficultyParameter =
      quizConfig.difficulty === "any"
        ? ""
        : "&difficulty=" + quizConfig.difficulty;

    return (
      `https://opentdb.com/api.php?amount=${quizConfig.numQuestions}&type=multiple` +
      categoryParameter +
      difficultyParameter
    );
  },

  parseQuestions: (questions) => {
    const rawQuestions = questions["results"];

    const shuffle = (o) => {
      for (
        var j, x, i = o.length;
        i;
        j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
      );
      return o;
    };

    const questionList = rawQuestions.map((rawQuestion) => {
      let question = ReactHtmlParser(rawQuestion.question)[0];
      let category = ReactHtmlParser(rawQuestion.category)[0];
      let difficulty = ReactHtmlParser(rawQuestion.difficulty)[0];
      let correct_answer = ReactHtmlParser(rawQuestion.correct_answer)[0];
      let incorrect_answers = rawQuestion.incorrect_answers.map((ic_answer) => {
        return ReactHtmlParser(ic_answer)[0];
      });
      let randomAnswers = shuffle([...incorrect_answers, correct_answer]);
      return {
        question: question,
        category: category,
        difficulty: difficulty,
        correct_answer: correct_answer,
        randomAnswers: randomAnswers,
      };
    });
    return questionList;
  },
};

export default triviaApiUtil;
