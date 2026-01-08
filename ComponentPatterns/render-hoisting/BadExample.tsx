import { useState } from "react";
import HeavyComponent from "./HeavyComponent";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>

      <HeavyComponent />
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;
