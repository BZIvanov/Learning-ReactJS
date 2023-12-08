import { useState, useMemo } from 'react';
import Step from './Step';

const App = () => {
  const [count, setCount] = useState(0);

  // if same value is returned as the previous time, it will not trigger the next memo, where the step is dependency
  const highFive = useMemo(() => count % 5 === 0, [count]);

  const isDivisibleByFive = useMemo(() => {
    console.log('Step change');
    return <Step change={highFive} />;
  }, [highFive]);

  return (
    <div>
      <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>{isDivisibleByFive}</div>
    </div>
  );
};

export default App;
