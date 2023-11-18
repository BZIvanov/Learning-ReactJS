import { useCounter } from '../contexts/CounterContext';

function First() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>First Component</h1>
      <p>
        This is a component, which uses the context and is as an example
        component somewhere in the components tree in real application.
      </p>

      <p>Current count value: {count}</p>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </div>
  );
}

export default First;
