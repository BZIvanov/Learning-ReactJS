import type { MouseEvent } from "react";

import styles from "./Note.module.css";

type NoteProps = {
  color: string;
  note: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Note = ({ color, note, onClick }: NoteProps) => (
  <button
    className={color === "white" ? styles.white : styles.black}
    value={note}
    onClick={onClick}
  />
);

export default Note;
