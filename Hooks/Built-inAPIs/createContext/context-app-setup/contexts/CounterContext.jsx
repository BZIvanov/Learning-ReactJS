import { createContext, useContext, useState } from 'react';

// create context with undefined value
const CounterContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(1);

  // update to the context value we need
  const contextValue = {
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
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
