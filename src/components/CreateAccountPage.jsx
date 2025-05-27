import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    email: "",
    company: "",
    owner: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, owner: e.target.value }));
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.company.trim()) newErrors.company = "Company Name is required";
    if (!formData.owner) newErrors.owner = "Please select owner status";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Normally, you'd save this data or send it to a backend
      navigate("/profile", { state: { formData } });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-[380px] h-[90vh] my-3 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create your PopX account
        </h2>

        <div className="space-y-5">
          {[
            { label: "Full Name", key: "fullName" },
            { label: "Phone Number", key: "phone" },
            { label: "Address", key: "address" },
            { label: "Email", key: "email" },
            { label: "Company Name", key: "company" },
          ].map(({ label, key }) => (
            <div className="relative" key={key}>
              <input
                type="text"
                id={key}
                value={formData[key]}
                onChange={handleChange}
                className={`w-full px-4 pt-6 pb-2 border ${
                  errors[key] ? "border-red-500" : "border-gray-300"
                } rounded-xl focus:outline-none focus:border-purple-600`}
                placeholder=" "
              />
              <label
                htmlFor={key}
                className="absolute left-4 top-2 text-sm text-gray-500 bg-white px-1"
              >
                {label}
              </label>
              {errors[key] && (
                <p className="text-xs text-red-500 mt-1">{errors[key]}</p>
              )}
            </div>
          ))}

          <div className="text-sm text-gray-700 mt-4">
            <p className="mb-2 font-medium">Are you a company owner?</p>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="owner"
                  value="yes"
                  checked={formData.owner === "yes"}
                  onChange={handleRadioChange}
                  className="accent-purple-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="owner"
                  value="no"
                  checked={formData.owner === "no"}
                  onChange={handleRadioChange}
                  className="accent-purple-600"
                />
                <span>No</span>
              </label>
            </div>
            {errors.owner && (
              <p className="text-xs text-red-500 mt-1">{errors.owner}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-purple-600 text-white py-3 mt-4 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
