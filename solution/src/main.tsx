import React from "react";
import ReactDOM from "react-dom/client";
import { Stopwatch } from "./containers/Stopwatch";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Stopwatch />
  </React.StrictMode>
);
