import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./StarRating";

// import App from './App';

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color={"blue"} maxRating={20} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App/>*/}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={10}
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>,
);
