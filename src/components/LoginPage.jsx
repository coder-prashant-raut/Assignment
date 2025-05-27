// LoginPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-[380px] h-[90vh] my-3 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Sign in to your PopX account
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Welcome back! Please enter your details to continue.
        </p>

        <div className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-600"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-sm text-gray-500 bg-white px-1"
            >
              Email Address
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              id="password"
              className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-600"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-2 text-sm text-gray-500 bg-white px-1"
            >
              Password
            </label>
          </div>

          {/* Login Button */}
          <button
            onClick={() => navigate("/profile")}
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
