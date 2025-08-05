const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      className={`flex items-center justify-between p-3 rounded-lg shadow-sm ${
        todo.completed ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <span
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer flex-grow ${
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 text-red-500 hover:text-red-700 transition"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
