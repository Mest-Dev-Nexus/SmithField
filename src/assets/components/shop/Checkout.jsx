import React, { useState } from "react";
import { ChevronLeft, CreditCard, Smartphone, Truck, Calendar } from "lucide-react";

const Checkout = ({
  checkoutInfo,
  handleInputChange,
  handleSubmitOrder,
  getTotalPrice,
  getBtnColor,
  setIsCheckoutOpen
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  // Generate available delivery dates (next 7 days)
  const getDeliveryDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
      
      dates.push({
        value: formattedDate,
        label: formattedDate
      });
    }
    
    return dates;
  };

  const deliveryDates = getDeliveryDates();
  
  // Time slots
  const timeSlots = [
    { value: "morning", label: "Morning (8am - 12pm)" },
    { value: "afternoon", label: "Afternoon (12pm - 4pm)" },
    { value: "evening", label: "Evening (4pm - 8pm)" }
  ];

  const validateStep1 = () => {
    const errors = {};
    
    if (!checkoutInfo.name.trim()) errors.name = "Name is required";
    if (!checkoutInfo.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(checkoutInfo.email)) errors.email = "Email is invalid";
    if (!checkoutInfo.phone.trim()) errors.phone = "Phone number is required";
    if (!checkoutInfo.address.trim()) errors.address = "Address is required";
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors = {};
    
    if (!deliveryDate) errors.deliveryDate = "Please select a delivery date";
    if (!deliveryTime) errors.deliveryTime = "Please select a delivery time";
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Combine all checkout information
    const completeOrder = {
      ...checkoutInfo,
      deliveryOption,
      deliveryDate,
      deliveryTime
    };
    
    handleSubmitOrder({
      ...e,
      orderDetails: completeOrder
    });
  };

  // Calculate delivery fee based on option
  const getDeliveryFee = () => {
    switch (deliveryOption) {
      case "express":
        return 30.00;
      case "standard":
        return 15.00;
      case "pickup":
        return 0.00;
      default:
        return 15.00;
    }
  };

  const deliveryFee = getDeliveryFee();
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;

  return (
    <div className="mt-2">
      <button
        onClick={() => setIsCheckoutOpen(false)}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to cart
      </button>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Checkout</h2>
        <div className="flex mb-4">
          <div className="flex-1">
            <div className={`h-1 ${currentStep >= 1 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
            <span className="text-xs">Personal Info</span>
          </div>
          <div className="flex-1">
            <div className={`h-1 ${currentStep >= 2 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
            <span className="text-xs">Delivery</span>
          </div>
          <div className="flex-1">
            <div className={`h-1 ${currentStep >= 3 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
            <span className="text-xs">Payment</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div>
            <h3 className="font-medium mb-3">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={checkoutInfo.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full px-3 py-2 border rounded-md ${
                    validationErrors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {validationErrors.name && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={checkoutInfo.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className={`w-full px-3 py-2 border rounded-md ${
                    validationErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {validationErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={checkoutInfo.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className={`w-full px-3 py-2 border rounded-md ${
                    validationErrors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {validationErrors.phone && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm text-gray-600 mb-1">
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={checkoutInfo.address}
                  onChange={handleInputChange}
                  placeholder="Enter your delivery address"
                  className={`w-full px-3 py-2 border rounded-md ${
                    validationErrors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {validationErrors.address && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.address}</p>
                )}
              </div>

              <div>
                <label htmlFor="addressNotes" className="block text-sm text-gray-600 mb-1">
                  Address Notes (Optional)
                </label>
                <textarea
                  id="addressNotes"
                  name="addressNotes"
                  value={checkoutInfo.addressNotes}
                  onChange={handleInputChange}
                  placeholder="Apartment number, landmarks, delivery instructions, etc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows="2"
                ></textarea>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={handleNextStep}
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium"
              >
                Continue to Delivery
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Delivery Options */}
        {currentStep === 2 && (
          <div>
            <h3 className="font-medium mb-3">Delivery Options</h3>
            
            <div className="space-y-3 mb-4">
              <div 
                className={`border rounded-md p-3 cursor-pointer ${
                  deliveryOption === "standard" ? "border-green-500 bg-green-50" : "border-gray-200"
                }`}
                onClick={() => setDeliveryOption("standard")}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border mr-3 ${
                    deliveryOption === "standard" ? "border-4 border-green-500" : "border border-gray-400"
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">Standard Delivery</span>
                      <span className="font-medium">GHC 15.00</span>
                    </div>
                    <p className="text-sm text-gray-500">Delivery within 24-48 hours</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`border rounded-md p-3 cursor-pointer ${
                  deliveryOption === "express" ? "border-green-500 bg-green-50" : "border-gray-200"
                }`}
                onClick={() => setDeliveryOption("express")}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border mr-3 ${
                    deliveryOption === "express" ? "border-4 border-green-500" : "border border-gray-400"
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">Express Delivery</span>
                      <span className="font-medium">GHC 30.00</span>
                    </div>
                    <p className="text-sm text-gray-500">Same-day delivery (order before 12PM)</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`border rounded-md p-3 cursor-pointer ${
                  deliveryOption === "pickup" ? "border-green-500 bg-green-50" : "border-gray-200"
                }`}
                onClick={() => setDeliveryOption("pickup")}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border mr-3 ${
                    deliveryOption === "pickup" ? "border-4 border-green-500" : "border border-gray-400"
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">Store Pickup</span>
                      <span className="font-medium">Free</span>
                    </div>
                    <p className="text-sm text-gray-500">Pickup at our store location</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div>
                <label htmlFor="deliveryDate" className="block text-sm text-gray-600 mb-1">
                  Delivery Date
                </label>
                <select
                  id="deliveryDate"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md appearance-none ${
                    validationErrors.deliveryDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a delivery date</option>
                  {deliveryDates.map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
                {validationErrors.deliveryDate && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.deliveryDate}</p>
                )}
              </div>

              <div>
                <label htmlFor="deliveryTime" className="block text-sm text-gray-600 mb-1">
                  Delivery Time
                </label>
                <select
                  id="deliveryTime"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md appearance-none ${
                    validationErrors.deliveryTime ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
                {validationErrors.deliveryTime && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.deliveryTime}</p>
                )}
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {currentStep === 3 && (
          <div>
            <h3 className="font-medium mb-3">Payment Method</h3>
            
            <div className="space-y-3 mb-6">
              <div 
                className={`border rounded-md p-3 cursor-pointer ${
                  checkoutInfo.paymentMethod === "mobile_money" ? "border-green-500 bg-green-50" : "border-gray-200"
                }`}
                onClick={() => handleInputChange({ target: { name: "paymentMethod", value: "mobile_money" } })}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border mr-3 ${
                    checkoutInfo.paymentMethod === "mobile_money" ? "border-4 border-green-500" : "border border-gray-400"
                  }`}></div>
                  <Smartphone className="w-5 h-5 text-gray-600 mr-2" />
                  <div className="flex-1">
                    <span className="font-medium">Mobile Money</span>
                    <p className="text-sm text-gray-500">Pay with MTN, Vodafone, or AirtelTigo</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`border rounded-md p-3 cursor-pointer ${
                  checkoutInfo.paymentMethod === "card" ? "border-green-500 bg-green-50" : "border-gray-200"
                }`}
                onClick={() => handleInputChange({ target: { name: "paymentMethod", value: "card" } })}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border mr-3 ${
                    checkoutInfo.paymentMethod === "card" ? "border-4 border-green-500" : "border border-gray-400"
                  }`}></div>
                  <CreditCard className="w-5 h-5 text-gray-600 mr-2" />
                  <div className="flex-1">
                    <span className="font-medium">Credit/Debit Card</span>
                    <p className="text-sm text-gray-500">Pay with Visa, Mastercard, or other cards</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`border rounded-md p-3 cursor-pointer ${
                  checkoutInfo.paymentMethod === "cash" ? "border-green-500 bg-green-50" : "border-gray-200"
                }`}
                onClick={() => handleInputChange({ target: { name: "paymentMethod", value: "cash" } })}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border mr-3 ${
                    checkoutInfo.paymentMethod === "cash" ? "border-4 border-green-500" : "border border-gray-400"
                  }`}></div>
                  <div className="w-5 h-5 text-gray-600 mr-2 flex items-center justify-center">
                    <span className="font-bold">₵</span>
                  </div>
                  <div className="flex-1">
                    <span className="font-medium">Cash on Delivery</span>
                    <p className="text-sm text-gray-500">Pay when you receive your order</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-4 mt-6">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>GHC {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>GHC {deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>GHC {total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium"
                >
                  Place Order
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                By placing your order, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Checkout;