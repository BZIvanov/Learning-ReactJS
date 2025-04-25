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
