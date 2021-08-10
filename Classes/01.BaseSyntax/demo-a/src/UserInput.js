import React from 'react';

const inputStyles = {
  border: '2px solid red',
  backgroundColor: 'lightgreen',
};

const UserInput = (props) => {
  // for multiline return expression put everything in round brackets
  // with value set to be the same as state we achieve the two-way data binding
  return (
    <input
      type='text'
      style={inputStyles}
      onChange={props.valueChange}
      value={props.currentName}
    />
  );
};

export default UserInput;
