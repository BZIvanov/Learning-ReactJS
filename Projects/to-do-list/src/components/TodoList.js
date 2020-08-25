import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, clearList, handleDelete, handleEdit }) => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            title={todo.title}
            handleDelete={() => handleDelete(todo.id)}
            handleEdit={() => handleEdit(todo.id)}
          />
        );
      })}
      {todos.length > 0 ? (
        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      ) : (
        <h5 className="text-capitalize text-center mt-5">List is empty</h5>
      )}
    </ul>
  );
};

export default TodoList;
