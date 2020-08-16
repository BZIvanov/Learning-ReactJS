import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
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
      id: isEditMode ? todo.id : uuidv4(),
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
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput
            todo={todo.title}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isEditMode={isEditMode}
          />
          <TodoList
            todos={todos}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
