import { useState, useCallback } from "react";

import Button from "./Button";

const App = () => {
  const [randomNumber, setRandomNumber] = useState<number>(20);

  // with useCallback hook the function will be memoized and not recreated on each rerender of the component
  const handleButtonClick = useCallback(() => {
    console.log("click");
    setRandomNumber(Math.floor(Math.random() * 10));
  }, []);

  return (
    <div>
      <h1>The random number is: {randomNumber}</h1>
      <Button onClick={handleButtonClick} />
    </div>
  );
};

export default App;
