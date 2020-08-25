import React from 'react';
import './TodoItem.css';

const TodoItem = ({ title, handleDelete, handleEdit }) => {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6 className="title">{title}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success control" onClick={handleEdit}>
          <i className="fas fa-pen" />
        </span>
        <span className="mx-2 text-danger control" onClick={handleDelete}>
          <i className="fas fa-trash" />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
