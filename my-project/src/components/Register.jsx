import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false); // State to toggle between Register and Login

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.username) {
      formErrors.username = 'Username is required.';
    } else if (formData.username.length < 3) {
      formErrors.username = 'Username must be at least 3 characters long.';
    }

    if (!formData.email) {
      formErrors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      formErrors.email = 'Email is not valid.';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      formErrors.password = 'Password must be at least 8 characters long.';
    }

    if (!formData.confirmPassword) {
      formErrors.confirmPassword = 'Confirm Password is required.';
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match.';
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('Username:', formData.username);
      console.log('Email:', formData.email);
      console.log('Password:', formData.password);
      setErrors({});
      // Set to true if registration successful
      setIsRegistered(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <img className="mx-auto h-[20vh] w-auto rounded-full" src="logo.jpg" alt="Your Company" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {isRegistered ? 'Sign In' : 'Register for an account'}
          </h2>
        </div>

        {!isRegistered ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              {errors.username && <div className="text-red-600 text-sm mt-1">{errors.username}</div>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {errors.password && <div className="text-red-600 text-sm mt-1">{errors.password}</div>}
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              {errors.confirmPassword && <div className="text-red-600 text-sm mt-1">{errors.confirmPassword}</div>}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        ) : (
          <p className="text-sm text-gray-600 text-center">
            You have successfully registered! Please <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">Sign In</a>.
          </p>
        )}
      </div>
    </div>
  );
}

export default Register;
