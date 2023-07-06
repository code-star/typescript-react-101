import { useState, useEffect } from "react";

// Button.tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};
export const Button = (props: ButtonProps) => {
  return (
    <button style={{ backgroundColor: "hotpink" }} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

// import { Button } from './Button.tsx

export const Exercise8 = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startMoment, setStartMoment] = useState(0);
  const [timerRunning, setTimerRunning] = useState<boolean>();

  const [lastLapMoment, setLastLapMoment] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    if (typeof timerRunning === 'undefined') {
      return;
    }
    if (timerRunning) {
      setStartMoment(Date.now());
      setLastLapMoment(Date.now());
    } else {
      setElapsedTime(Date.now() - startMoment);
    }
  }, [timerRunning]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 1000 / 60);
    const seconds = Math.floor((time / 1000) % 60);

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <div style={{ fontWeight: "bold" }}>{formatTime(elapsedTime)}</div>
      <div>
        <Button
          onClick={() => setTimerRunning(!timerRunning)}
          label={timerRunning ? "Stop" : "Start"}
        />
      </div>
      <div>
        <Button
          onClick={() => setLaps([...laps, Date.now() - lastLapMoment])}
          label="New lap"
        />
      </div>
      <div>
        {laps.map((lap, index) => (
          <div key={`lap-${index}`}>{formatTime(lap)}</div>
        ))}
      </div>
    </div>
  );
};
