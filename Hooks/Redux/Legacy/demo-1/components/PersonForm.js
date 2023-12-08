import { useState } from 'react';

const PersonForm = (props) => {
  // in this component we will combine usage of local state and redux state, because we dont want to use redux for each letter input
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangedHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <input type='text' onChange={nameChangedHandler} value={name} />
      <input type='number' onChange={ageChangedHandler} value={age} />
      <button onClick={() => props.onPersonAdd(name, age)}>Add Person</button>
    </div>
  );
};

export default PersonForm;
