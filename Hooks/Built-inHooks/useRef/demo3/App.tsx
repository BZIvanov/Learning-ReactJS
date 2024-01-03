import { useRef, ElementRef } from 'react';
import sound from './sound.mp3';

function App() {
  const audioRef = useRef<ElementRef<'audio'>>(null);

  return <audio ref={audioRef} controls={true} src={sound} />;
}

export default App;
