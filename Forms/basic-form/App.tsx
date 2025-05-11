import { useState, type ChangeEvent, type FormEvent } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

const App = () => {
  const [person, setPerson] = useState<Person>({ firstName: "", lastName: "" });
  const [people, setPeople] = useState<Person[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPerson((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstName, lastName } = person;
    if (firstName.trim() && lastName.trim()) {
      setPeople((prev) => [...prev, { ...person }]);
      setPerson({ firstName: "", lastName: "" });
    }
  };

  return (
    <section>
      <article>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
            required={true}
          />
          <input
            type="text"
            name="lastName"
            value={person.lastName}
            onChange={handleChange}
            required={true}
          />
          <button type="submit">submit</button>
        </form>
      </article>

      <article>
        <h2>People List</h2>
        {people.length === 0 ? (
          <p>No people yet</p>
        ) : (
          <ul>
            {people.map((p, index) => (
              <li key={`${p.firstName}-${p.lastName}-${index}`}>
                {p.firstName} {p.lastName}
              </li>
            ))}
          </ul>
        )}
      </article>
    </section>
  );
};

export default App;
