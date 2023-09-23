import "./App.css";
import React, { useEffect, useState } from "react";

import Title from './title';

function App() {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const seconds = () => {
    if (second < 59) setSecond(second + 1);
    else {
      setSecond(0);
      setMinute(minute + 1);
    }
  };
  let interval;
  useEffect(() => {
    interval = setInterval(seconds, 1000);

    return () => clearInterval(interval);
  });

  const handleRestart = () => {
    setMinute(0);
    setSecond(0);
  };

  const handleStop = () => {
    clearInterval(interval);
  };

  return (
    <>
    <Title />
      <div className="container">
        <div className="timer">
          {minute < 10 ? "0" + minute : minute}:
          {second < 10 ? "0" + second : second}
        </div>
        <button className="btn" onClick={handleRestart}>
          RESTART
        </button>
        <button className="btn" onClick={handleStop}>
          STOP
        </button>
      </div>
    </>
  );
}

export default App;
