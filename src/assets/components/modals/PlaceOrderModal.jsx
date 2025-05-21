import React, { useState } from "react";
import { X, CreditCard, Smartphone, Check, AlertCircle, Loader2 } from "lucide-react";

const PlaceOrderModal = ({ 
  isOpen, 
  onClose, 
  orderData, 
  onOrderSuccess 
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    mobileNumber: '',
    mobileProvider: 'mtn'
  });

  if (!isOpen) return null;

  const handlePaymentDetailChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const processOrder = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setOrderComplete(true);
    
    // Call success callback after a short delay
    setTimeout(() => {
      onOrderSuccess();
      onClose();
    }, 2000);
  };

  // Order success screen
  if (orderComplete) {
    return (
      <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-md p-6 text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Order Confirmed!</h2>
          <p className="text-gray-600 mb-4">
            Your order has been successfully placed and will be delivered on {orderData.deliveryDate} during {orderData.deliveryTime}.
          </p>
          
          <div className="text-sm text-gray-500">
            Order ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </div>
        </div>
      </div>
    );
  }

  // Processing screen
  if (isProcessing) {
    return (
      <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-md p-6 text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
          
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Processing Payment</h2>
          <p className="text-gray-600">Please wait while we process your payment...</p>
          
          <div className="mt-4 text-sm text-gray-500">
            Do not close this window
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md max-h-full overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Confirm Your Order</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-3">
            <h3 className="font-medium mb-2">Order Summary</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Items ({orderData.items?.length || 0}):</span>
                <span>GHC {orderData.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery ({orderData.deliveryOption}):</span>
                <span>GHC {orderData.deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold pt-1 border-t border-gray-300">
                <span>Total:</span>
                <span>GHC {orderData.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-gray-50 rounded-lg p-3">
            <h3 className="font-medium mb-2">Delivery Details</h3>
            <div className="text-sm space-y-1">
              <p><span className="font-medium">Address:</span> {orderData.address}</p>
              <p><span className="font-medium">Date:</span> {orderData.deliveryDate}</p>
              <p><span className="font-medium">Time:</span> {orderData.deliveryTime}</p>
            </div>
          </div>

          {/* Payment Details */}
          <div>
            <h3 className="font-medium mb-3">Payment Details</h3>
            
            {orderData.paymentMethod === 'card' && (
              <div className="space-y-3">
                <div className="flex items-center mb-2">
                  <CreditCard className="w-4 h-4 mr-2" />
                  <span className="text-sm">Credit/Debit Card</span>
                </div>
                
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={paymentDetails.cardNumber}
                  onChange={handlePaymentDetailChange}
                  className="w-full p-2 border rounded text-sm"
                />
                
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={paymentDetails.expiryDate}
                    onChange={handlePaymentDetailChange}
                    className="flex-1 p-2 border rounded text-sm"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={paymentDetails.cvv}
                    onChange={handlePaymentDetailChange}
                    className="flex-1 p-2 border rounded text-sm"
                  />
                </div>
                
                <input
                  type="text"
                  name="cardName"
                  placeholder="Cardholder Name"
                  value={paymentDetails.cardName}
                  onChange={handlePaymentDetailChange}
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
            )}

            {orderData.paymentMethod === 'mobile' && (
              <div className="space-y-3">
                <div className="flex items-center mb-2">
                  <Smartphone className="w-4 h-4 mr-2" />
                  <span className="text-sm">Mobile Money</span>
                </div>
                
                <select
                  name="mobileProvider"
                  value={paymentDetails.mobileProvider}
                  onChange={handlePaymentDetailChange}
                  className="w-full p-2 border rounded text-sm"
                >
                  <option value="mtn">MTN Mobile Money</option>
                  <option value="vodafone">Vodafone Cash</option>
                  <option value="airteltigo">AirtelTigo Money</option>
                </select>
                
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={paymentDetails.mobileNumber}
                  onChange={handlePaymentDetailChange}
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
            )}
          </div>

          {/* Security Notice */}
          <div className="flex items-start space-x-2 bg-blue-50 p-3 rounded-lg">
            <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-blue-800">
              <p className="font-medium">Secure Payment</p>
              <p>Your payment information is encrypted and secure.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={processOrder}
              className="flex-1 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderModal;