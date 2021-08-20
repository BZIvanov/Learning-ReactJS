import { useState, useRef, useLayoutEffect } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('green');

  const paraRef = useRef();

  useLayoutEffect(() => {
    const p = paraRef.current.getBoundingClientRect();
    if (p.width < 50) {
      setColor('green');
    } else if (p.width < 100) {
      setColor('yellow');
    } else {
      setColor('red');
    }
  }, [text]);

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div style={{ backgroundColor: color }}>
        <span ref={paraRef}>{text}</span>
      </div>
    </div>
  );
};

export default App;
