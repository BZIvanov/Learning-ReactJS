import { useState } from 'react';
import { Prompt } from 'react-router-dom';

// with Prompt components and when condition equal true we will get prompted before navigating to another page
const Home = () => {
  const [shouldLeave, setShouldLeave] = useState(true);

  return (
    <div>
      <Prompt
        when={!shouldLeave}
        message='Are you sure you want to leave this page?'
      />
      <p>Is allowed to leave? {shouldLeave.toString()}</p>
      <button onClick={() => setShouldLeave((prev) => !prev)}>Toggle</button>
    </div>
  );
};

export default Home;
