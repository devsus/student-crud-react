import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white py-3 mt-4 fixed-bottom">
    <div className="container text-center">
      <small>&copy; {new Date().getFullYear()} Student Management System. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;
