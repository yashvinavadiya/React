import { useState, useEffect } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({ name: "", age: "", email: "" });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data);
    } catch (error) {
      console.error("Failed to fetch students", error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingStudent) {
        await API.put(`/students/${editingStudent.id}`, formData);
        setEditingStudent(null);
      } else {
        await API.post("/students", formData);
      }
      fetchStudents();
      setFormData({ name: "", age: "", email: "" });
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setFormData({
      name: student.name,
      age: student.age,
      email: student.email,
    });
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleCancel = () => {
    setEditingStudent(null);
    setFormData({ name: "", age: "", email: "" });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">📋 Dashboard</h1>

      {/* Student Management Section */}
      <section className="mb-12">
       

        <form onSubmit={handleSubmit} className="mb-8 space-y-4 border p-6 rounded shadow">
          <h3 className="text-xl font-semibold">{editingStudent ? "Edit Student" : "Add New Student"}</h3>

          <div>
            <label className="block mb-1 font-medium" htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              placeholder="Student name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="age">Age:</label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
              min={1}
              className="w-full border rounded px-3 py-2"
              placeholder="Student age"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              placeholder="Student email"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-600 text-black px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              {editingStudent ? "Update" : "Add"}
            </button>
            {editingStudent && (
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-400 text-black px-5 py-2 rounded hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Students List</h3>
          {students.length === 0 ? (
            <p>No students found.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Age</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.age}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.email}</td>
                    <td className="border border-gray-300 px-4 py-2 space-x-2">
                      <button
                        onClick={() => handleEdit(student)}
                        className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="bg-red-600 text-black px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      {/* Optionally, you can include ReportCard or other widgets here */}

    </div>
  );
}
