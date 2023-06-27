import { useState } from "react";

export const Exercise2 = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div>
      <div style={{ fontWeight: "bold" }}>00:00</div>
      <div>
        <button style={{ backgroundColor: "hotpink" }}>Start</button>
      </div>
    </div>
  );
};
