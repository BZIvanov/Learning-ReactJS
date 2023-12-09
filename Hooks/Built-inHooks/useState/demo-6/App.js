import { useState } from 'react';

const inputStyles = {
  border: '1px solid blue',
  padding: '5px',
  margin: '10px',
};

const App = () => {
  const [city, setCity] = useState('');

  const handleClick = () => {
    console.log(city);
    setCity('');
  };

  return (
    <div>
      <label htmlFor='my-input'>Provide City Name</label>
      <input
        style={inputStyles}
        id='my-input'
        type='text'
        placeholder='Your city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        style={{ backgroundColor: 'blue', color: 'white', padding: '5px' }}
        onClick={handleClick}
      >
        Log city
      </button>
    </div>
  );
};

export default App;
