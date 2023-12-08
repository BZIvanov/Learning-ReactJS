import { createContext, useContext, useReducer } from 'react';

// create context with undefined value
const CounterContext = createContext();

const initialState = {
  count: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      throw new Error('Unknown action type');
  }
}

function CounterProvider({ children }) {
  // combining context with reducer instead of useState is helpful for managing context with more complex state
  const [{ count }, dispatch] = useReducer(reducer, initialState);

  // update to the context value we need
  const contextValue = {
    count,
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
}

// utility function returning the context value so we don't have to call everywhere in the application useContext(CounterContext)
function useCounter() {
  const context = useContext(CounterContext);

  // error message in case we use by mistake the context outside the provider
  if (context === undefined) {
    throw new Error('CounterContext was used outside CounterProvider!');
  }

  return context;
}

export { CounterProvider, useCounter };
