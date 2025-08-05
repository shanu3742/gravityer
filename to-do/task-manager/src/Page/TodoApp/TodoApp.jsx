import { useState, useEffect } from "react";
import AddTodo from "../../components/AddTodo/AddTodo";
import TodoList from "../../components/TodoList/TodoList";
import Filter from "../../components/Filter/Filter";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filtered = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto mt-12 bg-white shadow-lg rounded-lg p-6">
      <header>
        <h1 className="text-gray-800 text-3xl font-bold text-center mb-6">
          To‑Do List
        </h1>
      </header>
      <section>
        <AddTodo onAdd={addTodo} />
        <div className="mb-4">
          <Filter selectedFilter={filter} setFilter={setFilter} />
        </div>
        <TodoList
          todos={filtered}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </section>
    </div>
  );
};

export default TodoApp;
