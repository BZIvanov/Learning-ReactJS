import React, { useRef, useImperativeHandle, forwardRef } from 'react';

/*
This is example of how to pass one ore more refs as prop and merge them all with local ref on the same component
*/

const MyInput = forwardRef(({ propRefs }, forwardedRef) => {
  const inputRef = useRef(null);

  useImperativeHandle(forwardedRef, () => ({
    focusMe: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <input
      ref={(el) => {
        inputRef.current = el;

        propRefs.forEach((r) => {
          if (r && typeof r === 'object') {
            r.current = el;
          }
        });
      }}
    />
  );
});

const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          ref1.current && ref1.current.focus();
        }}
      >
        Focus Ref Prop 1
      </button>

      <button
        onClick={() => {
          ref2.current && ref2.current.focus();
        }}
      >
        Focus Ref Prop 2
      </button>

      <button
        onClick={() => {
          ref3.current && ref3.current.focusMe();
        }}
      >
        Focus Ref 3
      </button>

      <MyInput propRefs={[ref1, ref2]} ref={ref3} />
    </div>
  );
};

export default App;
