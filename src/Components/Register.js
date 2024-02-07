import { useState, useEffect } from 'react';
import { isEmail } from 'validator';
import axios from '../config/axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function Register({ registerToast }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState([]);
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState('');

  const errors = {};

  function runValidations() {
    if (username.trim().length === 0) {
      errors.username = 'Username is required';
    } else if (username.trim().length < 4 || username.trim().length > 64) {
      errors.username = 'Username should be between 4-64 characters';
    }
    if (email.trim().length === 0) {
      errors.email = 'Email is required';
    } else if (!isEmail(email)) {
      errors.email = 'Invalid email format';
    }
    if (password.trim().length === 0) {
      errors.password = 'Password is required';
    } else if (password.trim().length < 8 || password.trim().length > 128) {
      errors.password = 'Password should be between 8-128 characters';
    }
    setFormErrors(errors);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    runValidations();

    if (Object.keys(errors).length === 0) {
      setFormErrors({});

      const deliveryManformData = {
        username,
        email,
        password,
        role: 'DeliveryMan',
        mobile,
      };

      try {
        if (role) {
          const response = await axios.post(
            '/api/admin/deliverman/register',
            deliveryManformData,
            {
              headers: {
                Authorization: localStorage.getItem('token'),
              },
            }
          );
          console.log(response.data);
          console.log(deliveryManformData);
        } else {
          const formData = { username, email, password, role: 'customer' };
          const response = await axios.post('/api/user/register', formData);
          console.log(response.data);
          console.log(formData);
          navigate('/login');
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (token) {
      try {
        const { role } = jwtDecode(token);
        if (role === 'Admin') {
          setRole(role);
        }
      } catch (e) {
        console.log('Invalid or expired token');
      }
    }
  }, [token]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Register Here</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                value={username}
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
              />
              {formErrors.username && (
                <div className="text-danger">{formErrors.username}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
              {formErrors.email && (
                <div className="text-danger">{formErrors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
              {formErrors.password && (
                <div className="text-danger">{formErrors.password}</div>
              )}
            </div>
            {role === 'Admin' && (
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  value={mobile}
                  id="number"
                  onChange={(e) => setMobile(e.target.value)}
                  className="form-control"
                />
                {formErrors.mobile && (
                  <div className="text-danger">{formErrors.mobile}</div>
                )}
              </div>
            )}
            <button type="submit" className="btn btn-success">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
