import { useState, useMemo } from 'react';

const data = [2, 7, 12, 10, 5];

const GoodExampleA = () => {
  const [count, setCount] = useState(0);

  const biggestNumber = useMemo(() => {
    console.log('[GEA] Memo running...');
    let biggest = 0;
    data.forEach((n) => (biggest = biggest > n ? biggest : n));
    return biggest;
  }, []);

  return (
    <div>
      <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>{biggestNumber}</div>
    </div>
  );
};

export default GoodExampleA;
