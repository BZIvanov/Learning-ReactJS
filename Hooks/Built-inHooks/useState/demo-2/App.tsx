import { useState } from 'react';

interface IState {
  people: {
    name: string;
    age: number;
    hobby?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([]);

  const invite = () => {
    setPeople([
      { name: 'Iva', age: 27 },
      { name: 'Mira', age: 27, hobby: 'Cycling' },
    ]);
  };

  return (
    <div>
      <ul>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
      <button onClick={invite}>Invite</button>
    </div>
  );
}

export default App;
