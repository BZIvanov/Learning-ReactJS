import React from 'react';

// here on props we will have only inputLength so it is easier to destructure it
const Validation = ({ inputLength }) => {
  const validationMessage =
    inputLength > 5 ? 'Text long enough' : 'Text too short';

  return <p>{validationMessage}</p>;
};

export default Validation;
