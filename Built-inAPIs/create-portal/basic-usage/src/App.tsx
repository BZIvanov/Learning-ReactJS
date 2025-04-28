import { useState } from "react";

import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div>
      <h1>Hello from App</h1>
      <button onClick={handleOpenModal}>Open Modal</button>

      {isOpen && (
        <Modal onClose={handleCloseModal}>This is a Portal Modal!</Modal>
      )}
    </div>
  );
};

export default App;
