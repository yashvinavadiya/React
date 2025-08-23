import { useEffect, useState } from "react";
import TaskList from "../service/Tasks";

const AllList = ({ setEditingTask }) => {
  const [task, setTask] = useState([]);

  const fetchData = async () => {
    const data = await TaskList.GetTask();
    setTask(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await TaskList.RemoveTask(id);
      fetchData();
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
      {task.length > 0 ? (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {task.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.title}</td>
                <td className="border p-2">{item.description}</td>
                <td className="border p-2">
                  <button
                    onClick={() => setEditingTask(item)}
                    className="bg-yellow-400 px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>No Task Added Yet</h2>
      )}
    </div>
  );
};

export default AllList;
