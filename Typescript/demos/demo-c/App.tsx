import { useState } from 'react';
import PeopleList from './PeopleList';
import { IPeople } from './interface/people';

function App() {
  const [people, setPeople] = useState<IPeople['people']>([]);

  const invite = () => {
    setPeople([
      { name: 'Iva', age: 27 },
      { name: 'Mira', age: 27, hobby: 'Cycling' },
    ]);
  };

  return (
    <div>
      <PeopleList people={people} />
      <button onClick={invite}>Invite</button>
    </div>
  );
}

export default App;
