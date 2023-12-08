import React, { memo } from 'react';

const buttonStyle = {
  width: '200px',
  background: 'green',
  color: 'white',
};

// memo will rerender this component only if the props are changed,
// and they will not change because we have the callback function in useCallback hook in the parent component
const Button = memo(({ callback }) => (
  <button style={buttonStyle} onClick={callback}>
    {console.log('button re-rerender')}
    Press Me!
  </button>
));

export default Button;
