import Person from "./Person";

const person = { firstName: "John", lastName: "Doe" };

function App() {
  return <Person firstName={person.firstName} lastName={person.lastName} />;
}

export default App;
