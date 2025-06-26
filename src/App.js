import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App </h1>
        <Weather />
        <footer>
          This project was coded by {""}
          <a href="https://github.com/25Mishka/Weather-react-app-upgraded">
            Mosa Mokebe
          </a>{" "}
          and is
          <a
            href="https://github.com/25Mishka/Weather-react-app-upgraded"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
