import { useRef } from "react";

import sound from "./sound.mp3";

const App = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };

  return (
    <div>
      <audio ref={audioRef} controls={true} src={sound} />

      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
};

export default App;
