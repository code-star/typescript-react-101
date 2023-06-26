type Props = {
  children?: React.ReactNode;
};

export const Actions = ({ children }: Props) => (
  <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
);
