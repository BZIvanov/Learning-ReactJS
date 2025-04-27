import { useRef } from "react";

import ChildComponent from "./ChildComponent";

const App = () => {
  const myComponentRef = useRef<{ doSomething: () => void }>(null);

  const handleClick = () => {
    myComponentRef.current?.doSomething();
  };

  return (
    <div>
      <button onClick={handleClick}>Do something</button>
      <ChildComponent ref={myComponentRef}>Hello world!</ChildComponent>
    </div>
  );
};

export default App;
