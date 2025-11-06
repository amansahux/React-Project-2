import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReviewContext from "./Components/ReviewCOntext.jsx";
import CardContext from "./Components/CardContext.jsx";

createRoot(document.getElementById("root")).render(
  <CardContext>
    <ReviewContext>
      <App />
    </ReviewContext>
  </CardContext>
);
