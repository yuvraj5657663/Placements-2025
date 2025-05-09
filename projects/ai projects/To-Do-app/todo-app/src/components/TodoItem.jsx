import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-gray-100 rounded-lg shadow-sm">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`cursor-pointer flex-grow text-gray-800 ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>
      <div className="space-x-2">
        <button
          onClick={() => toggleComplete(todo.id)}
          className="text-xl text-green-500 hover:text-green-700"
          title="Mark Done"
        >
          ✔️
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-xl text-red-500 hover:text-red-700"
          title="Delete"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
