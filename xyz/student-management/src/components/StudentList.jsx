import React, { useState, useEffect } from 'react';
import { getStudents, deleteStudent } from '../services/studentService';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      await deleteStudent(id);
      fetchData();
    }
  };

  const filtered = students.filter(std =>
    `${std.name} ${std.email} ${std.course} ${std.grNo} ${std.className}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="list-container">
      <h2>Student List</h2>
      <div className="search-add">
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <Link to="/add">
          <button className="btn-add">Add Student</button>
        </Link>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>GR No.</th>
            <th>Class</th>
            <th>Age</th>
            <th style={{ minWidth: '140px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map(std => (
              <tr key={std.id}>
                <td>{std.name}</td>
                <td>{std.email}</td>
                <td>{std.course}</td>
                <td>{std.grNo}</td>
                <td>{std.className}</td>
                <td>{std.age}</td>
                <td>
                  <Link to={`/edit/${std.id}`}>
                    <button className="btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(std.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
