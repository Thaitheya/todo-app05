import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, deleteTodo, updateStatus, updateTodo }) => {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateStatus={updateStatus}
            updateTodo={updateTodo}
          />
        ))
      ) : (
        <p className="notodos">No Todos</p>
      )}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired, // Ensure status is validated
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoList;
