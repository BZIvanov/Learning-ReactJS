import { useState } from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: '', title: '' });
  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = (e) => {
    e.persist();
    setTodo((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: isEditMode ? todo.id : Math.random().toString(),
      title: todo.title,
    };
    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);
    setTodo({ id: '', title: '' });
    setIsEditMode(false);
  };

  const clearList = () => {
    setTodos([]);
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleEdit = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    const selectedTodo = todos.find((todo) => todo.id === id);
    setTodos(filteredTodos);
    setTodo(selectedTodo);
    setIsEditMode(true);
  };

  return (
    <div>
      <h3>Todo Input</h3>
      <TodoInput
        todo={todo.title}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isEditMode={isEditMode}
      />

      <hr />

      <h3>Todo List</h3>
      <TodoList
        todos={todos}
        clearList={clearList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
