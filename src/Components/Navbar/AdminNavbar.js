import React from 'react';
import { Link } from 'react-router-dom';

const handleLogout = () => {
  localStorage.removeItem('token')
  alert("logout successfully")
  // Handle logout logic
};
const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/admin" className="navbar-brand">Admin Dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsupportedcontent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to= "/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/register'>Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/register">Add DeliveryMan</Link>   
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/categories">Add Categories</Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
         <ul className="navbar-nav">
        <li className="nav-item">
        <button className="btn btn-danger" type="button" onClick={handleLogout}>Logout</button>
        </li>
        </ul>
        </div>

      </div>
    </nav>
  );
};

export default AdminNavbar;