import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="container mt-4" style={{ marginLeft: '220px' }}>
                <h2 className='text-center'>Student Management Dashboard</h2>
                <nav className='mb-4 d-flex justify-content-between align-items-center'>
                    <div>
                    </div>
                </nav>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard