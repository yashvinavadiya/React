import React, { useState } from "react";
import { addTask } from "../services/Taskservices";

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      title,
      details,
      completed: true,
      createdAt: new Date().toString()
    };

    await addTask(newTask);
    setTitle('');
    setDetails('');
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="text-center text-2xl font-bold mb-6">Add Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="tasktitle" className="input-label">Task Title</label>
            <input
              type="text"
              id="tasktitle"
              className="input-field"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="taskdetails" className="input-label">Task Details</label>
            <textarea
              id="taskdetails"
              className="input-field"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
