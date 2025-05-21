import React, { useState, useEffect } from "react";
import { Mail, X } from "lucide-react";
import logo from "../../images/mobilemakola.png";

const ForgotPasswordModal = ({ isOpen, onClose, email: initialEmail }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Pre-fill email if provided
  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // TODO: Replace with actual API call
      // await axios.post('/api/forgot-password', { email });
      console.log("Forgot password request for:", email);
      
      // Simulate success
      setTimeout(() => {
        setLoading(false);
        setSuccess("Password reset link sent to your email!");
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send reset link. Please try again.");
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
      className="fixed inset-0 flex bg-black/90 items-center justify-center z-50 p-4"
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
            Enter your email and we'll send you a link to reset your password
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                {loading ? "Sending..." : "Send reset link"}
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

export default ForgotPasswordModal;