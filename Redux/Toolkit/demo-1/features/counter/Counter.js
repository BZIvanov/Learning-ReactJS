import { useSelector, useDispatch } from '../../app/store';
import { decrement, increment, selectCounterValue } from './counterSlice';

export function Counter() {
  const dispatch = useDispatch();

  const count = useSelector(selectCounterValue);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
