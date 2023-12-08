import React, { useRef, useImperativeHandle, forwardRef } from 'react';

/*
useImperativeHandle allows a child component to expose certain functions or properties to its parent component.

With the combination of forwardRef we can create reusable components with a well defined external API
*/

const MyInput = forwardRef((props, forwardedRef) => {
  const inputRef = useRef(null);

  useImperativeHandle(forwardedRef, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
    getValue: () => {
      return inputRef.current.value;
    },
    setValue: (incomingValue) => {
      inputRef.current.value = incomingValue;
    },
  }));

  return <input ref={inputRef} />;
});

const App = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleSetValue = () => {
    inputRef.current.setValue('Hello!');
  };

  return (
    <div>
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleSetValue}>Set value</button>

      <MyInput ref={inputRef} />
    </div>
  );
};

export default App;
