# Built-in React Hooks

Contains examples of some of the built-in React hooks. For more info read the official docs [here](https://react.dev/reference/react/hooks).

## Why hooks must be called in the same order?

### 1. React tracks hooks using call order, not names

React doesn’t track hooks using variable names. Instead, it relies entirely on the **order** in which hooks are called during the render phase.

Example:

```js
function MyComponent() {
  const [count, setCount] = useState(0); // Hook #1
  const [name, setName] = useState(""); // Hook #2
}
```

Internally, React stores:

- Hook #1 → `{ state: 0 }`
- Hook #2 → `{ state: '' }`

This order-based tracking is essential for React to match hook calls to their corresponding state or effect.

---

### 2. Behind the scenes: a Linked List of hooks

When a component renders, React constructs a **linked list** of the hooks used by that component instance. Each node in this list contains:

- The type of hook (`useState`, `useEffect`, etc.)
- The current value or state
- A reference to the next hook in the list

So, on initial render, if you have:

```js
useState(0)   // Hook #1
useState('')  // Hook #2
useEffect(...)// Hook #3
```

React stores them as a chain of linked nodes.

---

### 3. The problem with conditional hooks

Consider this example that breaks the first rule of hooks:

```js
function MyComponent() {
  const [a, setA] = useState(34); // Hook #1

  if (a === 34) {
    const [b, setB] = useState("hello"); // Hook #2 (conditionally called!)
  }

  useEffect(() => {
    console.log("Effect runs"); // Hook #3 (or is it Hook #2 now?)
  }, []);
}
```

#### Initial Render (a === 34):

- Hook #1 → `useState(34)`
- Hook #2 → `useState('hello')`
- Hook #3 → `useEffect(...)`

#### Re-render (a !== 34):

- Hook #1 → `useState(7)`
- Hook #2 → `useEffect(...)` ← ⚠ React _thinks_ this is still Hook #2 (`useState`)

React walks the hook list assuming the **same order**, but because one was conditionally skipped, the whole structure is misaligned.

> 🔥 This breaks the internal state tracking, causing unpredictable behavior.

---

### 4. Why this rule exists?

> **Hooks must be called unconditionally and in the same order on every render.**

This guarantees:

- Each hook has a stable identity across renders
- State and side effects are applied consistently
- The linked list structure stays valid

It also avoids:

- The need for unique IDs or names for each hook
- Manual bookkeeping by developers

---

## The Rule of Hooks

> **Only call hooks at the top level of your React function. Never call them inside loops, conditions, or nested functions.**

This ensures the **hook call order is deterministic**, which is critical for React’s internal logic.

## Content of this section

1. **use-state**
2. **use-effect**
3. **use-layout-effect**
4. **use-ref**
5. **use-imperative-handle**
6. **use-memo**
7. **use-callback**
8. **use-reducer**
