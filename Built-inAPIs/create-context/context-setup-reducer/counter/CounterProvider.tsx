import { useReducer, type PropsWithChildren } from "react";

import { CounterContext } from "./CounterContext";
import type { CounterContextType } from "./types";

type CounterState = { count: number };
type CounterAction = { type: "increment" } | { type: "decrement" };

function counterReducer(
  state: CounterState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error("Unknown action type");
  }
}

const initialState = {
  count: 1,
};

export function CounterProvider({ children }: PropsWithChildren) {
  // combining context with reducer instead of useState is helpful for managing context with more complex state
  const [{ count }, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  const value: CounterContextType = {
    count,
    increment,
    decrement,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}
