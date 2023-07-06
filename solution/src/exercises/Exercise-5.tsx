import { useState, useEffect } from "react";

export const Exercise5 = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startMoment, setStartMoment] = useState(0);
  const [timerRunning, setTimerRunning] = useState();

  useEffect(() => {
    if (typeof timerRunning === 'undefined') {
      return;
    }
    if (timerRunning) {
      setStartMoment(Date.now());
    } else {
      setElapsedTime(Date.now() - startMoment);
    }
  }, [timerRunning]);

  const minutes = Math.floor(elapsedTime / 1000 / 60);
  const seconds = Math.floor((elapsedTime / 1000) % 60);

  return (
    <div>
      <div style={{ fontWeight: "bold" }}>
        {minutes}:{seconds}
      </div>
      <div>
        <button
          style={{ backgroundColor: "hotpink" }}
          onClick={() => setTimerRunning(!timerRunning)}
        >
          {timerRunning ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};
