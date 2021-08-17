import { useState } from 'react';

function App() {
  // we made our useState to accept both number and string types
  const [rating, setRating] = useState<number | string>(1);

  const updateRating = () => {
    setRating('good');
  };

  return (
    <div>
      <p>{rating}</p>
      <button onClick={updateRating}>Rate</button>
    </div>
  );
}

export default App;
