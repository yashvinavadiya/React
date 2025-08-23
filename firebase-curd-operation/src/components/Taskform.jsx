import React, { useState } from "react";
import { addTask } from "../services/Taskservices";

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      title,
      details,
      completed: true,
      createdAt: new Date().toString(),
    };

    console.log("newTask", newTask);

    await addTask(newTask);
    setTitle("");
    setDetails("");
    if (onTaskAdded) onTaskAdded();
  };

  return (
    <>
      {/* CSS directly inside component */}
      <style>{`
        .form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg,#ff9a9e,#fad0c4,#fbc2eb,#a18cd1);
          background-size: 400% 400%;
          animation: gradientBG 10s ease infinite;
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .form-box {
          background: #ffffffcc;
          padding: 30px 40px;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
          max-width: 400px;
          width: 100%;
          backdrop-filter: blur(5px);
        }
        .form-title {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
          font-size: 1.8rem;
          font-weight: bold;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
          color: #444;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px 12px;
          border-radius: 8px;
          border: 2px solid #ccc;
          outline: none;
          font-size: 14px;
          transition: 0.3s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #6a5acd;
          box-shadow: 0 0 8px rgba(106, 90, 205, 0.5);
        }
        .submit-btn {
          display: block;
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(90deg, #ff6a00, #ee0979);
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }
        .submit-btn:hover {
          transform: scale(1.05);
          background: linear-gradient(90deg, #ee0979, #ff6a00);
        }
      `}</style>

      <div className="form-container">
        <div className="form-box">
          <h2 className="form-title"> Add New Task </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="tasktitle">Task Title</label>
              <input
                type="text"
                id="tasktitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="taskdetails">Task Details</label>
              <textarea
                id="taskdetails"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
               Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
