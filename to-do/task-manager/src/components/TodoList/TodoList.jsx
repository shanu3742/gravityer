import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (!todos?.length) {
    return <p className="text-center text-gray-500">No tasks to show.</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
