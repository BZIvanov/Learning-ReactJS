import { useRef, useImperativeHandle, type Ref } from "react";

export type EnhancedInputHandle = {
  focus: () => void;
  blur: () => void;
  getValue: () => string;
  setValue: (value: string) => void;
};

type EnhancedInputProps = {
  ref: Ref<EnhancedInputHandle>;
};

/*
  useImperativeHandle allows a child component to expose certain functions or properties to its parent component.
  With the combination of forwardRef we can create reusable components with a well defined external API
*/
const EnhancedInput = ({ ref }: EnhancedInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur: () => {
      inputRef.current?.blur();
    },
    getValue: () => inputRef.current?.value || "",
    setValue: (value: string) => {
      if (inputRef.current) {
        inputRef.current.value = value;
      }
    },
  }));

  return <input ref={inputRef} />;
};

export default EnhancedInput;
