import ReportCard from "../components/ReportCard";

export default function Dashboard({ students }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Dashboard</h1>
      <ReportCard students={students} />
    </div>
  );
}
