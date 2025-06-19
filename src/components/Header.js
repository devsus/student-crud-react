import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const Header = () => {
  const token = localStorage.getItem('token');
  return (
    <header className="bg-dark text-white py-3 mb-4 position-relative">
      <div className="container position-relative">
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          {/* Debug: Show token value */}
          {/* <span style={{ color: 'yellow', fontSize: '10px' }}>Token: {token ? 'Exists' : 'None'}</span> */}
          {token && <LogoutButton />}
        </div>
        <h1 className="h2 mb-0 text-center">Student Management System</h1>
      </div>
    </header>
  );
};

export default Header;
