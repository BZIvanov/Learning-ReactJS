import type { ElementType, PropsWithChildren } from "react";

interface ContainerProps {
  Wrapper: ElementType;
}

const Container = ({
  children,
  Wrapper,
}: PropsWithChildren<ContainerProps>) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
