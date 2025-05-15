import React from "react";
import { useModals } from "../context/ModalContext"; // Update path as needed

const CheckoutButton = () => {
  const { triggerCheckoutLogin } = useModals();

  const handleCheckout = () => {
    triggerCheckoutLogin({
      onLoginSuccess: () => {
        // Handle successful login, e.g., redirect to checkout
        console.log("User logged in successfully!");
        window.location.href = "/checkout";
      },
      onContinueAsGuest: () => {
        // Handle guest checkout
        console.log("Continuing as guest");
        window.location.href = "/checkout?guest=true";
      }
    });
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium"
    >
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;