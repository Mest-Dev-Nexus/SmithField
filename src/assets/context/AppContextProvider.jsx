// src/context/AppContextProvider.js
import React from 'react';
import { CartProvider } from './CartContext';
import { ProductProvider } from './ProductContext';
import { UIProvider } from './UIContext';
import { ModalProvider } from './ModalContext';

// Combine all contexts into a single provider component
export const AppContextProvider = ({ children }) => {
  return (
    <UIProvider>
      <ProductProvider>
        <CartProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </CartProvider>
      </ProductProvider>
    </UIProvider>
  );
};