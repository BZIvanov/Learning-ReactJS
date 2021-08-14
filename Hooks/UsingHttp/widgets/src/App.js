import { useState } from 'react';
import Nav from './components/Nav';
import Route from './components/Route';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';

const data = [
  { title: 'Lemon', text: 'It is yellow and good for lemonada' },
  { title: 'Coconut', text: 'It is good for making juice and oil' },
  { title: 'Chocolate', text: 'The most delicious in the world' },
];

const options = [
  { label: 'Red color', value: 'red' },
  { label: 'Green color', value: 'green' },
  { label: 'Blue color', value: 'blue' },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Nav />
      <Route path='/'>
        <Accordion data={data} />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/colors'>
        <DropDown
          label='Pick a Color'
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
