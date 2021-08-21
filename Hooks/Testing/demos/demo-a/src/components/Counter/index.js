import { useState } from 'react';
import './styles.css';

const Counter = () => {
  const [result, setResult] = useState(0);
  const [counter, setCounter] = useState(1);

  const color = result > 100 ? 'green' : result < -100 ? 'red' : 'gray';

  return (
    <div>
      <h2 data-testid='header'>My Awesome App</h2>
      <h3 className={color} data-testid='result'>
        {result}
      </h3>
      <input
        type='number'
        value={counter}
        onChange={({ target }) => setCounter(+target.value)}
        data-testid='counter'
      />
      <button onClick={() => setResult(result + +counter)}>increase</button>
      <button onClick={() => setResult(result - +counter)}>decrease</button>
    </div>
  );
};

export default Counter;
