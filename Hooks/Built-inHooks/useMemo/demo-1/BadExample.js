import { useState, useMemo } from 'react';

// this example is bad, because if we click the button the component will rerender, because state count changes
// but this will also recreate the data array which is dependency for the memo and memo will run on every render
const BadExample = () => {
  const [count, setCount] = useState(0);

  const data = [2, 7, 12, 10, 5];

  const biggestNumber = useMemo(() => {
    console.log('[BE] Memo running...');
    let biggest = 0;
    data.forEach((n) => (biggest = biggest > n ? biggest : n));
    return biggest;
  }, [data]);

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

export default BadExample;
