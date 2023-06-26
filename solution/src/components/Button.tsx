type ButtonProps = {
  backgroundColor: string;
  color: string;
  text: string;
  onClick: () => void;
};

export const Button = ({
  backgroundColor,
  color,
  text,
  onClick,
}: ButtonProps) => (
  <button
    style={{
      backgroundColor,
      color,
      display: "inline-block",
      border: 0,
      padding: "10px",
      marginRight: "10px",
      fontWeight: "bold",
      outline: "none",
      borderRadius: "3px",
    }}
    onClick={onClick}
  >
    {text}
  </button>
);
