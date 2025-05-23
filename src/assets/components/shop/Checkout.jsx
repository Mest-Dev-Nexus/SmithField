import React, { useState, useEffect } from "react";
import { ChevronLeft, CreditCard, Smartphone, ArrowRight } from "lucide-react";
import PlaceOrderModal from "../modals/PlaceOrderModal";

const Checkout = ({
  checkoutInfo,
  handleInputChange,
  handleSubmitOrder,
  getTotalPrice,
  setIsCheckoutOpen,
  cartItems = []
}) => {
  // Helper functions for localStorage
  const saveToStorage = (key, value) => {
    try {
      localStorage.setItem(`checkout_${key}`, JSON.stringify(value));
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  };

  const loadFromStorage = (key, defaultValue) => {
    try {
      const saved = localStorage.getItem(`checkout_${key}`);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch (error) {
      console.warn('Failed to load from localStorage:', error);
      return defaultValue;
    }
  };

  const clearStorage = () => {
    try {
      const keys = ['currentStep', 'deliveryOption', 'deliveryDate', 'deliveryTime', 'paymentMethod'];
      keys.forEach(key => localStorage.removeItem(`checkout_${key}`));
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
    }
  };

  // Initialize state with localStorage values or defaults
  const [currentStep, setCurrentStep] = useState(() => loadFromStorage('currentStep', 1));
  const [deliveryOption, setDeliveryOption] = useState(() => loadFromStorage('deliveryOption', "standard"));
  const [deliveryDate, setDeliveryDate] = useState(() => loadFromStorage('deliveryDate', ""));
  const [deliveryTime, setDeliveryTime] = useState(() => loadFromStorage('deliveryTime', ""));
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState(() => loadFromStorage('paymentMethod', ""));
  const [isPlaceOrderModalOpen, setIsPlaceOrderModalOpen] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  // Delivery options
  const DELIVERY_OPTIONS = {
    standard: { label: "Standard", fee: 15.00 },
    express: { label: "Express", fee: 30.00 },
    pickup: { label: "Pickup", fee: 0.00 }
  };

  // Time slots
  const TIME_SLOTS = [
    { value: "morning", label: "Morning (8am-12pm)" },
    { value: "afternoon", label: "Afternoon (12pm-4pm)" },
    { value: "evening", label: "Evening (4pm-8pm)" }
  ];

  const getDeliveryDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const formatted = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      dates.push({ value: formatted, label: formatted });
    }
    return dates;
  };

  const deliveryDates = getDeliveryDates();

  // Set default delivery date to tomorrow if not already set
  useEffect(() => {
    if (deliveryDates.length > 0 && !deliveryDate) {
      const defaultDate = deliveryDates[0].value;
      setDeliveryDate(defaultDate);
      saveToStorage('deliveryDate', defaultDate);
    }
  }, [deliveryDate, deliveryDates]);

  // Save state changes to localStorage
  useEffect(() => {
    saveToStorage('currentStep', currentStep);
  }, [currentStep]);

  useEffect(() => {
    saveToStorage('deliveryOption', deliveryOption);
  }, [deliveryOption]);

  useEffect(() => {
    saveToStorage('deliveryDate', deliveryDate);
  }, [deliveryDate]);

  useEffect(() => {
    saveToStorage('deliveryTime', deliveryTime);
  }, [deliveryTime]);

  useEffect(() => {
    saveToStorage('paymentMethod', paymentMethod);
  }, [paymentMethod]);

  // Calculate totals
  const subtotal = getTotalPrice();
  const deliveryFee = DELIVERY_OPTIONS[deliveryOption]?.fee || 0;
  const total = subtotal + deliveryFee;

  // Validation functions
  const validateStep1 = () => {
    const newErrors = {};
    if (!checkoutInfo.name.trim()) newErrors.name = "Name required";
    if (!checkoutInfo.email.trim()) newErrors.email = "Email required";
    if (!checkoutInfo.phone.trim()) newErrors.phone = "Phone required";
    if (!checkoutInfo.address.trim()) newErrors.address = "Address required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (deliveryOption !== 'pickup' && !deliveryTime) {
      newErrors.deliveryTime = "Time required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!paymentMethod) newErrors.paymentMethod = "Payment method required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation handlers
  const nextStep = () => {
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 2 && !validateStep2()) return;
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  // Handle place order button click
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validateStep3()) return;
    setIsPlaceOrderModalOpen(true);
  };

  // Handle successful order
  const handleOrderSuccess = async () => {
    const orderData = {
      ...checkoutInfo,
      deliveryOption,
      deliveryDate,
      deliveryTime,
      paymentMethod,
      subtotal,
      deliveryFee,
      total,
      items: cartItems
    };
    
    await handleSubmitOrder(orderData);
    setOrderCompleted(true);
    // Clear saved checkout data after successful order
    clearStorage();
  };

  // Close checkout after order completion
  const handleCloseCheckout = () => {
    // Clear saved data when closing checkout
    clearStorage();
    setIsCheckoutOpen(false);
  };

  // Handle back button click - now only navigates back to shopping when explicitly clicked
  const handleBackClick = () => {
    setIsCheckoutOpen(false);
  };

  // If order is completed, show success message
  if (orderCompleted) {
    setTimeout(() => {
      handleCloseCheckout();
    }, 3000);
    
    return (
      <div className="p-4 text-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold text-green-800 mb-2">Thank you for your order!</h2>
          <p className="text-green-600">Redirecting you back to shopping...</p>
        </div>
      </div>
    );
  }

  const orderData = {
    ...checkoutInfo,
    deliveryOption,
    deliveryDate,
    deliveryTime,
    paymentMethod,
    subtotal,
    deliveryFee,
    total,
    items: cartItems
  };

  return (
    <div className="p-4">
      <button
        onClick={handleBackClick}
        className="flex items-center text-gray-600 mb-4 hover:text-gray-800"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      
      {/* Progress steps */}
      <div className="flex mb-6">
        {['Info', 'Delivery', 'Payment'].map((step, index) => (
          <div key={step} className="flex-1 text-center">
            <div className={`h-1 ${currentStep > index ? 'bg-green-500' : 
              currentStep === index + 1 ? 'bg-green-300' : 'bg-gray-200'}`}></div>
            <span className={`text-xs mt-1 block ${currentStep === index + 1 ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
              {step}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handlePlaceOrder}>
        {/* Step 1: Personal Info */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="mb-4">
              <h3 className="font-medium text-lg mb-2">Contact Information</h3>
              <p className="text-sm text-gray-600">We'll use this information for delivery updates</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input
                name="name"
                value={checkoutInfo.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email Address *</label>
              <input
                name="email"
                type="email"
                value={checkoutInfo.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number *</label>
              <input
                name="phone"
                type="tel"
                value={checkoutInfo.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Delivery Address *</label>
              <textarea
                name="address"
                value={checkoutInfo.address}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your complete delivery address"
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>
            
            <button
              type="button"
              onClick={nextStep}
              className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center"
            >
              Continue to Delivery
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}

        {/* Step 2: Delivery */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="mb-4">
              <h3 className="font-medium text-lg mb-2">Delivery Options</h3>
              <p className="text-sm text-gray-600">Choose your preferred delivery method and time</p>
            </div>
            
            <div className="space-y-3">
              {Object.entries(DELIVERY_OPTIONS).map(([key, option]) => (
                <div
                  key={key}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    deliveryOption === key ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setDeliveryOption(key)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{option.label}</span>
                      {key === 'pickup' && <p className="text-xs text-gray-500 mt-1">Collect from our store</p>}
                      {key === 'express' && <p className="text-xs text-gray-500 mt-1">Faster delivery option</p>}
                    </div>
                    <span className="font-semibold text-green-600">
                      {option.fee === 0 ? 'Free' : `GHC ${option.fee.toFixed(2)}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {deliveryOption !== 'pickup' && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Delivery Date *</label>
                  <select
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {deliveryDates.map(date => (
                      <option key={date.value} value={date.value}>{date.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Delivery Time *</label>
                  <select
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select preferred time slot</option>
                    {TIME_SLOTS.map(slot => (
                      <option key={slot.value} value={slot.value}>{slot.label}</option>
                    ))}
                  </select>
                  {errors.deliveryTime && <p className="text-red-500 text-xs mt-1">{errors.deliveryTime}</p>}
                </div>
              </>
            )}
            
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 py-3 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="flex-1 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center"
              >
                Continue to Payment
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="mb-4">
              <h3 className="font-medium text-lg mb-2">Payment Method</h3>
              <p className="text-sm text-gray-600">Choose how you'd like to pay for your order</p>
            </div>
            
            <div className="space-y-3">
              <div
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  paymentMethod === 'mobile' ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setPaymentMethod('mobile')}
              >
                <div className="flex items-center">
                  <Smartphone className="w-5 h-5 mr-3 text-green-600" />
                  <div>
                    <span className="font-medium">Mobile Money</span>
                    <p className="text-xs text-gray-500 mt-1">MTN, Vodafone, AirtelTigo</p>
                  </div>
                </div>
              </div>
              
              <div
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  paymentMethod === 'card' ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-3 text-green-600" />
                  <div>
                    <span className="font-medium">Credit/Debit Card</span>
                    <p className="text-xs text-gray-500 mt-1">Visa, Mastercard, Verve</p>
                  </div>
                </div>
              </div>
              
              {errors.paymentMethod && <p className="text-red-500 text-xs mt-1">{errors.paymentMethod}</p>}
            </div>
            
            {/* Order Summary */}
            <div className="border-t pt-4 mt-6">
              <h4 className="font-medium mb-3">Order Summary</h4>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({cartItems.length} items):</span>
                  <span>GHC {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery ({DELIVERY_OPTIONS[deliveryOption]?.label}):</span>
                  <span>GHC {deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-300">
                  <span>Total:</span>
                  <span className="text-green-600">GHC {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 py-3 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </form>

      {/* Place Order Modal */}
      <PlaceOrderModal
        isOpen={isPlaceOrderModalOpen}
        onClose={() => setIsPlaceOrderModalOpen(false)}
        orderData={orderData}
        onOrderSuccess={handleOrderSuccess}
      />
    </div>
  );
};

export default Checkout;