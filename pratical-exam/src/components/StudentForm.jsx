import { useEffect, useState } from "react";

export default function StudentForm({ addStudent, editingStudent }) {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    className: "",
    marks: "",
    attendance: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setForm(editingStudent);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.roll || !form.className) {
      setError("Name, Roll No, and Class are required!");
      return;
    }
    setError("");
    addStudent(form);
    setForm({
      name: "",
      roll: "",
      className: "",
      marks: "",
      attendance: "",
    });
  };

  return (
    <div className="card p-4">
      <h4>{editingStudent ? "✏️ Edit Student" : "➕ Add Student"}</h4>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Roll No"
            className="form-control"
            value={form.roll}
            onChange={(e) => setForm({ ...form, roll: e.target.value })}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={form.className}
            onChange={(e) =>
              setForm({ ...form, className: e.target.value })
            }
          >
            <option value="">Select Class</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>
        </div>
        <div className="col-md-6">
          <input
            type="number"
            placeholder="Marks"
            className="form-control"
            value={form.marks}
            onChange={(e) => setForm({ ...form, marks: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            placeholder="Attendance %"
            className="form-control"
            value={form.attendance}
            onChange={(e) =>
              setForm({ ...form, attendance: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            {editingStudent ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}
