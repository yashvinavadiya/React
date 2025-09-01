export default function ReportCard({ students }) {
  if (students.length === 0) return null;

  const total = students.length;
  const avgMarks =
    students.reduce((sum, s) => sum + Number(s.marks || 0), 0) / total;
  const avgAttendance =
    students.reduce((sum, s) => sum + Number(s.attendance || 0), 0) / total;

  return (
    <div className="bg-green-100 p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">📊 Report</h2>
      <p>Total Students: {total}</p>
      <p>Average Marks: {avgMarks.toFixed(2)}</p>
      <p>Average Attendance: {avgAttendance.toFixed(2)}%</p>
    </div>
  );
}
