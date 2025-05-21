import React, { useState } from "react";
import { Lock, Mail, Eye, EyeOff, X } from "lucide-react";

const LoginModal = ({ 
  onLoginSuccess, 
  onClose,
  showSignupLink = false,
  onSwitchToSignup,
  showCloseButton = true
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("shopper"); // 'shopper' or 'wholesale'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // TODO: Replace with actual API call
      // const response = await axios.post('/api/login', { email, password, userType });
      console.log("Login data:", { email, password, userType });
      
      // Simulate successful login
      setTimeout(() => {
        setLoading(false);
        
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
      {/* Modal header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Sign in to your account</h3>
        {showCloseButton && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Modal content */}
      <div className="space-y-4">
        {error && (
          <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <div className="relative rounded-md shadow-sm">
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

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
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

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <button
                type="button"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        {showSignupLink && (
          <div className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={onSwitchToSignup}
              className="font-medium text-green-600 hover:text-green-500"
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;