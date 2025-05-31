import type { PropsWithChildren } from "react";

const EmphasizedText = ({ children }: PropsWithChildren) => {
  return <em style={{ color: "green" }}>{children}</em>;
};

export default EmphasizedText;
