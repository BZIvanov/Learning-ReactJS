import { useRef } from "react";

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input
        ref={(el) => {
          inputRef.current = el;
        }}
      />
      <button onClick={() => console.log(inputRef.current?.value)}>
        Click me
      </button>
    </div>
  );
};

export default App;
