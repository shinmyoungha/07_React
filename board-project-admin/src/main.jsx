import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // 중요함 시험에 나올 느낌... 쌤이 별표 했음
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
