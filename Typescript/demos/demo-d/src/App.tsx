import { useState } from 'react';

function App() {
  const [person, setPerson] = useState({
    name: 'Iva',
    city: 'Sofia',
    hobbies: 'ski, cycling',
  });

  // to easier find out how to get the below event type you can hover the event on the second input or the textarea, where typescript already knows what it is
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        name='name'
        type='text'
        value={person.name}
        onChange={handleChange}
      />
      <input
        name='city'
        type='text'
        value={person.city}
        // hover the event to see it's type, here ts already knows what to expect
        onChange={(e) => handleChange(e)}
      />
      <textarea
        name='hobbies'
        value={person.hobbies}
        onChange={(e) => handleChange(e)}
      />
      <p>
        {person.name} is from {person.city} and likes {person.hobbies}
      </p>
    </div>
  );
}

export default App;
