import React from "react";
import { X, Trash2, ShoppingBag, Calendar, RotateCw } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useUI } from "../../context/UIContext";
import { useModals } from "../../context/ModalContext";
import Checkout from "../shop/Checkout";

const ShopCart = () => {
  const {
    cartItems,
    setCartItems,
    isCartOpen,
    toggleCart,
    updateCartQuantity,
    getCartTotal,
  } = useCart();
  const { getBtnColor } = useUI();
  const { triggerCheckoutLogin, closeModal } = useModals();

  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);
  const [checkoutInfo, setCheckoutInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    addressNotes: "",
    paymentMethod: "mobile_money",
  });
  const [showClearCartConfirm, setShowClearCartConfirm] = React.useState(false);

  const clearCart = () => {
    setCartItems([]);
    setShowClearCartConfirm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOrder = (orderData) => { // Removed 'e' since it's now called from modal
    console.log("Order submitted:", orderData);
    setCartItems([]);
    setIsCheckoutOpen(false);
    toggleCart(); // Close the entire cart/checkout drawer
    closeModal(); // Close any other open modals
  };

  const handleCheckoutClick = () => {
    triggerCheckoutLogin({
      onLoginSuccess: () => setIsCheckoutOpen(true),
      onContinueAsGuest: () => setIsCheckoutOpen(true),
    });
  };

  // Function to render subscription details
  const renderSubscriptionDetails = (item) => {
    const { subscriptionDetails } = item;
    if (!subscriptionDetails) return null;

    return (
      <div className="mt-1 text-xs text-gray-500">
        <div className="flex items-center gap-1 mb-1">
          <RotateCw className="w-3 h-3" />
          <span>
            {subscriptionDetails.type === "custom"
              ? "Custom Subscription"
              : subscriptionDetails.selectedPackage?.name}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>
            {subscriptionDetails.frequency}, every {subscriptionDetails.deliveryDay || "Monday"}
          </span>
        </div>
        {subscriptionDetails.products && subscriptionDetails.products.length > 0 && (
          <div className="mt-1">
            <span>{subscriptionDetails.products.length} items in subscription</span>
          </div>
        )}
      </div>
    );
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Main Overlay for the entire cart/checkout drawer */}
      <div
        className="fixed inset-0 z-40 backdrop-blur-sm"
        onClick={() => {
          if (!isCheckoutOpen) { // Only close cart if checkout is not open
            toggleCart();
          }
        }}
        aria-hidden
      />

      {/* Cart Drawer Container */}
      <aside className="fixed top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-2/3 md:w-1/2 lg:w-2/5 bg-white z-50 shadow-xl transition-all duration-300 ease-in-out max-h-screen overflow-hidden">
        {/*
          Prevent clicks inside the aside from propagating to the overlay
          when the checkout is NOT open.
          When checkout is open, the Checkout component will handle its own
          event propagation for the modal.
        */}
        {!isCheckoutOpen && (
          <div className="p-4 flex flex-col h-full" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h2 className="text-2xl font-semibold">Shopping Cart</h2>
              <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Content (when checkout is not open) */}
            <div className="flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-gray-400" />
                  </div>
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <button
                    onClick={toggleCart}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center gap-4 py-4 border-b ${item.isSubscription ? 'bg-green-50' : ''}`}
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <h3 className="text-sm font-medium">{item.name}</h3>
                          {item.isSubscription && (
                            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                              Subscription
                            </span>
                          )}
                        </div>

                        {!item.isSubscription && (
                          <p className="text-xs text-gray-500">{item.unit}</p>
                        )}

                        {item.isSubscription && renderSubscriptionDetails(item)}

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border rounded">
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                            >
                              -
                            </button>
                            <span className="px-3">{item.quantity}</span>
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-medium">
                            GHC {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => updateCartQuantity(item.id, 0)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Footer (when checkout is not open) */}
            {cartItems.length > 0 && (
              <div className="pt-4 border-t mt-4">
                <div className="flex justify-between mb-4 text-base font-medium">
                  <span>Total</span>
                  <span>GHC {getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleCheckoutClick}
                    className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={() => setShowClearCartConfirm(true)}
                    className="p-3 border border-gray-300 text-gray-700 rounded-md hover:border-red-500 hover:bg-gray-50 hover:text-red-500"
                    title="Clear Cart"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Checkout Component (when checkout is open) */}
        {isCheckoutOpen && (
          <div className="p-4 flex flex-col h-full">
            <Checkout
              checkoutInfo={checkoutInfo}
              handleInputChange={handleInputChange}
              handleSubmitOrder={handleSubmitOrder}
              getTotalPrice={getCartTotal}
              setIsCheckoutOpen={setIsCheckoutOpen}
              cartItems={cartItems} // Pass cartItems to Checkout for order summary
            />
          </div>
        )}
      </aside>

      {/* Clear Cart Confirmation Modal */}
      {showClearCartConfirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/50 bg-opacity-30 backdrop-blur-sm"
            onClick={() => setShowClearCartConfirm(false)}
          />
          <div className="relative bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Clear Cart</h3>
            <p className="mb-6">Are you sure you want to remove all items from your cart?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowClearCartConfirm(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopCart;