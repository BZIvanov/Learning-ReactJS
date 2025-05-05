import { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // if same value is returned as the previous time, it will not trigger the next memo, where the step is dependency
  const isHighFive = useMemo(() => count % 5 === 0, [count]);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>

      <h2>{isHighFive ? "High Five" : "Keep Clicking"}</h2>
    </div>
  );
};

export default App;
