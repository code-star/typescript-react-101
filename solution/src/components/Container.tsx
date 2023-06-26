type Props = {
  children?: React.ReactNode;
};

export const Container = ({ children }: Props) => (
  <div style={{ textAlign: "center", fontFamily: "Avenir, Helvetica, Arial" }}>
    {children}
  </div>
);
