import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
        placeholder="Add your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="px-4 text-white transition-all bg-indigo-600 rounded-r-lg hover:bg-indigo-700">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
