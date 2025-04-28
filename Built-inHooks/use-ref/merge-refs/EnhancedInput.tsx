import { type RefObject } from "react";

type EnhancedInputProps = {
  propRefs?: RefObject<HTMLInputElement | null>[];
};

/*
  This is an example of how to pass one or more refs as props to a component.
*/
const EnhancedInput = ({ propRefs = [] }: EnhancedInputProps) => {
  const handleSetRefs = (element: HTMLInputElement | null) => {
    propRefs.forEach((externalRef) => {
      if (externalRef) {
        externalRef.current = element;
      }
    });
  };

  return <input ref={handleSetRefs} />;
};

export default EnhancedInput;
