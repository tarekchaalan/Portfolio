import React from "react";
import { Link } from "react-router-dom";
import "../colors.css";
import "../style.css";

const NotFound = () => (
  <div
    style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <h1 style={{ fontSize: "4rem", color: "var(--color-primary)", margin: 0 }}>
      404
    </h1>
    <p
      style={{
        fontSize: "1.3rem",
        color: "var(--color-text-secondary)",
        margin: "1rem 0",
      }}
    >
      Oops! The page you're looking for doesn't exist.
      <br />
      You may have mistyped the address or the page may have moved.
    </p>
    <Link
      to="/"
      style={{
        display: "inline-block",
        padding: "0.8rem 1.5rem",
        backgroundColor: "var(--color-primary)",
        color: "var(--color-bg-primary)",
        textDecoration: "none",
        borderRadius: "5px",
        margin: "1rem 0",
        fontWeight: 600,
        transition: "background-color 0.3s ease",
      }}
    >
      Return Home
    </Link>
  </div>
);

export default NotFound;
