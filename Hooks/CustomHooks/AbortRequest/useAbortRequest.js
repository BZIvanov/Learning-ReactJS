import { useEffect, useRef } from 'react';

const useAbortRequest = (cleanup) => {
  const abortControllerRef = useRef(new AbortController());
  const signal = abortControllerRef.current.signal;

  useEffect(() => {
    // Ensure the signal is not aborted initially
    if (signal.aborted) {
      abortControllerRef.current = new AbortController();
    }

    // Cleanup logic when the component unmounts or aborts
    return () => {
      abortControllerRef.current.abort();

      if (cleanup) {
        cleanup();
      }
    };
  }, [cleanup]);

  return signal;
};

export default useAbortRequest;
