import { useState } from "react";

const App = () => {
  // The second returned value of useState is asynchronous function
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    // All of the below logs will show the same old value of count
    // because the state update is asynchronous and not yet reflected in the current render

    console.log("called first: ", count); // ❌ Not updated yet

    setCount((prevState) => {
      console.log("called second: ", count); // ❌ Not updated yet
      return prevState + 1;
    });

    console.log("called third: ", count); // ❌ Not updated yet
  };

  return (
    <div>
      <span>Count: {count} </span>
      <button type="button" onClick={handleIncrease}>
        Increase
      </button>
    </div>
  );
};

export default App;
