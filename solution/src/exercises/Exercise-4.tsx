import { useState, useEffect } from "react";

export const Exercise4 = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startMoment, setStartMoment] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (timerRunning) {
      setStartMoment(Date.now());
    } else {
      setElapsedTime(Date.now() - startMoment);
    }
  }, [timerRunning]);

  return (
    <div>
      <div style={{ fontWeight: "bold" }}>00:00</div>
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
