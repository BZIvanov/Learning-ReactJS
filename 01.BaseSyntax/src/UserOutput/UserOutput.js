import React from 'react';
// css extension has to be also specified for files different than js
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Username: {props.userName}</p>
      <p>I hope I'll be overwritten!</p>

      {/* In curly brackets we can use the props and run some JS code */}
      <p>{Math.floor(2 * Math.random())}</p>

      {/* children is reserved word in react and it gets the content between
            the component tags  */}
      <p>{props.children}</p>
    </div>
  );
};

export default UserOutput;
