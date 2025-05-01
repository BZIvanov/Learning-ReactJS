import { useContext } from "react";

import { CounterContext } from "./CounterContext";
import type { CounterContextType } from "./types";

// utility function returning the context value so we don't have to call everywhere in the application useContext(CounterContext)
export function useCounter(): CounterContextType {
  const context = useContext(CounterContext);

  // error message in case we use by mistake the context outside the provider
  if (context === undefined) {
    throw new Error("CounterContext was used outside CounterProvider!");
  }

  return context;
}
