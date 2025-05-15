import React from "react";
import { useModals } from "../../context/ModalContext"

// This is a mock checkout page component that would display
// based on the checkout state from the ModalContext
const Checkout = () => {
  const { checkoutState, user } = useModals();
  
  // Different checkout steps
  const renderCheckoutStep = () => {
    switch(checkoutState.step) {
      case 'cart':
        return <CartStep />;
      case 'shipping':
        return <ShippingStep isGuest={checkoutState.isGuest} />;
      case 'payment':
        return <PaymentStep />;
      case 'review':
        return <ReviewStep />;
      case 'confirmation':
        return <ConfirmationStep />;
      default:
        return <CartStep />;
    }
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      {/* User status indicator */}
      <div className="mb-4 p-3 bg-gray-50 rounded-md">
        {user ? (
          <p className="text-green-600">Logged in as: {user.name}</p>
        ) : (
          <p className="text-gray-600">
            {checkoutState.isGuest ? 'Checking out as guest' : 'Please log in to continue'}
          </p>
        )}
      </div>
      
      {/* Checkout progress indicator */}
      <div className="mb-8">
        <CheckoutProgress currentStep={checkoutState.step} />
      </div>
      
      {/* Render the appropriate checkout step */}
      {renderCheckoutStep()}
    </div>
  );
};

// Mock component for step progress
const CheckoutProgress = ({ currentStep }) => {
  const steps = ['cart', 'shipping', 'payment', 'review', 'confirmation'];
  
  return (
    <div className="flex justify-between mb-8">
      {steps.map((step, index) => (
        <div 
          key={step} 
          className={`flex flex-col items-center ${
            steps.indexOf(currentStep) >= index ? 'text-green-600' : 'text-gray-400'
          }`}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            steps.indexOf(currentStep) >= index ? 'bg-green-600 text-white' : 'bg-gray-200'
          }`}>
            {index + 1}
          </div>
          <span className="text-sm mt-1 capitalize">{step}</span>
        </div>
      ))}
    </div>
  );
};

// Mock component for cart step
const CartStep = () => (
  <div className="py-4">
    <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
    {/* Cart items would go here */}
    <div className="border-t mt-6 pt-4">
      <CheckoutButton />
    </div>
  </div>
);

// Mock component for shipping step
const ShippingStep = ({ isGuest }) => (
  <div className="py-4">
    <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
    {isGuest && (
      <p className="mb-4 text-gray-600 italic">
        You're checking out as a guest. Your information won't be saved for future orders.
      </p>
    )}
    {/* Shipping form would go here */}
    <div className="mt-6">
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
        Continue to Payment
      </button>
    </div>
  </div>
);

// Other step components would be defined similarly
const PaymentStep = () => <div className="py-4"><h2 className="text-xl font-semibold">Payment</h2></div>;
const ReviewStep = () => <div className="py-4"><h2 className="text-xl font-semibold">Review Order</h2></div>;
const ConfirmationStep = () => <div className="py-4"><h2 className="text-xl font-semibold">Order Confirmed!</h2></div>;

// Import CheckoutButton from previous example
const CheckoutButton = () => {
  const { triggerCheckoutLogin, user } = useModals();

  const handleCheckoutClick = () => {
    if (user) {
      // If user is logged in, proceed directly
      window.location.href = "/checkout/shipping";
    } else {
      // Show login modal
      triggerCheckoutLogin(true);
    }
  };

  return (
    <button
      onClick={handleCheckoutClick}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium"
    >
      Proceed to Checkout
    </button>
  );
};

export default Checkout;