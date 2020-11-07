import React, { useState, useCallback } from 'react';
import Button from './Button';

const appStyles = {
  background: 'white',
  textAlign: 'center',
};

const App = () => {
  const [randomNumber, setRandomNumber] = useState(20);

  // with useCallback hook the function will be memoized and not recreated on each rerender of the component
  const btnCallback = useCallback(() => {
    console.log('click');
    setRandomNumber(Math.floor(Math.random() * 10));
  }, []);

  return (
    <div style={appStyles}>
      <div>The random number is: {randomNumber}</div>
      <Button callback={btnCallback} />
    </div>
  );
};

export default App;
