import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './assets/context/CartContext';
import { UIProvider } from './assets/context/UIContext';
import { ModalProvider } from './assets/context/ModalContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UIProvider>
      <CartProvider>
        <ModalProvider> 
          <App />
        </ModalProvider>
      </CartProvider>
    </UIProvider>
  </React.StrictMode>
);