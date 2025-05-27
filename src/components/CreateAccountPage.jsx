// CreateAccountPage.jsx
import React from "react";

const CreateAccountPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-[380px] bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create your PopX account
        </h2>

        <div className="space-y-5">
          {["Full Name", "Phone Number", "Address", "Email", "Company Name"].map((label, i) => (
            <div className="relative" key={i}>
              <input
                type="text"
                id={label.toLowerCase().replace(/\s+/g, "")}
                className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-600"
                placeholder=" "
              />
              <label
                htmlFor={label.toLowerCase().replace(/\s+/g, "")}
                className="absolute left-4 top-2 text-sm text-gray-500 bg-white px-1"
              >
                {label}
              </label>
            </div>
          ))}

          {/* Radio Buttons */}
          <div className="text-sm text-gray-700 mt-4">
            <p className="mb-2 font-medium">Are you a company owner?</p>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="owner" className="accent-purple-600" />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="owner" className="accent-purple-600" />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Create Account Button */}
          <button className="w-full bg-purple-600 text-white py-3 mt-4 rounded-xl font-semibold hover:bg-purple-700 transition">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
