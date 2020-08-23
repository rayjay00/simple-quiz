import React, { useCallback, useEffect, useState } from "react";

import QuestionForm from "./components/QuestionForm";
import Summary from "./components/Summary";
import Layout from "./containers/Layout";

const initialState = {
  loaded: false,
  currentQuestionSet: [],
  error: null,
  currentStep: 0,
  score: 0
};

const App = () => {
  const [state, setState] = useState(initialState);
  const { loaded, score, error, currentStep, currentQuestionSet } = state;

  const currentQuestion = currentQuestionSet[currentStep];
  const quizComplete = currentQuestionSet.length === currentStep + 1;

  const fetchQuestions = useCallback(async () => {
    try {
      const questionRes = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
      );
      const questionsData = await questionRes.json();
      setState((prevState) => ({
        ...prevState,
        currentQuestionSet: questionsData.results,
        loaded: true
      }));
    } catch (e) {
      setState((prevState) => ({
        ...prevState,
        error: e.message,
        loaded: true
      }));
    }
  }, []);

  useEffect(() => {
    if (!loaded) {
      fetchQuestions();
    }
  }, [loaded, fetchQuestions]);

  const resetQuestions = () => {
    setState(initialState);
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!loaded) {
    return (
      <Layout>
        <p
          style={{
            textAlign: "center"
          }}
        >
          Loading...
        </p>
      </Layout>
    );
  }

  if (quizComplete) {
    return <Summary score={score} onReset={resetQuestions} />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <QuestionForm question={currentQuestion} setState={setState} />
    </div>
  );
};
export default App;
