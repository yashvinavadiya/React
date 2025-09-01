export default function StudentDetails({ student }) {
  if (!student) return <p className="text-gray-500">No student selected.</p>;

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-2">👤 Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Roll No:</strong> {student.roll}</p>
      <p><strong>Class:</strong> {student.className}</p>
      <p><strong>Marks:</strong> {student.marks}</p>
      <p><strong>Attendance:</strong> {student.attendance}%</p>
    </div>
  );
}
