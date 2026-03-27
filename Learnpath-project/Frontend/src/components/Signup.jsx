import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup:', formData);
      navigate('/profile'); 
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
