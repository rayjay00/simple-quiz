import React from "react";

export default function Button({ onClick, text, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        color: "white",
        backgroundColor: "#1E6FDD",
        border: 0,
        padding: "0.75rem 1.25rem",
        fontSize: "0.8rem",
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  );
}
