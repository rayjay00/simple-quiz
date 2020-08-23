import React from "react";

import Layout from "../containers/Layout";
import Button from "./Button";

const QUESTION_AMOUNT = 10;

export default function Summary({ score, onReset }) {
  const renderDescriptionItem = (title, text) => (
    <div
      style={{
        display: "flex",
        maxWidth: "50%",
        margin: "0.25rem 0"
      }}
    >
      <dt>{title}:</dt>
      <dd
        style={{
          marginLeft: "0.5rem",
          fontWeight: "bold"
        }}
      >
        {text}
      </dd>
    </div>
  );

  const scorePercentage = `${(score / QUESTION_AMOUNT) * 100}%`;
  return (
    <Layout>
      <h1
        style={{
          fontFamily: "Helvetica"
        }}
      >
        SUMMARY
      </h1>
      <dl>
        {renderDescriptionItem("Correct", score)}
        {renderDescriptionItem("Wrong", QUESTION_AMOUNT - score)}
        {renderDescriptionItem("Questions answered", QUESTION_AMOUNT)}
        {renderDescriptionItem("Final Score", scorePercentage)}
      </dl>
      <Button type="button" onClick={onReset} text="Restart Quiz" />
    </Layout>
  );
}
