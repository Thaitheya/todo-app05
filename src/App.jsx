import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  // Function to add a new todo
  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), status: "Not Completed" }]);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to update the status of a todo (e.g., completed, not completed)
  const updateStatus = (id, status) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    );
  };

  // Function to edit the name and description of a todo
  const updateTodo = (id, newName, newDescription) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, name: newName, description: newDescription }
          : todo
      )
    );
  };

  // Filter todos based on status
  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "All") return true;
    return todo.status === filterStatus;
  });

  return (
    <div className="app-container">
      <h2 className="todo-name">My Todo</h2>

      {/* TodoForm to add new todos */}
      <TodoForm addTodo={addTodo} />

      {/* Status Filter */}
      <div className="status-filter">
        <label>Status Filter: </label>
        <select
          onChange={(e) => setFilterStatus(e.target.value)}
          value={filterStatus}
          className="select"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>

      {/* TodoList that displays all todos */}
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        updateStatus={updateStatus}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
