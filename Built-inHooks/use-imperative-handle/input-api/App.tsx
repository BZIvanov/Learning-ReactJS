import { useRef } from "react";

import EnhancedInput, { EnhancedInputHandle } from "./EnhancedInput";

const App = () => {
  const inputRef = useRef<EnhancedInputHandle>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleSetValue = () => {
    inputRef.current?.setValue("Hello!");
  };

  return (
    <div>
      <EnhancedInput ref={inputRef} />

      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleSetValue}>Set value</button>
    </div>
  );
};

export default App;
