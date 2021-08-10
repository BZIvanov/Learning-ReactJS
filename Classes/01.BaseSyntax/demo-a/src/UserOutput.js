import React from 'react';
// css extension has to be also specified for files different than js
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className='user-output'>
      <p>Username: {props.userName}</p>

      {/* In curly brackets we can use the props and run some JS code */}
      <p>Random number (0 or 1): {Math.floor(2 * Math.random())}</p>

      {/* children is reserved word in react and it gets the content between the component tags  */}
      {props.children}
    </div>
  );
};

export default UserOutput;
