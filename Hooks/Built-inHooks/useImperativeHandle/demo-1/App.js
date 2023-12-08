import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const doSomething = () => {
    console.log('Did something');
  };

  useImperativeHandle(ref, () => ({
    doSomething,
  }));

  return <div>{props.children}</div>;
});

const App = () => {
  const myComponentRef = useRef();

  const handleClick = () => {
    myComponentRef.current.doSomething();
  };

  return (
    <div>
      <button onClick={handleClick}>Do something</button>
      <ChildComponent ref={myComponentRef}>Hello world!</ChildComponent>
    </div>
  );
};

export default App;
