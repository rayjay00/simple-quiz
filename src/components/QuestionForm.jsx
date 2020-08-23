import React, { useEffect, useState } from "react";

import FormControl from "./FormControl";
import Button from "./Button";
import Layout from "../containers/Layout";

export default function QuestionForm({
  question: { correct_answer, incorrect_answers = [], question, type },
  setState
}) {
  const [currentAnswer, setCurrentAnswer] = useState("");

  useEffect(() => {
    return () => {
      setCurrentAnswer("");
    };
  }, [question]);

  const handleAnswer = (e) => {
    e.preventDefault();

    if (currentAnswer.toLowerCase() === correct_answer.toLowerCase()) {
      setState((prevState) => ({
        ...prevState,
        score: prevState.score + 1,
        currentStep: prevState.currentStep + 1
      }));
      return;
    }

    setState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep + 1
    }));
  };

  const onChange = (e) => {
    setCurrentAnswer(e.target.value);
  };

  const options = [correct_answer, ...incorrect_answers];

  return (
    <Layout>
      <form
        onSubmit={handleAnswer}
        style={{
          padding: "3rem 0",
          margin: "0 auto"
        }}
      >
        <h2
          // Using dangerouslySetInnerHTML means I can avoid formatting all the strings with special characters.
          style={{ fontWeight: "normal", margin: "0", fontSize: "1.25rem" }}
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <fieldset
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 0",
            border: 0
          }}
        >
          <FormControl
            options={options}
            type={type}
            currentAnswer={currentAnswer}
            handleChange={onChange}
          />
        </fieldset>
        <Button type="submit" text="Next" />
      </form>
    </Layout>
  );
}
