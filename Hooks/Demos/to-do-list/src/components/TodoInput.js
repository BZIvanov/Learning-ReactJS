import './TodoInput.css';

const TodoInput = ({ todo, handleChange, handleSubmit, isEditMode }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add todo item'
        value={todo}
        onChange={handleChange}
      />

      <button
        type='submit'
        disabled={!todo}
        className={isEditMode ? 'btn-success' : 'btn-primary'}
      >
        {isEditMode ? 'Edit todo' : 'Add todo'}
      </button>
    </form>
  );
};

export default TodoInput;
