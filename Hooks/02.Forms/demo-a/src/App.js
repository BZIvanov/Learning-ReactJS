import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [person, setPerson] = useState({ firstName: '', lastName: '' });
  const [people, setPeople] = useState('');

  const handleChange = ({ target }) => {
    setPerson({ ...person, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = person.firstName;
    const lastName = person.lastName;
    if (firstName.length > 0 && lastName.length > 0) {
      const person = ` ${firstName} ${lastName} `;
      setPeople([...people, person]);
      setPerson({ firstName: '', lastName: '' });
    }
  };

  return (
    <section>
      <article>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='firstName'
            value={person.firstName}
            onChange={handleChange}
          />
          <input
            type='text'
            name='lastName'
            value={person.lastName}
            onChange={handleChange}
          />
          <button type='submit'>submit</button>
        </form>
      </article>
      <article>
        <h1>people</h1>
        <div>{people}</div>
      </article>
    </section>
  );
};

export default App;
