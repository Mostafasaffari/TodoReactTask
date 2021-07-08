import React from "react";
import ReactDOM from "react-dom";

import "./theme/App.scss";

import App from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
