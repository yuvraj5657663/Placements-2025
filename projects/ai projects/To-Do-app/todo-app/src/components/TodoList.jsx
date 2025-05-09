import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">🎉 You're all caught up!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
