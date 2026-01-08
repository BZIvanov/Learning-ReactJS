import { useState, type PropsWithChildren } from "react";
import HeavyComponent from "./HeavyComponent";

function Counter({ children }: PropsWithChildren) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>

      {children}
    </div>
  );
}

function App() {
  return (
    <Counter>
      <HeavyComponent />
    </Counter>
  );
}

export default App;
