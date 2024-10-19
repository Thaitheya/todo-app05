import { useState } from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, deleteTodo, updateStatus, updateTodo }) => {
  const [status, setStatus] = useState(todo.status);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    updateStatus(todo.id, newStatus);
    setIsDropdownActive(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, editedName, editedDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(todo.name);
    setEditedDescription(todo.description);
  };

  return (
    <div className="todo-item box">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            placeholder="Edit name"
            className="input mb-2"
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            placeholder="Edit description"
            className="input mb-2"
          />
        </>
      ) : (
        <>
          <h3 className="title is-4">{todo.name}</h3>
          <p className="subtitle is-6">{todo.description}</p>
        </>
      )}

      <div className={`dropdown ${isDropdownActive ? "is-active" : ""}`}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={() => setIsDropdownActive(!isDropdownActive)} // Toggle dropdown
          >
            <span>{status}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a
              href="#"
              className="dropdown-item"
              onClick={() => handleStatusChange("Not Completed")}
            >
              Not Completed
            </a>
            <a
              href="#"
              className="dropdown-item"
              onClick={() => handleStatusChange("Completed")}
            >
              Completed
            </a>
          </div>
        </div>
      </div>

      <div className="buttons is-flex is-justify-content-space-between btn">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="button is-link">
              Save
            </button>
            <button onClick={handleCancel} className="button is-light">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className="button is-primary">
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="button is-danger"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoItem;
