import React from "react";
import { X, Lock, Mail, Eye, EyeOff, UserPlus, KeyRound } from "lucide-react";
import logo from "../../images/mobilemakola.png";

const CheckoutLoginModal = ({ onLoginSuccess, onContinueAsGuest, onClose }) => {
  const [showUserLogin, setShowUserLogin] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  // Add navigation functions for signup and forgot password
  const navigateToSignUp = () => {
    window.location.href = "/signup"; // Replace with your actual signup page URL
  };

  const navigateToForgotPassword = () => {
    window.location.href = "/forgot-password"; // Replace with your actual forgot password page URL
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // TODO: Replace with actual API call
      console.log("Login data:", { email, password });
      
      // Simulate successful login
      setTimeout(() => {
        setLoading(false);
        onLoginSuccess();
        onClose();
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
      setLoading(false);
    }
  };

  const renderLoginForm = () => (
    <div className="p-6">
      <div className="text-center mb-6">
        <img className="mx-auto h-16 w-auto" src={logo} alt="Makola Market" />
        <h2 className="mt-4 text-xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
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
              onClick={navigateToForgotPassword}
              className="font-medium text-green-600 hover:text-green-500 flex items-center"
            >
              <KeyRound className="h-4 w-4 mr-1" />
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

      <div className="mt-4 text-center">
        <div className="text-sm mb-2">
          <span className="text-gray-600">Don't have an account?</span>{" "}
          <button
            onClick={navigateToSignUp}
            className="font-medium text-green-600 hover:text-green-500 flex items-center"
          >
            <UserPlus className="h-4 w-4 mr-1" />
            Sign up
          </button>
        </div>

        <button
          onClick={() => setShowUserLogin(false)}
          className="font-medium text-sm text-green-600 hover:text-green-500"
        >
          Back to checkout options
        </button>
      </div>
    </div>
  );

  const renderOptions = () => (
    <div className="p-6">
      <div className="text-center mb-6">
        <img className="mx-auto h-16 w-auto" src={logo} alt="Makola Market" />
        <h2 className="mt-4 text-xl font-extrabold text-gray-900">
          Checkout Options
        </h2>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => setShowUserLogin(true)}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Login to Your Account
        </button>
        
        <button
          onClick={navigateToSignUp}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <UserPlus className="h-5 w-5 mr-2" />
          Create New Account
        </button>
        
        <button
          onClick={() => {
            onContinueAsGuest();
            onClose();
          }}
          className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Continue as Guest
        </button>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        By continuing, you agree to our Terms of Service and Privacy Policy
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md shadow-xl">
        <div className="absolute top-4 right-4">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {showUserLogin ? renderLoginForm() : renderOptions()}
      </div>
    </div>
  );
};

export default CheckoutLoginModal;