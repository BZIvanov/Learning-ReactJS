import type { PropsWithChildren } from "react";

const CustomWrapper = ({ children }: PropsWithChildren) => {
  return <span>{children}</span>;
};

export default CustomWrapper;
