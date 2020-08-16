import React from 'react';

const TodoInput = ({ todo, handleChange, handleSubmit, isEditMode }) => {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add todo item"
            value={todo}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          disabled={!todo}
          className={`btn btn-block mt-3 ${
            isEditMode ? 'btn-success' : 'btn-primary text-uppercase'
          }`}
        >
          {isEditMode ? 'edit todo' : 'add todo'}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
