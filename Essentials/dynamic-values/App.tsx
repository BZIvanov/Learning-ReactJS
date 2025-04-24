const fruits = ["apple", "banana", "orange"];

function randomInt() {
  return Math.floor(Math.random() * fruits.length);
}

function App() {
  const today = new Date().toLocaleDateString();

  return (
    <div>
      <p>My favourite fruit is {fruits[randomInt()]}.</p>
      <p>Current date is {today}</p>
    </div>
  );
}

export default App;
