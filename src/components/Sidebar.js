import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="bg-light border-end vh-100 position-fixed" style={{ width: '220px', top: 0, left: 0, zIndex: 1030 }}>
    <div className="d-flex flex-column p-3 h-100">
      <h4 className="mb-4">Menu</h4>
      <nav className="nav flex-column">
        <Link to="/dashboard" className="nav-link border rounded mb-2">Dashboard</Link>
        <Link to="/dashboard/form" className="nav-link border rounded mb-2">Add Student</Link>
        <Link to="/dashboard/list" className="nav-link border rounded mb-2">View Students</Link>
      </nav>
    </div>
  </aside>
);

export default Sidebar;
