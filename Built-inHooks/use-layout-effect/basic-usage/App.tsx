import { useState, useRef, useLayoutEffect } from "react";

type ColorType = "green" | "yellow" | "red";

const App = () => {
  const [text, setText] = useState<string>("");
  const [color, setColor] = useState<ColorType>("green");

  const spanRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const span = spanRef.current?.getBoundingClientRect();

    if (span) {
      const { width } = span;
      if (width < 50) {
        setColor("green");
      } else if (width < 100) {
        setColor("yellow");
      } else {
        setColor("red");
      }
    }
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div style={{ backgroundColor: color }}>
        <span ref={spanRef}>{text}</span>
      </div>
    </div>
  );
};

export default App;
