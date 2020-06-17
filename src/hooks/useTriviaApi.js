import { useState } from "react";
import triviaApiUtil from "../util/triviaApiUtil";
import useDidUpdateEffect from "./useDidUpdateEffect";

const useTriviaApi = (url) => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useDidUpdateEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          let questions = triviaApiUtil.parseQuestions(result);
          setQuestions(questions);
          setIsLoading(false);
        },
        (error) => {
          console.log("error" + error);
        }
      );
  }, [url]);
  return { questions, isLoading };
};

export default useTriviaApi;
