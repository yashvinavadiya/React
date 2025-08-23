import { useState } from "react";
import AddTaskForm from "./components/Addtaskform";
import AllList from "./components/Alllist";

function App() {
  const [editingTask, setEditingTask] = useState(null);

  const refreshTasks = () => window.location.reload();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <AddTaskForm
        editingTask={editingTask}
        setEditingTask={setEditingTask}
        refreshTasks={refreshTasks}
      />
      <AllList setEditingTask={setEditingTask} />
    </div>
  );
}

export default App;
