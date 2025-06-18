import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StudentForm = ({ onStudentAdded }) => {
  const [student, setStudent] = useState({
    name: '',
    rollnumber: '',
    age: '',
    gender: ''
  });
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/student/getbyid/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        }).then(res => {
          setStudent(res.data);
        }).catch(() => setError('Failed to fetch student data.'));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (id) {
        await axios.put(
          `http://localhost:8080/student/update/${id}`,student,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            }
          }
        );
      } else {
        await axios.post(
          "http://localhost:8080/student/save",student,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            }
          }
        );
      }
      setStudent({ name: '', rollnumber: '', age: '', gender: '' });
      if (onStudentAdded) onStudentAdded();
      navigate('/dashboard/list');
    } catch (error) {
      setError('Failed to save student. Please try again.');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card p-4">
            <h3>{id ? 'Edit' : 'Add'} Student</h3>
            {error && <div className="alert alert-danger my-2">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input className="form-control" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Roll number:</label>
                <input className="form-control" name="rollnumber" value={student.rollnumber} onChange={handleChange} placeholder="Roll Number" required type="number" />
              </div>
              <div className="mb-3">
                <label className="form-label">Age:</label>
                <input className="form-control" name="age" value={student.age} onChange={handleChange} placeholder="Age" required type="number" />
              </div>
              <div className="mb-3">
                <label className="form-label">Gender:</label>
                <select className="form-select" name="gender" value={student.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <button className="btn btn-primary" type="submit">{id ? 'Update' : 'Save'}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentForm;