import './TodoItem.css';

const TodoItem = ({ title, handleDelete, handleEdit }) => {
  return (
    <li className='list-item'>
      <h5 className='title'>{title}</h5>
      <div className='todo-icon'>
        <button className='control' onClick={handleEdit}>
          Edit
        </button>
        <button className='control' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
