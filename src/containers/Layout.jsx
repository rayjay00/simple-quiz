import React from "react";

export default function Layout({ children }) {
  return (
    <section
      style={{
        width: "500px",
        margin: "0 auto",
        fontFamily: "Helvetica"
      }}
    >
      {children}
    </section>
  );
}
