import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/'); // Redirect to login page after logout
    }

    return (
        <div className='container mt-4'>
            <h2 className='text-center'>Student Management Dashboard</h2>
            <nav className='mb-4 d-flex justify-content-between align-items-center'>
                <div>
                    <Link to="/dashboard/form" className='btn btn-primary me-2'>Add Student</Link>
                    <Link to="/dashboard/list" className='btn btn-success me-2'>View Students</Link>
                </div>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </nav>
            <Outlet />
        </div>
    )
}

export default Dashboard