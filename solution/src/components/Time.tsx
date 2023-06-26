type TimeProps = {
  seconds: number;
  size: "small" | "large";
};

export const Time = ({ seconds, size }: TimeProps) => {
  const minutesToDisplay = Math.floor(seconds / 60);
  const minutesDisplay =
    minutesToDisplay < 10 ? `0${minutesToDisplay}` : minutesToDisplay;
  const secondsToDisplay = seconds % 60;
  const secondsDisplay =
    seconds < 10 ? `0${secondsToDisplay}` : secondsToDisplay;

  return (
    <div style={{ fontSize: size === "small" ? "14px" : "80px" }}>
      {minutesDisplay}:{secondsDisplay}
    </div>
  );
};
