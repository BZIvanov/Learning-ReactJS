import { useState, useMemo } from 'react';

// this is good example, because for biggestNumber we have dependency data which also uses memo which never change
const GoodExample = () => {
  const [count, setCount] = useState(0);

  const data = useMemo(() => [2, 7, 12, 10, 5], []);

  // the above data array will not be recreated on next rerenders respectively below result will not be recalculated
  const biggestNumber = useMemo(() => {
    console.log('[GE] Memo running...');
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

export default GoodExample;
