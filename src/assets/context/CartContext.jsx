import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Safely get cart items from localStorage
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('cartItems');
        // Return empty array if no saved cart or invalid JSON
        if (!savedCart) return [];
        return JSON.parse(savedCart) || [];
      } catch (error) {
        console.error('Failed to parse cart items:', error);
        return [];
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart items:', error);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      return existingItem
        ? prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prev) =>
      newQuantity <= 0
        ? prev.filter((item) => item.id !== productId)
        : prev.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          )
    );
  };

  // Remove duplicate updateCartQuantity function since it's the same as updateQuantity
  // const updateCartQuantity = ...

  const value = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    updateCartQuantity: updateQuantity, // Use the same function
    toggleCart,
    isCartOpen,
    getCartTotal,
    cartCount: cartItems.reduce((total, item) => total + item.quantity, 0),
    cartTotal: getCartTotal(),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartContext };