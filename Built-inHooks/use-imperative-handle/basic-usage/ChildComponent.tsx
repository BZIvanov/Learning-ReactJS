import { useImperativeHandle, type PropsWithChildren, type Ref } from "react";

interface ChildComponentProps {
  ref: Ref<{ doSomething: () => void }>;
}

const ChildComponent = ({
  children,
  ref,
}: PropsWithChildren<ChildComponentProps>) => {
  useImperativeHandle(ref, () => ({
    doSomething: () => {
      console.log("Did something");
    },
  }));

  return <div>{children}</div>;
};

export default ChildComponent;
