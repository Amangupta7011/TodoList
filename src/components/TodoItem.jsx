// src/components/TodoItem.jsx
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'gray' : 'black',
          cursor: 'pointer',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>🗑️</button>
    </li>
  );
}

export default TodoItem;
