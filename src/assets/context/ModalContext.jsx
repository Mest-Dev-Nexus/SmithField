import React, { createContext, useState, useContext } from 'react';
import CheckoutLoginModal from '../components/shop/CheckoutLoginModal';

const ModalContext = createContext();

export const useModals = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  // Main modal state
  const [modal, setModal] = useState(null);
  
  // Auth Modal
  const [authModal, setAuthModal] = useState({ show: false, type: "shopper" });
  
  // Subscription Modal
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [subscription, setSubscription] = useState({
    type: "custom",
    frequency: "weekly",
    deliveryDay: "Monday",
    products: [],
    selectedPackage: null,
  });
  
  // Wholesale Modal
  const [showWholesaleModal, setShowWholesaleModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [vendorDetails, setVendorDetails] = useState({
    email: "",
    password: "",
    businessName: "",
    phoneNumber: "",
  });

  // Subscription constants
  const subscriptionPackages = [
    {
      id: "family-essentials",
      name: "Family Essentials",
      description:
        "Perfect for a family of 4, includes staple foods and fresh produce",
      price: 99.99,
      frequencyDiscounts: {
        weekly: 0,
        biweekly: 5,
        monthly: 10,
      },
      products: [
        { id: "prod1", name: "Fresh Vegetables", quantity: 5, price: 2.99 },
        { id: "prod2", name: "Fruits", quantity: 4, price: 3.49 },
        { id: "prod3", name: "Grains", quantity: 3, price: 4.99 },
        { id: "prod4", name: "Dairy", quantity: 2, price: 3.99 },
      ],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    },
    // ... other packages
  ];

  const frequencyOptions = [
    { value: "weekly", label: "Weekly" },
    { value: "biweekly", label: "Bi-weekly" },
    { value: "monthly", label: "Monthly" },
  ];

  const dayOptions = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];

  // Modal Functions
  const handleAuthSuccess = (userData) => {
    setAuthModal((prev) => ({ ...prev, show: false }));
    closeModal();
  };

  const handleWholesaleClick = () => {
    setAuthModal({ show: true, type: "wholesale" });
  };

  const triggerCheckoutLogin = (options = {}) => {
    if (options && typeof options === 'object' && (options.onLoginSuccess || options.onContinueAsGuest)) {
      setModal(
        <CheckoutLoginModal 
          onLoginSuccess={() => {
            if (typeof options.onLoginSuccess === 'function') {
              options.onLoginSuccess();
            }
            handleAuthSuccess({ id: 1, name: "Guest User" });
          }}
          onContinueAsGuest={() => {
            if (typeof options.onContinueAsGuest === 'function') {
              options.onContinueAsGuest();
            }
          }}
          onClose={() => closeModal()}
        />
      );
    } else {
      setAuthModal({ show: true, type: "shopper" });
    }
  };

  const closeModal = () => {
    setModal(null);
  };

  const saveSubscription = () => {
    setShowSubscriptionModal(false);
    alert(
      `Your ${
        subscription.selectedPackage?.name || "custom"
      } subscription has been saved!`
    );
  };

  const handleSubmit = async (e, userType, credentials) => {
    e.preventDefault();
    try {
      const endpoint =
        userType === "wholesale" ? "/api/wholesale-auth" : "/api/shopper-auth";
        
        // Mock response for now
      // const response = await axios.post(endpoint, credentials);
      handleAuthSuccess({ id: 1, name: "Test User" });
    } catch (error) {
      // Enhanced error handling
      console.error("Auth error:", error);
      // You could add state for error messages here
      // setAuthError(error.message || "Authentication failed");
    }
  };
  
  return (
    <ModalContext.Provider
      value={{
        // General modal state
        modal,
        setModal,
        closeModal,
        
        // Auth modal
        authModal,
        setAuthModal,
        handleAuthSuccess,
        triggerCheckoutLogin,
        
        // Subscription modal
        showSubscriptionModal,
        setShowSubscriptionModal,
        subscription,
        setSubscription,
        subscriptionPackages,
        frequencyOptions,
        dayOptions,
        saveSubscription,
        
        // Wholesale modal
        showWholesaleModal,
        setShowWholesaleModal,
        isLogin,
        setIsLogin,
        vendorDetails,
        setVendorDetails,
        handleSubmit,
        handleWholesaleClick
      }}
    >
      {children}
      {modal}
    </ModalContext.Provider>
  );
};