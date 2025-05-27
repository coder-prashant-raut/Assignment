import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const data = location.state?.formData;

  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-[380px] h-[95vh] my-3 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 bg-amber-50/20">
          Account Settings
        </h2>

        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <img
            src="https://i.pravatar.cc/100?img=65"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-purple-500 shadow-sm"
          />

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {data?.fullName || "John Doe"}
            </h3>
            <p className="text-gray-500 text-sm">{data?.email || "user@example.com"}</p>
            <p className="text-gray-600 text-sm mt-2">
              Welcome to PopX! We're excited to have you onboard 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
