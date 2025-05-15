import { useState } from "react";
import CartButton from "../components/CartButton";
import ShopCart from "../components/Cart/ShopCart";

function AppLayout({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <Component
        {...pageProps}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <CartButton
        itemCount={cartItems.length}
        onClick={() => setShowCart(true)}
      />
      <ShopCart
        cartItems={cartItems}
        setCartItems={setCartItems}
        isOpen={showCart}
        onClose={() => setShowCart(false)}
      />
  </CartProvider>
  );
}

export default AppLayout;
