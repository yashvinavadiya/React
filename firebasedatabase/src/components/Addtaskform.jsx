import { useEffect, useState } from "react";
import TaskList from "../service/Tasks";

const AddTaskForm = ({ editingTask, setEditingTask, refreshTasks }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingTask) {
      await TaskList.UpdateTask(editingTask.id, formData);
      setEditingTask(null);
    } else {
      await TaskList.CreateTask({
        ...formData,
        completed: false,
        createdAt: new Date().toISOString(),
      });
    }

    setFormData({ title: "", description: "" });
    refreshTasks();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 shadow-2xl rounded-3xl p-8 space-y-6 border border-white/40 backdrop-blur-lg animate-fadeIn"
    >
      <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-center drop-shadow-md">
        {editingTask ? "✏️ Edit Task" : "➕ Add New Task"}
      </h3>

      <input
        type="text"
        name="title"
        placeholder="Enter task title..."
        required
        value={formData.title}
        onChange={handleChange}
        className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-400/50 shadow-md transition duration-200 hover:scale-[1.02]"
      />

      <textarea
        name="description"
        placeholder="Enter task description..."
        value={formData.description}
        onChange={handleChange}
        className="w-full p-3 border-2 border-pink-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-400/50 min-h-[120px] shadow-md transition duration-200 hover:scale-[1.02]"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:from-purple-700 hover:via-pink-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
      >
        {editingTask ? "Update Task ✅" : "Add Task 🚀"}
      </button>
    </form>
  );
};

export default AddTaskForm;
