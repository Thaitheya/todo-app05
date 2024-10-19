import { useState } from "react";
import PropTypes from "prop-types";
const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name.trim() && input.description.trim()) {
      addTodo(input);
      setInput({ name: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form box">
      <div className="field">
        <div className="control">
          <input
            type="text"
            name="name"
            placeholder="Todo Name"
            value={input.name}
            onChange={handleChange}
            className="todo-input"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            type="text"
            name="description"
            placeholder="Todo Description"
            value={input.description}
            onChange={handleChange}
            className="todo-input"
          />
        </div>
      </div>
      <button type="submit" className="add-button">
        Add Todo
      </button>
    </form>
    
  );
  
};

export default TodoForm;
