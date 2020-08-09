import React from 'react';

const UserInput = (props) => {
  const inputStyle = {
    border: '2px solid red',
    backgroundColor: 'lightgreen',
  };

  // for multiline return expression put everything in round brackets
  // with value set to be the same as state we achieve the two-way data binding
  return (
    <input
      type="text"
      style={inputStyle}
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default UserInput;
