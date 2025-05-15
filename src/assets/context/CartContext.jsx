import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize cartItems with useState properly
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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

  const updateCartQuantity = (productId, newQuantity) => {
    setCartItems((prev) =>
      newQuantity <= 0
        ? prev.filter((item) => item.id !== productId)
        : prev.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          )
    );
  };
  const value = {
    cartItems,
    setCartItems, // Make sure this is included
    addToCart,
    removeFromCart,
    updateCartQuantity, // This is used in ShopCart
    updateQuantity, // You might want to consolidate these
    toggleCart,
    isCartOpen,
    getCartTotal, // Add this function
    cartCount: cartItems.reduce((total, item) => total + item.quantity, 0),
    cartTotal: getCartTotal(), // Use the function here
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};