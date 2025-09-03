"use client";

import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postcode: '',
    deliveryInstructions: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // UK Postcode validation regex
  const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 to-yellow-50 px-2"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('/images/bg/top-view-table-full-food.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        boxSizing: 'border-box',
      }}
    >
      <div className="w-full max-w-md px-5 py-8 sm:px-8 rounded-lg shadow-md bg-white my-8">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <h2>First Bite</h2>
        </div>
        {/* Title */}
        <h2 className="mb-4 text-center text-2xl font-bold text-green-700">
          Register
        </h2>
        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Mobile Number */}
          <div>
            <label htmlFor="mobileNumber" className="block text-sm text-gray-700">
              Mobile Number*
            </label>
            <input
              id="mobileNumber"
              name="mobileNumber"
              type="tel"
              required
              pattern="^[0-9]{11}$"
              className="mt-1 block w-full p-3 rounded border border-gray-200 focus:border-green-700 focus:outline-none text-gray-700 placeholder-gray-400"
              placeholder="Enter your mobile number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>

          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm text-gray-700">
              First Name*
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="mt-1 block w-full p-3 rounded border border-gray-200 focus:border-green-700 focus:outline-none text-gray-700 placeholder-gray-400"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="mt-1 block w-full p-3 rounded border border-gray-200 focus:border-green-700 focus:outline-none text-gray-700 placeholder-gray-400"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm text-gray-700">
              House/Flat Number & Street*
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              className="mt-1 block w-full p-3 rounded border border-gray-200 focus:border-green-700 focus:outline-none text-gray-700 placeholder-gray-400"
              placeholder="Enter your street address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm text-gray-700">
              Town/City*
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              className="mt-1 block w-full p-3 rounded border border-gray-200 focus:border-green-700 focus:outline-none text-gray-700 placeholder-gray-400"
              placeholder="Enter your town/city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          {/* Postcode */}
          <div>
            <label htmlFor="postcode" className="block text-sm text-gray-700">
              Postcode*
            </label>
            <input
              id="postcode"
              name="postcode"
              type="text"
              required
              pattern="^[A-Za-z]{1,2}\d[A-Za-z\d]? ?\d[A-Za-z]{2}$"
              className="mt-1 block w-full p-3 rounded border border-gray-200 focus:border-green-700 focus:outline-none text-gray-700 placeholder-gray-400"
              placeholder="e.g., SW1A 1AA"
              value={formData.postcode}
              onChange={handleChange}
            />
          </div>

          {/* Delivery Instructions */}
          <div>
            <label htmlFor="deliveryInstructions" className="block text-sm text-gray-700">
              Delivery Instructions (Optional)
            </label>
            <textarea
              id="deliveryInstructions"
              name="deliveryInstructions"
              rows="3"
              className="mt-1 block w-full p-3 rounded border border-gray-200 focus:border-green-700 focus:outline-none text-gray-700 placeholder-gray-400"
              placeholder="e.g., Leave with neighbour"
              value={formData.deliveryInstructions}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-green-600 p-3 font-medium text-white transition hover:bg-green-700 pointer"
          >
            Register
          </button>
        </form>
        {/* Links */}
        <div className="mt-4 flex justify-center text-sm">
          <span className="text-gray-600">Already have an account?</span>
          <a href="/login" className="ml-1 text-green-600 hover:underline">Login here</a>
        </div>
      </div>
    </div>
  );
}