import React, { useState } from 'react';

const People = () => {
  /* useState method returns 2 elements which we will store as variables
    The first element is the state and the second is function with which we can update state */
  const [myGroupState, setMyGroupState] = useState({
    peeps: [
      { name: 'Tina', score: 12 },
      { name: 'Irina', score: 11 },
    ],
  });

  /* the state is not merged meaning that if we had more state than just peeps it would be lost
    So for each state you need keep it in separate useState method*/
  setMyGroupState({
    peeps: [
      { name: 'Tina', score: 5 },
      { name: 'Irina', score: 11 },
    ],
  });

  return <h1>{myGroupState.peeps[0].name} is awesome!</h1>;
};

export default People;
