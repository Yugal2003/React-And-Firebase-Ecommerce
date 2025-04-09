import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ 
//       ...formData, 
//       [e.target.name]: e.target.value 
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('User Signed Up:', formData);
//     // You can handle form submission here (e.g., API call)
//   };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f9f9f9]">
      <div className="bg-pink-100 rounded-lg p-8 shadow-md w-[350px]">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-6">Signup</h2>
        <form>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            // value={formData.fullName}
            // onChange={handleChange}
            className="w-full mb-4 p-3 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            // value={formData.email}
            // onChange={handleChange}
            className="w-full mb-4 p-3 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            // value={formData.password}
            // onChange={handleChange}
            className="w-full mb-6 p-3 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-semibold py-2 rounded-md hover:bg-pink-700 transition duration-300"
          >
            Signup
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-black">
          Have an account? <span className="text-pink-600 font-semibold cursor-pointer hover:underline"><Link to={'/login'}>Login</Link></span>
        </p>
      </div>
    </div>
  );
};

export default Signup;