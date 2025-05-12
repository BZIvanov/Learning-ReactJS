import type { MouseEvent } from "react";

import Note from "./Note";
import { NoteType, notes } from "./notes";
import "./App.module.css";

const App = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    audio.play();
  };

  return (
    <div>
      {notes.map((element: NoteType) => (
        <Note
          key={element.note}
          color={element.color}
          note={element.note}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default App;
