import React from "react";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useUI } from "../../context/UIContext";
import { useModals } from "../../context/ModalContext";
import Checkout from "../shop/Checkout"; 

const ShopCart = () => {
  const { cartItems, setCartItems, isCartOpen, toggleCart, updateCartQuantity, getCartTotal } = useCart();
  const { getBtnColor } = useUI();
  const { triggerCheckoutLogin, closeModal } = useModals();

   if (!isCartOpen) return null;
  
  // State for checkout
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);
  const [checkoutInfo, setCheckoutInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    addressNotes: "",
    paymentMethod: "mobile_money"
  });

  // Remove all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    console.log("Order submitted:", { checkoutInfo, cartItems });
    // After successful submission:
    setCartItems([]);
    setIsCheckoutOpen(false);
    toggleCart();
    closeModal();
  };

  const handleCheckoutClick = () => {
    triggerCheckoutLogin({
      onLoginSuccess: () => {
        setIsCheckoutOpen(true);
      },
      onContinueAsGuest: () => {
        setIsCheckoutOpen(true);
      }
    });
  };

  if (!isCartOpen) return null;
  
  return (
   <div>
       {/* Blurred overlay */}
       {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleCart}
        />
      )}

    <div className="fixed top-16 right-0 bottom-0 w-full sm:w-96 bg-white shadow-lg z-40 overflow-auto">
      
      <div className="p-4">
        {isCheckoutOpen ? (
          <Checkout 
            checkoutInfo={checkoutInfo}
            handleInputChange={handleInputChange}
            handleSubmitOrder={handleSubmitOrder}
            getTotalPrice={getCartTotal}
            getBtnColor={getBtnColor}
            setIsCheckoutOpen={setIsCheckoutOpen}
          />
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
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
                <div className="max-h-[60vh] overflow-y-auto mb-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex border-b border-gray-100 py-4 items-center"
                    >
                      <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded overflow-hidden mr-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-gray-500 text-xs">{item.unit}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border rounded overflow-hidden">
                            <button
                              onClick={() =>
                                updateCartQuantity(item.id, item.quantity - 1)
                              }
                              className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                            >
                              -
                            </button>
                            <span className="px-2 py-1">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateCartQuantity(item.id, item.quantity + 1)
                              }
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
                        className="ml-2 text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Total</span>
                    <span className="font-medium">
                      GHC {getCartTotal().toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleCheckoutClick}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium"
                  >
                    Checkout
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition flex items-center justify-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
   </div>
  );
};

export default ShopCart;