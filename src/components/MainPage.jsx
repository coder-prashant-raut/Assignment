// MainPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-[380px] bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Top Half Placeholder */}
        <div className="h-[200px] bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          {/* You can place a logo or image here */}
        </div>

        {/* Bottom */}
        <div className="px-6 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
          <p className="text-gray-500 text-sm mb-6">
            Manage and grow your business with ease.
          </p>

          <button
            onClick={() => navigate("/create-account")}
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full mt-4 border border-purple-600 text-purple-600 py-3 rounded-xl font-semibold hover:bg-purple-50 transition"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
