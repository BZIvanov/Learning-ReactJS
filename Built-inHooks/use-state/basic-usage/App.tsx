import { useState } from "react";

function App() {
  const [rating, setRating] = useState<string>("average");

  const updateRating = () => {
    setRating("good");
  };

  return (
    <div>
      <p>{rating}</p>
      <button onClick={updateRating}>Rate</button>
    </div>
  );
}

export default App;
