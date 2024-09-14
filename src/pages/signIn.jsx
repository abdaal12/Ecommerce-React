import React, { useState } from 'react';
import axios from 'axios';
import newProduct4 from "../images/860.png"

const SignIn = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', formData);
      console.log(res.data); // Handle success (e.g., close modal, save token)
    } catch (err) {
      setError(err.response.data.msg || 'Error signing in');
    }
  };

  return (
    <div>
      <div className="flex max-w-4xl">
        <div className="w-1/2 bg-white p-6 flex items-center justify-center">
          <img src={newProduct4} alt="Chair" />
        </div>

        <div className="w-1/2 bg-white p-6">
          <h2 className="text-3xl font-semibold mb-6">Sign In</h2>
          <p className="mb-4">
            Dont't have an account?{' '}
            <a href="#" className="text-green-500">
              Sign Up
            </a>
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
        

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </div>

            <button type="submit" className="w-full py-2 bg-black text-white rounded">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
