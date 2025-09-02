import { useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import API from "../services/api";

export default function StudentPage({ students, setStudents }) {
  const [editingStudent, setEditingStudent] = useState(null);

  const addStudent = async (student) => {
    try {
      if (editingStudent) {
        await API.put(`/students/${student.id}`, student);
        setEditingStudent(null);
      } else {
        await API.post("/students", student);
      }
      const res = await API.get("/students");
      setStudents(res.data);
    } catch (error) {
      console.error("Error adding/editing student:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await API.delete(`/students/${id}`);
      const res = await API.get("/students");
      setStudents(res.data);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="container mt-4">
      <StudentForm addStudent={addStudent} editingStudent={editingStudent} />
      <StudentList
        students={students}
        setEditingStudent={setEditingStudent}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}
