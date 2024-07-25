import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating
      maxRating={10}
      message={[
        "terrible",
        "very bad",
        "bad",
        "average",
        "above avg",
        "good",
        "very good",
        "excellent",
        "amazing",
        "mind blowing",
      ]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} /> */}
  </React.StrictMode>
);
