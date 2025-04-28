import { useRef } from "react";

import EnhancedInput from "./EnhancedInput";

const App = () => {
  const textFieldRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const textFieldElement = textFieldRef.current;

    if (!textFieldElement) return;

    if (textFieldElement.value) {
      console.log(textFieldElement.value);
    } else {
      textFieldElement.focus();
    }
  };

  return (
    <div>
      <EnhancedInput type="text" ref={textFieldRef} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
