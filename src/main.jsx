import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";

const root = createRoot(document.getElementById("root"));
const originalConsoleLog = console.log;

console.log = (...args) => {
  if (
    args.some(
      (arg) => typeof arg === "string" && arg.includes("rgba(255, 255, 255, 1)")
    )
  ) {
    return; // Ignore specific messages
  }
  originalConsoleLog.apply(console, args);
};

root.render(<App />);
