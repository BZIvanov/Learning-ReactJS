import { useEffect, useReducer, useState } from "react";

type Todo = {
  id: number;
  text: string;
};

type ApiTodo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

type Action =
  | { type: "ADD"; payload: Todo }
  | { type: "SET"; payload: Todo[] }
  | { type: "REMOVE"; payload: number };

const todoListReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "SET":
      return action.payload;
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const App = () => {
  // the first parameter to the returned array is the current state, the second is the dispatch function with which we update the state
  // the second parameter to useReducer is the initial state
  const [todoList, dispatch] = useReducer(todoListReducer, []);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data: ApiTodo[]) => {
        const todos: Todo[] = data.map((item) => ({
          id: item.id,
          text: item.title,
        }));

        dispatch({ type: "SET", payload: todos });
      });
  }, []);

  const handleAdd = () => {
    if (input.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: input.trim(),
      };
      dispatch({ type: "ADD", payload: newTodo });
      setInput("");
    }
  };

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h1>Todo List (useReducer + fetch)</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
