# The `key` prop in React

React uses the `key` prop to help **identify which elements in a list have changed**, been added, or removed. This helps React **optimize rendering** and avoid unnecessary DOM operations.

---

## ❌ Without Keys

```jsx
<ul>
  <MyComponent testProp={1} />
  <MyComponent testProp={2} />
</ul>
```

Now we update the list by adding a new item at the beginning:

```jsx
<ul>
  <MyComponent testProp={0} />
  <MyComponent testProp={1} />
  <MyComponent testProp={2} />
</ul>
```

### What React Does:

- React compares the elements **by their position** (index).
- The element with `testProp={1}` is now in index `1`, not `0`, so React assumes the item at index `0` is new.
- Even though the component looks the same, React **re-creates the elements**, potentially unmounting and remounting them.
- This can lead to **performance issues** and **loss of state**.

---

## ✅ With Keys

```jsx
<ul>
  <MyComponent key="1" testProp={1} />
  <MyComponent key="2" testProp={2} />
</ul>
```

Now update the list:

```jsx
<ul>
  <MyComponent key="0" testProp={0} />
  <MyComponent key="1" testProp={1} />
  <MyComponent key="2" testProp={2} />
</ul>
```

### What React Does:

- React uses the `key` to match elements **by identity**, not by position.
- React sees that `key="1"` and `key="2"` already exist, so it **reuses those components** and simply moves them.
- This means:
  - **No unnecessary unmount/mount**
  - **Better performance**
  - **State is preserved** across renders

---

### Key Takeaways

- Always use a **stable and unique key** for list items (ideally from your data, not the index).
- Keys help React **preserve element identity** across renders.
- Avoid using the **array index as a key** unless the list is static and never changes order.
