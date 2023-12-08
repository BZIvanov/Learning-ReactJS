import React from 'react';
import { notes } from './helpers';
import Octave from './Octave';

function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    audio.play();
  };

  return <Octave notes={notes} clickHandler={handleClick} />;
}

export default App;
