import React from 'react';

// here on props we will have only inputLength so it is easier to destructure it
const Validation = ({ inputLength }) => {
  let validationMessage = 'Text long enough';

  if (inputLength <= 5) {
    validationMessage = 'Text too short';
  }

  return <p>{validationMessage}</p>;
};

export default Validation;
