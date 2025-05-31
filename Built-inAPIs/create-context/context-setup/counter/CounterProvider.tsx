// type PropsWithChildren is to specify, that PropsWithChildren is only used as a type and it should be completely excluded from the compiled javascript files
import { useState, type PropsWithChildren } from "react";

import { CounterContext } from "./CounterContext";
import type { CounterContextType } from "./types";

export function CounterProvider({ children }: PropsWithChildren) {
  const [count, setCount] = useState<number>(1);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  const value: CounterContextType = {
    count,
    increment,
    decrement,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}
