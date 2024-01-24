import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Navbar/AdminNavbar';

function AdminHome ()  {
     const navigate= useNavigate()
    // const handleLogout = () => {
    //   localStorage.removeItem('token')
    //   alert("logout successfully")
    //   // Handle logout logic
    // };

  // const handleAddDeliveryMan = () => {
  //   navigate('/register')
  // };

  // const handleAddCategory = () => {

  // }

  return (
      <div>

        {/* Rest of your admin dashboard content */}
        <h2>Welcome to the Admin Dashboard</h2>
      </div>

  );
};

export default AdminHome;


