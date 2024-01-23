import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = ({ handleLogout, handleAddDeliveryMan }) => {
  const handleAdminLogout = () => {

    handleLogout()
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/admin" className="navbar-brand">Admin Dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="btn btn-primary mr-2" onClick={handleAddDeliveryMan}>Add Delivery Man</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleAdminLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
