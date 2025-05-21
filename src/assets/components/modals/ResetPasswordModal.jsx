import React, { useState } from "react";
import { Lock, Eye, EyeOff, X } from "lucide-react";
import logo from "../../images/mobilemakola.png";

const ResetPasswordModal = ({ isOpen, onClose, token, onSuccess }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // TODO: Replace with actual API call
      // await axios.post('/api/reset-password', { token, password });
      console.log("Reset password with token:", token);
      
      // Simulate success
      setTimeout(() => {
        setLoading(false);
        setSuccess("Password reset successfully!");
        
        // Call the onSuccess callback after a short delay
        setTimeout(() => {
          if (onSuccess) {
            onSuccess();
          }
          onClose();
        }, 2000);
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password. Please try again.");
      setLoading(false);
    }
  };

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  };

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div 
      id="modal-backdrop"
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        {/* Modal header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center">
            <img className="h-8 w-auto mr-2" src={logo} alt="Makola Market" />
            <h3 className="text-lg font-medium text-gray-900">Reset Password</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6">
          <p className="text-sm text-gray-600 mb-4">
            Enter your new password below
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md text-sm">
              {success}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  minLength="6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-2 pl-10 pr-10 block w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="py-2 pl-10 block w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Resetting..." : "Reset password"}
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;