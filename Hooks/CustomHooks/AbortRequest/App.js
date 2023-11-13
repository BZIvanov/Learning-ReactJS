import { useState, useEffect } from 'react';
import useAbortRequest from './useAbortRequest';

const App = () => {
  const [showModal, setShowModal] = useState(true);

  const signal = useAbortRequest(() => {
    // Cleanup logic if needed
    console.log('Cleanup logic');
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data', {
          signal,
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [signal]);

  return (
    <div>
      {showModal && (
        <div>
          {/* Your modal content */}
          <button onClick={() => setShowModal(false)}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default App;
