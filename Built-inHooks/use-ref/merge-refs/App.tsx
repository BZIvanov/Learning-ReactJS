import { useRef } from "react";

import EnhancedInput from "./EnhancedInput";

const App = () => {
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  const handleFocusRef1 = () => {
    ref1.current?.focus();
  };

  const handleFocusRef2 = () => {
    ref2.current?.focus();
  };

  return (
    <div>
      <button onClick={handleFocusRef1}>Focus Ref Prop 1</button>
      <button onClick={handleFocusRef2}>Focus Ref Prop 2</button>

      <EnhancedInput propRefs={[ref1, ref2]} />
    </div>
  );
};

export default App;
