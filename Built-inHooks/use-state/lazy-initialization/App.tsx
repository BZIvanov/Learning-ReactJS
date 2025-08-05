import { useState } from "react";

function computeInitialValue() {
  console.log("Computing initial value...");
  // Imagine this is an expensive computation
  return Math.floor(Math.random() * 1000);
}

function ExampleComponent() {
  // When initializing state with a function, React will only call that function once — during the initial render
  const [value, setValue] = useState(() => computeInitialValue());

  return (
    <div>
      <h2>Initial value: {value}</h2>
      <button onClick={() => setValue((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
