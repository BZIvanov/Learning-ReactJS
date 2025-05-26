import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../store/counter/counterSlice";

export function Counter() {
  const dispatch = useAppDispatch();

  const count = useAppSelector(selectCount);

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          style={{ marginTop: "1rem" }}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}
