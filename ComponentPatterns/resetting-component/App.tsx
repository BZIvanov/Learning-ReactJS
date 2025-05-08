import { useState } from "react";

import Form from "./Form";

const App = () => {
  const [formKey, setFormKey] = useState(0);

  const handleReset = () => {
    setFormKey((prev) => prev + 1); // This will remount the form
  };

  return (
    <div>
      <Form key={formKey} />
      <button onClick={handleReset}>Reset Form</button>
    </div>
  );
};

export default App;
