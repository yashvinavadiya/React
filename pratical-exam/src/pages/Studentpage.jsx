import { useEffect, useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import API from "../services/api";

export default function StudentPage() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async (student) => {
    if (editingStudent) {
      await API.put(`/students/${student.id}`, student);
      setEditingStudent(null);
    } else {
      await API.post("/students", student);
    }
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await API.delete(`/students/${id}`);
    fetchStudents();
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
