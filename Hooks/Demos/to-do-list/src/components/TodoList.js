import TodoItem from './TodoItem';

const TodoList = ({ todos, clearList, handleDelete, handleEdit }) => {
  return (
    <>
      <ul>
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
      </ul>

      {todos.length > 0 ? (
        <button type='button' onClick={clearList}>
          Clear List
        </button>
      ) : (
        <h5>List is empty</h5>
      )}
    </>
  );
};

export default TodoList;
