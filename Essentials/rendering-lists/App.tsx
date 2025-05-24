import Person from "./Person";

const persons = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 40 },
];

const App = () => {
  return (
    <div>
      <div>
        <p>
          This section demonstrates how to dynamically render a list of
          components by mapping over an array of data. Each <code>Person</code>{" "}
          component receives an individual person object as a prop.
        </p>

        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </div>

      <hr />

      <div>
        <p>
          This section shows that React can also render arrays of JSX elements
          directly. Each <code>Person</code> component is manually placed inside
          an array and passed as a value to be rendered.
        </p>
        <p>
          This approach is useful for demonstration purposes to highlight that
          React can handle arrays of elements. However, in real-world scenarios
          where you have dynamic or large datasets, the first approach using{" "}
          <code>map</code> is preferred for scalability, readability, and
          maintainability.
        </p>

        {[
          <Person key={persons[0].name} person={persons[0]} />,
          <Person key={persons[1].name} person={persons[1]} />,
          <Person key={persons[2].name} person={persons[2]} />,
        ]}
      </div>
    </div>
  );
};

export default App;
