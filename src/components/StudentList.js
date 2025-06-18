import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const [student, setStudent] = useState([]); // ✅ Make sure it's an array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get('http://localhost:8080/student/getall', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                setStudent(res.data.content); // ✅ Should be an array
            } catch (error) {
                setError('Failed to fetch students. Please try again later.');
                setStudent([]); // Set to empty array on error to avoid map() crash
            } finally {
                setLoading(false);
            }
        };
        fetchStudents();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card p-4">
                        <h2 className='mb-3'>Student List</h2>
                        {loading && <div className="text-center my-3">Loading...</div>}
                        {error && <div className="alert alert-danger my-2">{error}</div>}
                        {!loading && !error && (
                            <table className='table table-bordered table-striped'>
                                <thead className='table-dark'>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Roll Number</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {student.map((std) => (
                                        <tr key={std.id}>
                                            <td>{std.id}</td>
                                            <td>{std.name}</td>
                                            <td>{std.rollnumber}</td>
                                            <td>{std.age}</td>
                                            <td>{std.gender}</td>
                                            <td> <Link to={`/edit/${std.id}`} className="btn btn-sm btn-warning">Edit</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentList;
