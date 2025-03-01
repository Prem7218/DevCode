import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const div = document.querySelector("#main");
const root= ReactDOM.createRoot(div);
root.render(<App />);