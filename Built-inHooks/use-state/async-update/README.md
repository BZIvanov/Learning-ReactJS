# Updating state

## The problem

```jsx
const incrementCount = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};
```

### What's happening?

- Each call to `setCount(count + 1)` uses the same **stale value** of `count`.
- React batches these updates, so you’re effectively setting the same value three times.
- If `count` is `0`, the result will be `1`, not `3`.

---

## The Correct Way

To increment based on the latest state, use the **functional updater form**:

```jsx
const incrementCount = () => {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
};
```

Now each update uses the **most recent state**, and the final result will be `3` higher.

---

## Why this works?

- `setCount(prev => prev + 1)` ensures you're always working with the latest state.
- React batches updates, but the functional form chains them safely.
- This pattern is especially important in **concurrent rendering** in React 18+ and React 19.

---

## Summary: `useState` update forms

| Update Form                  | Description                      | Safe for Multiple Updates?                   |
| ---------------------------- | -------------------------------- | -------------------------------------------- |
| `setCount(count + 1)`        | Uses current value in closure    | ❌ No — can be stale                         |
| `setCount(prev => prev + 1)` | Uses latest state at update time | ✅ Yes — recommended for incremental updates |
