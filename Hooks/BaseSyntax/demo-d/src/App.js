import { useState } from 'react';

// the second value setState is asynchronous function

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    console.log('---');
    console.log('called first: ', count);

    setCount((prevState) => {
      console.log('called second: ', count);
      return prevState + 1;
    });

    console.log('called third: ', count);
  };

  return (
    <div>
      <span>count: {count} </span>
      <button type='button' onClick={handleIncrease}>
        increase
      </button>
    </div>
  );
};

export default App;
