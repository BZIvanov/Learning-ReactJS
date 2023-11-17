import { useCounter } from '../contexts/CounterContext';

function Second() {
  const { count } = useCounter();

  return (
    <div>
      <h1>Second Component</h1>
      <p>
        This is a component, which uses the context and is as an example
        component somewhere in the components tree in real application.
      </p>

      <p>Current count value: {count}</p>
    </div>
  );
}

export default Second;
