import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StartRating from "./StartRating";
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App/>*/}
    <StartRating maxRating={5} />
    <StartRating maxRating={10} />
    <StartRating />
  </React.StrictMode>,
);
