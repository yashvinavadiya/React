import { useState } from "react";
import { updateTask, deleteTask } from "../services/Taskservices";

const TaskItem = ({ task, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [details, setDetails] = useState(task.details);
  const [completed, setCompleted] = useState(task.completed);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateTask(task.id, { title, details, completed });
    setIsEditing(false);
    onUpdate();
  };

  const handleDelete = async () => {
    if (window.confirm("Delete this Task?")) {
      await deleteTask(task.id);
      onUpdate();
    }
  };

  if (isEditing) {
    return (
      <tr className="task-row">
        <td colSpan="3">
          <form onSubmit={handleUpdate} className="form-box">
            <div className="mb-4">
              <label className="input-label" htmlFor="tasktitle">Task Title</label>
              <input
                type="text"
                id="tasktitle"
                className="input-field"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="input-label" htmlFor="taskdetails">Task Details</label>
              <textarea
                id="taskdetails"
                className="input-field"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </form>
        </td>
      </tr>
    );
  }

  return (
    <tr className="task-row">
      <td>{task.title}</td>
      <td>{task.details}</td>
      <td>
        <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;
