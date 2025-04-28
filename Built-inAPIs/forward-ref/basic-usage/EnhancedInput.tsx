import { forwardRef, type InputHTMLAttributes } from "react";

type EnhancedInputProps = InputHTMLAttributes<HTMLInputElement>;

const EnhancedInput = forwardRef<HTMLInputElement, EnhancedInputProps>(
  (props, ref) => {
    return <input ref={ref} {...props} />;
  }
);

EnhancedInput.displayName = "EnhancedInput";

export default EnhancedInput;
