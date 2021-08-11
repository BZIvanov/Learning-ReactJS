import { useState } from 'react';

const App = () => {
  const [person, setPerson] = useState({ firstName: '', lastName: '' });
  const [people, setPeople] = useState([]);

  const handleChange = ({ target }) => {
    setPerson({ ...person, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = person.firstName;
    const lastName = person.lastName;
    if (firstName.length > 0 && lastName.length > 0) {
      const fullName = `${firstName} ${lastName}`;
      setPeople([...people, fullName]);
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
        <h1>People List</h1>
        <div>
          {people.map((fullName, idx) => (
            <h5 key={idx}>{fullName}</h5>
          ))}
        </div>
      </article>
    </section>
  );
};

export default App;
