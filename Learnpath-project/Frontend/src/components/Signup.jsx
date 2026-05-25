import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/signup', formData);
      if (response.data.success) {
        alert('Signup successful! Please login.');
        navigate('/login');
      }
    } catch (error) {
      console.error('Signup error:', error);
      if (error.response && error.response.data && error.response.data.message) {
        alert('Signup failed: ' + error.response.data.message);
      } else {
        alert('Signup failed. Please try again.');
      }
    }
  };
//onChange → handleChange → setFormData

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            name="email" 
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            name="password" 
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
