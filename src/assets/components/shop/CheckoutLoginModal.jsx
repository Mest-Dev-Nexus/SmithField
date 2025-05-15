import React from "react";
import { X } from "lucide-react";
import UserLogin from "../../pages/UserLogin";

const CheckoutLoginModal = ({ onLoginSuccess, onContinueAsGuest, onClose }) => {
  const [showLoginForm, setShowLoginForm] = React.useState(false);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-semibold text-lg">Checkout Options</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {showLoginForm ? (
          <div className="p-4">
            <UserLogin 
              onLoginSuccess={() => {
                onLoginSuccess();
                onClose();
              }}
            />
            <button
              onClick={() => setShowLoginForm(false)}
              className="mt-4 w-full py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Back to Options
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-4">
            <button
              onClick={() => setShowLoginForm(true)}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium"
            >
              Login to Your Account
            </button>
            
            <button
              onClick={() => {
                onContinueAsGuest();
                onClose();
              }}
              className="w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
            >
              Continue as Guest
            </button>
            
            <div className="text-center text-sm text-gray-500 mt-4">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutLoginModal;