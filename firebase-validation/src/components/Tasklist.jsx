import React, { useEffect, useState } from "react";
import TaskItem from "./Taskitem";
import { getTasks } from "../services/Taskservices";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading Tasks...</p>;

  return (
    <div className="mt-10">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No Tasks Yet.</p>
      ) : (
        <table className="task-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <TaskItem key={index} task={task} onUpdate={fetchTasks} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
