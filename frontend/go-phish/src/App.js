import title_logo from './title_logo.svg';
import React, { useState } from "react";
import './App.css';

function App() {

  const [state, setState] = useState(1);

  const [hintstate, setHintState] = useState(1);

  const states = () => {
    /* Home Page */
    if (state === 1)
    {
      return (
      <header className="App-header">
        <title>
          Go Phish
        </title>
        <img src={title_logo} />
        <div className="padding"></div>
        <div className="button">
          Play
        </div>
        <div className="padding"></div>
          <div className="button" onClick={() => setState(2)}>
          Instructions
        </div>
        <div className="padding"></div>
        <div className="button" onClick={() => setState(3)}>
          Options
        </div>
      </header>
      );
    }
    /* Instructions Page */
    if (state === 2) {
      return (
      <div>
        <header class="App-header">
          <img src={title_logo} alt="title" class="responsive" />
          <h1>Instructions</h1>
          <p>
            Welcome to Go Phish, a point-and-click game
            where you identify phishing attempts within the time limit!
            Drag and drop images one by one into two buckets: Phishing and Not,
            but try not to get baited in this quick, addictive game!
        </p>
          <div className="button" onClick={() => setState(1)}>
            Go back
        </div>
        </header>
      </div>
      );
    }
    /* Options */
    if (state === 3) {
      return (
        <div>
          <header class="App-header">
            <h1>Options</h1>
            <div className="button" onClick={() => setState(1)}>
              Go back
            </div>

          </header>
        </div>
      );
    }
    /* Game State */
    if (state === 4) {

    }
  }
  return (states());
}

export default App;
