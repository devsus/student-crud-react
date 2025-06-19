import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // Redirect to login page after logout
  };

  return (
    <button className='btn btn-danger' onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
