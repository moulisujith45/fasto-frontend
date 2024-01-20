import React from 'react';
import AdminNavbar from '../Navbar/AdminNavbar'
import { useNavigate } from 'react-router-dom';

function AdminHome ()  {
    const navigate= useNavigate()
  const handleLogout = () => {
    // Handle logout logic
  };

  const handleAddDeliveryMan = () => {
    navigate('/register')
  };

  return (
    <div>
      <AdminNavbar handleLogout={handleLogout} handleAddDeliveryMan={handleAddDeliveryMan} />
      {/* Rest of your admin dashboard content */}
      <h2>Welcome to the Admin Dashboard</h2>
    </div>
  );
};

export default AdminHome;


