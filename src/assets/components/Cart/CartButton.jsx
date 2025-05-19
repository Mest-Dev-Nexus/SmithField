import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartButton = () => {
  const { cartItems, toggleCart } = useCart();
  
  return (
    <>
      <button
        onClick={toggleCart}
        className="fixed md:relative bottom-4 right-4 md:bottom-auto md:right-auto flex items-center justify-center md:justify-start p-3 md:px-4 md:py-2 bg-gray-800 md:bg-gray-200 text-white md:text-gray-800 rounded-full md:rounded-md hover:bg-gray-700 md:hover:bg-gray-300 transition shadow-lg md:shadow-none z-40"
        aria-label="Shopping cart"
      >
        <ShoppingBag className="w-5 h-5 md:mr-2" />
        <span className="hidden md:inline">Cart</span>
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>
    </>
  );
};

export default CartButton;