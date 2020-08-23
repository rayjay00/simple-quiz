import React, { Fragment } from "react";

export default function FormControl({
  type,
  options,
  handleChange,
  currentAnswer
}) {
  const renderRadioField = (label, value = label) => (
    <div
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <input
        required
        checked={currentAnswer === value}
        type="radio"
        id={value}
        name="questionGroup"
        value={value}
        onChange={handleChange}
        style={{ marginRight: "0.5rem" }}
      />
      <label
        htmlFor={value}
        style={{ margin: "0.5rem 0" }}
        // Like in QuestionForm, using dangerouslySetInnerHTML here
        // means I can avoid formatting all the strings with special characters
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );

  const renderMultipleOptions = () =>
    options.map((option) => (
      <Fragment key={option}>{renderRadioField(option)}</Fragment>
    ));

  if (type === "boolean") {
    return (
      <>
        {renderRadioField("True")}
        {renderRadioField("False")}
      </>
    );
  }

  if (type === "multiple") {
    return renderMultipleOptions();
  }

  return (
    <>
      <label htmlFor="answer">
        <input
          type="text"
          id="answer"
          name="answer"
          style={{
            borderRadius: 0,
            fontSize: "1rem",
            border: "1px solid grey",
            padding: "0.5rem 0",
            margin: "1rem 0"
          }}
          required
          onChange={handleChange}
          value={currentAnswer}
        />
      </label>
    </>
  );
}
