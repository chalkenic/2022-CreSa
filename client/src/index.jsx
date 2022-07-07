import React from "react";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";

import store from "./store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

reportWebVitals();
