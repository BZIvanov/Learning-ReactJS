# useState hook

1. useState takes as an argument the initial state. Initial state could be anything like array, object, string, number, boolean etc.
2. useState returns 2 values. The first is the current state and the second is a function with which we can update the state.
3. In a component we can use useState multiple times and it is recomended every data to be in a different useState, because different states in a single useState are not merged.
4. For the set functions returned as second parameter from useState, we can get the previous state as function callback, where we will get the previous state as function parameter.

```javascript
import { type ChangeEvent, useState } from "react";

const App = () => {
  const [todoName, setTodoName] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value);
  };

  const handleAddTodo = () => {
    if (!todoName.trim()) return;

    setTodoList((prevTodos) => [...prevTodos, todoName.trim()]);
    setTodoName("");
  };

  return (
    <div>
      <input type="text" value={todoName} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

## Derived state

**Avoid storing values in state if they can be computed from existing state or props.** This avoids unnecessary state updates, keeps your code simpler, and prevents bugs. **Derived state** should be calculated on the fly inside the render, not stored separately with `useState`, unless absolutely necessary.

### Example

Instead of:

```tsx
const [items, setItems] = useState([]);
// You don't need itemsCount! It's just items.length
const [itemsCount, setItemsCount] = useState(0);
```

Do:

```tsx
const itemsCount = items.length;
```

This way, React always shows the correct count without extra state to manage!

## Bad practice example: mutating state

- Work with caution with **reference types**. For example when working with arrays or objects.

```tsx
import { useState } from "react";

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3]);

  // ❌ Bad Practice Example: Mutating state
  const handleAddNumber = () => {
    setNumbers((prevNumbers) => {
      prevNumbers.push(prevNumbers.length + 1); // ❌ Directly mutating the array, DON'T do this
      return prevNumbers;
    });
  };

  // ✅ Correct Way: Return a new array instead of mutating
  const handleAddNumber = () => {
    setNumbers((prevNumbers) => [...prevNumbers, prevNumbers.length + 1]);
  };

  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

## Content of this section

1. basic-usage
2. async-update
