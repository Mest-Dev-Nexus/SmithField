import React, { useState } from "react";
import { X, Check } from "lucide-react";

const AuthModal = ({ showModal, setShowModal, userType, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    // Email validation
    if (!credentials.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = "Email is invalid";
    }
    
    // Password validation
    if (!credentials.password) {
      newErrors.password = "Password is required";
    } else if (credentials.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    // Additional validations for registration
    if (!isLogin) {
      if (credentials.password !== credentials.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
      
      if (userType === "wholesale" && !credentials.businessName) {
        newErrors.businessName = "Business name is required";
      }
      
      if (userType === "wholesale" && !credentials.phoneNumber) {
        newErrors.phoneNumber = "Phone number is required";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsLoading(true);
    setErrors({});
    
    try {
      // Simulate API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock successful authentication
      const userData = {
        id: "user123",
        email: credentials.email,
        name: credentials.businessName || "User",
        type: userType,
      };
      
      setSuccessMessage(
        isLogin ? "Login successful!" : "Account created successfully!"
      );
      
      // Show success message briefly before closing
      setTimeout(() => {
        setIsLoading(false);
        onSuccess(userData);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      setErrors({
        form: "Authentication failed. Please try again.",
      });
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold">
            {isLogin ? "Login" : "Create Account"}
            {userType === "wholesale" && " as Wholesale Vendor"}
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success message */}
        {successMessage && (
          <div className="p-4 bg-green-50 text-green-800 flex items-center">
            <Check className="w-5 h-5 mr-2" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5">
          {errors.form && (
            <div className="mb-4 p-3 bg-red-50 text-red-800 rounded">
              {errors.form}
            </div>
          )}

          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Registration fields */}
            {!isLogin && (
              <>
                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.confirmPassword ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="••••••••"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Wholesale specific fields */}
                {userType === "wholesale" && (
                  <>
                    {/* Business Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={credentials.businessName}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.businessName ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Your Business Name"
                      />
                      {errors.businessName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.businessName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={credentials.phoneNumber}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.phoneNumber ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="+233 XXX XXX XXX"
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading
              ? "Processing..."
              : isLogin
              ? "Log In"
              : "Create Account"}
          </button>

          {/* Toggle auth mode */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={toggleAuthMode}
              className="text-blue-600 hover:text-blue-800 focus:outline-none"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Log in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;