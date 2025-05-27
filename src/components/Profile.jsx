import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-[380px] bg-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, John Doe 👋</h2>
        <p className="text-gray-600 text-sm mb-2">📧 johndoe@example.com</p>
        <p className="text-gray-600 text-sm mb-2">📱 +91 9876543210</p>
        <p className="text-gray-600 text-sm mb-2">🏢 ABC Pvt Ltd</p>
        <p className="text-gray-600 text-sm">🏠 123, MG Road, Mumbai</p>
      </div>
    </div>
  );
};

export default Profile;
