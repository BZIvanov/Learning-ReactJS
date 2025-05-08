import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  return (
    <form>
      <label>
        Name:{" "}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />
      </label>
      <p>Typed name: {name}</p>
    </form>
  );
};

export default Form;
