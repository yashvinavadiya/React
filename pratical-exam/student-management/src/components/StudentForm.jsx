import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudentById, addStudent, updateStudent } from '../services/studentService';

function StudentForm() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    course: '',
    grNo: '',
    className: '',
    age: ''
  });
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getStudentById(id)
        .then(res => {
          setStudent(res.data); 
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching student:", err);
          setLoading(false);
        });
    }
  }, [id]); // dependency ensures effect runs when id changes

  const handleChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (id) await updateStudent(id, student);
      else await addStudent(student);
      navigate('/dashboard');
    } catch (err) {
      console.error("Error saving student:", err);
      alert("Error saving student");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="form-container">
      <h2>{id ? 'Edit' : 'Add'} Student</h2>
      <form onSubmit={handleSubmit} className="student-form">
        {/* form fields */}
        <label>Name:
          <input name="name" value={student.name} onChange={handleChange} required />
        </label>
        <label>Email:
          <input name="email" type="email" value={student.email} onChange={handleChange} required />
        </label>
        <label>Course:
          <input name="course" value={student.course} onChange={handleChange} required />
        </label>
        <label>GR No.:
          <input name="grNo" value={student.grNo} onChange={handleChange} required />
        </label>
        <label>Class:
          <input name="className" value={student.className} onChange={handleChange} required />
        </label>
        <label>Age:
          <input name="age" type="number" value={student.age} onChange={handleChange} required />
        </label>
        <button type="submit">{id ? 'Update' : 'Add'} Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
