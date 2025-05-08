import { useRef } from "react";

const App = () => {
  const inputEl = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const inputValue = inputEl.current?.value;
    console.log(inputValue);
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default App;
