import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "../src/Assets/Fonts/Bouncy/Bouncy.otf";
import "../src/Assets/Fonts/Iceland/Iceland.ttf";
import "../src/Assets/Fonts/komika_axis/KOMIKAX_.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
