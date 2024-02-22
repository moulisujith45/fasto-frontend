import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Navbar/AdminNavbar';
import { Button } from 'react-bootstrap';

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

  const handledelivery= () => {
    navigate('/delivery')
  }

  return (
      <div>

        <h2>Welcome to the Admin Dashboard</h2>
        <Button onClick={handledelivery}> See All deliveryman</Button>
      </div>

  );
};

export default AdminHome;


