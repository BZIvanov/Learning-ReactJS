import React, { useState } from 'react';
import './App.css';

// the second value setState is asynchronous function

const App = () => {
  const [count, setCount] = useState(0);

  const hanleIncrease = () => {
    console.log('called first: ', count);

    setCount((prevState) => {
      console.log('called second: ', count);
      return prevState + 1;
    });

    console.log('called third: ', count);
  };

  return (
    <div>
      <span>count: {count}</span>
      <button type="button" onClick={hanleIncrease}>
        increase
      </button>
    </div>
  );
};

export default App;
