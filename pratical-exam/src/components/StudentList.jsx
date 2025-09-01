export default function StudentList({ students, setEditingStudent, deleteStudent }) {
  if (students.length === 0) return <p className="text-center text-muted mt-4">No students found.</p>;

  return (
    <table className="table table-bordered mt-4">
      <thead className="table-dark">
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Class</th>
          <th>Marks</th>
          <th>Attendance %</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.roll}</td>
            <td>{s.name}</td>
            <td>{s.className}</td>
            <td>{s.marks}</td>
            <td>{s.attendance}</td>
            <td>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => setEditingStudent(s)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteStudent(s.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
