import { useRef, useCallback } from "react";

export const useAbortRequest = () => {
  const abortControllerRef = useRef<AbortController | null>(null);

  const getSignal = useCallback((): AbortSignal => {
    // Create a new controller if not existing or already aborted
    if (
      !abortControllerRef.current ||
      abortControllerRef.current.signal.aborted
    ) {
      abortControllerRef.current = new AbortController();
    }
    return abortControllerRef.current.signal;
  }, []);

  // Call manually to cancel
  const abort = useCallback(() => {
    if (
      abortControllerRef.current &&
      !abortControllerRef.current.signal.aborted
    ) {
      abortControllerRef.current.abort();
    }
  }, []);

  return { getSignal, abort };
};
