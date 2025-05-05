import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Truck,
  Shovel,
  ShoppingCart,
  ChevronRight,
  X,
  Search,
  Calendar,
  RotateCw,
  Package,
  Check,
  Plus,
} from "lucide-react";
import mobilemakola from "../images/mobilemakola.png";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("retail");
  const [cartItems, setCartItems] = useState([]);
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState({
    retail: [],
    wholesale: [],
    tools: [],
  });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showWholesaleModal, setShowWholesaleModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [vendorDetails, setVendorDetails] = useState({
    email: "",
    password: "",
    businessName: "",
    phoneNumber: "",
  });
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [subscription, setSubscription] = useState({
    type: "custom", // 'custom' or package id
    frequency: "weekly",
    deliveryDay: "Monday",
    products: [],
    selectedPackage: null,
  });

  // Subscription packages data
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
    {
      id: "healthy-living",
      name: "Healthy Living",
      description: " and health-focused items for conscious consumers",
      price: 129.99,
      frequencyDiscounts: {
        weekly: 0,
        biweekly: 7,
        monthly: 15,
      },
      products: [
        { id: "prod5", name: " Vegetables", quantity: 6, price: 3.99 },
        { id: "prod6", name: " Fruits", quantity: 5, price: 4.49 },
        { id: "prod7", name: "Whole Grains", quantity: 2, price: 5.99 },
        { id: "prod8", name: "Plant-Based Dairy", quantity: 3, price: 4.49 },
      ],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    },
    {
      id: "quick-meals",
      name: "Quick Meals",
      description: "Everything you need for easy weeknight dinners",
      price: 89.99,
      frequencyDiscounts: {
        weekly: 0,
        biweekly: 5,
        monthly: 8,
      },
      products: [
        { id: "prod9", name: "Pre-cut Vegetables", quantity: 4, price: 3.49 },
        { id: "prod10", name: "Meat", quantity: 3, price: 6.99 },
        { id: "prod11", name: "Pasta", quantity: 2, price: 2.99 },
        { id: "prod12", name: "Sauces", quantity: 2, price: 3.49 },
      ],
      image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    },
  ];

  const productCategories = {
    retail: ["fruits", "vegetables", "meat", "dairy", "grains"],
    wholesale: ["fruits", "vegetables", "meat", "dairy", "grains"],
    tools: ["fertilizers", "garden tools", "seeds", "irrigation", "pesticides"],
  };

  const categories = [
    {
      id: "retail",
      name: "Retail",
      icon: <ShoppingBag className="w-5 h-5 mr-2" />,
    },
    {
      id: "wholesale",
      name: "Wholesale",
      icon: <Truck className="w-5 h-5 mr-2" />,
    },
    {
      id: "tools",
      name: "Farm Inputs",
      icon: <Shovel className="w-5 h-5 mr-2" />,
    },
  ];

  const frequencyOptions = [
    { value: "weekly", label: "Weekly" },
    { value: "biweekly", label: "Bi-weekly" },
    { value: "monthly", label: "Monthly" },
  ];

  const dayOptions = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Calculate discounted price based on frequency
  const getPackagePrice = (pkg, frequency) => {
    const discount = pkg.frequencyDiscounts[frequency] || 0;
    return pkg.price * (1 - discount / 100);
  };

  const handleWholesaleClick = () => {
    setShowWholesaleModal(true);
  };

  const handleCategoryChange = (categoryId) => {
    if (categoryId === "wholesale") {
      handleWholesaleClick();
    } else {
      setActiveCategory(categoryId);
      setSearchQuery("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendorDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vendor details:", vendorDetails);
  };

  const toggleSubscriptionProduct = (product) => {
    setSubscription((prev) => {
      const existingIndex = prev.products.findIndex((p) => p.id === product.id);
      if (existingIndex >= 0) {
        const updatedProducts = [...prev.products];
        updatedProducts.splice(existingIndex, 1);
        return {
          ...prev,
          products: updatedProducts,
          type: updatedProducts.length === 0 ? "custom" : prev.type,
        };
      } else {
        return {
          ...prev,
          products: [...prev.products, { ...product, quantity: 1 }],
          type: "custom",
        };
      }
    });
  };

  const updateSubscriptionQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setSubscription((prev) => ({
      ...prev,
      products: prev.products.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ),
      type: "custom",
    }));
  };

  const handleSubscriptionFrequencyChange = (frequency) => {
    setSubscription((prev) => ({
      ...prev,
      frequency,
    }));
  };

  const handleDeliveryDayChange = (e) => {
    setSubscription((prev) => ({
      ...prev,
      deliveryDay: e.target.value,
    }));
  };

  const selectPackage = (pkg) => {
    setSubscription({
      type: pkg.id,
      frequency: "weekly",
      deliveryDay: "Monday",
      products: pkg.products.map((p) => ({ ...p })),
      selectedPackage: pkg,
    });
  };

  const saveSubscription = () => {
    console.log("Subscription saved:", subscription);
    setShowSubscriptionModal(false);
    alert(
      `Your ${
        subscription.selectedPackage?.name || "custom"
      } subscription has been saved!`
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Mock products data - replace with your actual API call
        const mockProducts = {
          retail: [
            {
              id: "prod1",
              name: "Fresh Vegetables",
              category: "vegetables",
              price: 2.99,
              unit: "lb",
              image:
                "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
            },
            {
              id: "prod2",
              name: "Fruits",
              category: "fruits",
              price: 3.49,
              unit: "lb",
              image:
                "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
            },
            {
              id: "prod3",
              name: "Grains",
              category: "grains",
              price: 4.99,
              unit: "bag",
              image:
                "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
            },
            {
              id: "prod4",
              name: "Dairy",
              category: "dairy",
              price: 3.99,
              unit: "unit",
              image:
                "https://images.unsplash.com/photo-1550583724-b2692b85b150",
            },
            {
              id: "prod5", 
              name: " Vegetables",
              category: "vegetables",
              price: 3.99,
              unit: "lb",
              image:
                "https://images.unsplash.com/photo-1542838132-92c53300491e",
            },
            {
              id: "prod6",
              name: " Fruits",
              category: "fruits",
              price: 4.49,
              unit: "lb",
              image:
                "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
            },
            {
              id: "prod7",
              name: "Whole Grains",
              category: "grains",
              price: 5.99,
              unit: "bag",
              image:
                "https://images.unsplash.com/photo-1544025162-d76694265947",
            },
            {
              id: "prod8",
              name: "Plant-Based Dairy",
              category: "dairy",
              price: 4.49,
              unit: "unit",
              image:
                "https://images.unsplash.com/photo-1550583724-b2692b85b150",
            },
            {
              id: "prod9",
              name: "Pre-cut Vegetables",
              category: "vegetables",
              price: 3.49,
              unit: "pack",
              image:
                "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
            },
            {
              id: "prod10",
              name: "Meat",
              category: "meat",
              price: 6.99,
              unit: "lb",
              image:
                "https://images.unsplash.com/photo-1602476527208-9c2a66a0916f",
            },
            {
              id: "prod11",
              name: "Pasta",
              category: "grains",
              price: 2.99,
              unit: "box",
              image:
                "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
            },
            {
              id: "prod12",
              name: "Sauces",
              category: "grains",
              price: 3.49,
              unit: "jar",
              image:
                "https://images.unsplash.com/photo-1544025162-d76694265947",
            },
          ],
          wholesale: [],
          tools: [],
        };

        setProducts(mockProducts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products[activeCategory] || []);
    } else {
      const filtered = (products[activeCategory] || []).filter((product) => {
        const matchesName = product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory =
          product.category &&
          product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesName || matchesCategory;
      });
      setFilteredProducts(filtered);
    }
  }, [searchQuery, activeCategory, products]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return removeFromCart(productId);

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getCategoryBgColor = (category) => {
    if (category === activeCategory) {
      switch (category) {
        case "retail":
          return "bg-green-600 text-white";
        case "wholesale":
          return "bg-blue-600 text-white";
        case "tools":
          return "bg-amber-600 text-white";
        default:
          return "bg-green-600 text-white";
      }
    }
    return "bg-gray-100 text-gray-700 hover:bg-gray-200";
  };

  const getCategoryAccentColor = (category) => {
    switch (category) {
      case "retail":
        return "bg-green-100 text-green-800 border-green-200";
      case "wholesale":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "tools":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-green-100 text-green-800 border-green-200";
    }
  };

  const getBtnColor = () => {
    switch (activeCategory) {
      case "retail":
        return "bg-green-600 hover:bg-green-700";
      case "wholesale":
        return "bg-blue-600 hover:bg-blue-700";
      case "tools":
        return "bg-amber-600 hover:bg-amber-700";
      default:
        return "bg-green-600 hover:bg-green-700";
    }
  };

  // Calculate total price for subscription
  const getSubscriptionTotal = () => {
    if (subscription.type !== "custom" && subscription.selectedPackage) {
      return getPackagePrice(
        subscription.selectedPackage,
        subscription.frequency
      );
    }
    return subscription.products.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Wholesale Vendor Modal */}
      {showWholesaleModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {isLogin
                      ? "Wholesale Shopper Login"
                      : "Wholesale Shopper Registration"}
                  </h3>
                  <button
                    onClick={() => setShowWholesaleModal(false)}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={vendorDetails.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      value={vendorDetails.password}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  {!isLogin && (
                    <>
                      <div className="mb-4">
                        <label
                          htmlFor="businessName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Business Name
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          id="businessName"
                          required
                          value={vendorDetails.businessName}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
{/* 
                      <div className="mb-4">
                        <label
                          htmlFor="licenseNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Business License Number
                        </label>
                        <input
                          type="text"
                          name="licenseNumber"
                          id="licenseNumber"
                          required
                          value={vendorDetails.licenseNumber}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div> */}

                      <div className="mb-4">
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          id="phoneNumber"
                          required
                          value={vendorDetails.phoneNumber}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      {isLogin
                        ? "Need to register as a vendor?"
                        : "Already have an account? Login"}
                    </button>
                  </div>

                  <div className="mt-5 sm:mt-6">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                    >
                      {isLogin ? "Login" : "Register"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Create Subscription
                  </h3>
                  <button
                    onClick={() => setShowSubscriptionModal(false)}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Package className="w-5 h-5 mr-2" />
                    Choose a Subscription Package
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {subscriptionPackages.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => selectPackage(pkg)}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          subscription.type === pkg.id
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200 hover:border-green-300"
                        }`}
                      >
                        <div className="relative h-32 mb-3 rounded-md overflow-hidden">
                          <img
                            src={pkg.image}
                            alt={pkg.name}
                            className="w-full h-full object-cover"
                          />
                          {subscription.type === pkg.id && (
                            <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                              <Check className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                        <h5 className="font-medium text-gray-900">
                          {pkg.name}
                        </h5>
                        <p className="text-sm text-gray-500 mb-2">
                          {pkg.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-green-600">
                            GHC {pkg.price.toFixed(2)}
                          </span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {pkg.products.length} items
                          </span>
                        </div>
                      </div>
                    ))}

                    <div
                      onClick={() =>
                        setSubscription({
                          type: "custom",
                          frequency: "weekly",
                          deliveryDay: "Monday",
                          products: [],
                          selectedPackage: null,
                        })
                      }
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        subscription.type === "custom"
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-green-300"
                      }`}
                    >
                      <div className="h-32 mb-3 rounded-md bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <ShoppingBag className="w-8 h-8 mx-auto text-gray-400" />
                          <p className="text-sm text-gray-500 mt-1">
                            Custom Selection
                          </p>
                        </div>
                      </div>
                      <h5 className="font-medium text-gray-900">
                        Build Your Own
                      </h5>
                      <p className="text-sm text-gray-500 mb-2">
                        Choose exactly what you want
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-green-600">
                          Custom Price
                        </span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {subscription.type === "custom"
                            ? `${subscription.products.length} items`
                            : "0+"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Delivery Schedule
                    </h4>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Frequency
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {frequencyOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                              handleSubscriptionFrequencyChange(option.value)
                            }
                            className={`py-2 px-3 rounded-md text-sm ${
                              subscription.frequency === option.value
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Delivery Day
                      </label>
                      <select
                        value={subscription.deliveryDay}
                        onChange={handleDeliveryDayChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      >
                        {dayOptions.map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="bg-green-50 p-4 rounded-md">
                      <h5 className="font-medium text-green-800 mb-2">
                        Subscription Summary
                      </h5>
                      <p className="text-sm text-green-700">
                        Your {subscription.frequency} subscription will be
                        delivered every {subscription.deliveryDay}.
                      </p>
                      {subscription.type !== "custom" &&
                        subscription.selectedPackage && (
                          <p className="text-sm text-green-700 mt-1">
                            Package: {subscription.selectedPackage.name}
                          </p>
                        )}
                      {subscription.products.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm font-medium text-green-800">
                            Products in subscription:
                          </p>
                          <ul className="text-sm text-green-700 mt-1 space-y-1">
                            {subscription.products.map((item) => (
                              <li key={item.id}>
                                {item.name} (×{item.quantity})
                              </li>
                            ))}
                          </ul>
                          <div className="mt-2 pt-2 border-t border-green-200">
                            <div className="flex justify-between">
                              <span className="font-medium">Total:</span>
                              <span className="font-bold">
                                ${getSubscriptionTotal().toFixed(2)}
                              </span>
                            </div>
                            {subscription.type !== "custom" &&
                              subscription.selectedPackage && (
                                <div className="text-xs mt-1">
                                  {subscription.frequency !== "weekly" && (
                                    <span className="text-green-600">
                                      {
                                        subscription.selectedPackage
                                          .frequencyDiscounts[
                                          subscription.frequency
                                        ]
                                      }
                                      % {subscription.frequency} discount
                                      applied
                                    </span>
                                  )}
                                </div>
                              )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <RotateCw className="w-5 h-5 mr-2" />
                      {subscription.type === "custom"
                        ? "Select Products"
                        : "Package Contents"}
                    </h4>

                    <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                      {subscription.type === "custom" &&
                      filteredProducts.length === 0 ? (
                        <p className="text-gray-500 text-sm">
                          No products available to add to subscription
                        </p>
                      ) : subscription.type === "custom" ? (
                        filteredProducts.map((product) => {
                          const isInSubscription = subscription.products.some(
                            (p) => p.id === product.id
                          );
                          const subscriptionItem = subscription.products.find(
                            (p) => p.id === product.id
                          );

                          return (
                            <div
                              key={product.id}
                              className={`p-3 rounded-md border ${
                                isInSubscription
                                  ? "border-green-300 bg-green-50"
                                  : "border-gray-200"
                              }`}
                            >
                              <div className="flex items-start">
                                <input
                                  type="checkbox"
                                  checked={isInSubscription}
                                  onChange={() =>
                                    toggleSubscriptionProduct(product)
                                  }
                                  className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                />
                                <div className="ml-3 flex-1">
                                  <div className="flex justify-between">
                                    <label className="block text-sm font-medium text-gray-700">
                                      {product.name}
                                    </label>
                                    <span className="text-sm font-medium">
                                      GHC{product.price?.toFixed(2) || "0.00"}
                                    </span>
                                  </div>
                                  {product.category && (
                                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded mt-1">
                                      {product.category}
                                    </span>
                                  )}
                                  {isInSubscription && (
                                    <div className="mt-2 flex items-center">
                                      <span className="text-sm text-gray-600 mr-2">
                                        Quantity:
                                      </span>
                                      <button
                                        onClick={() =>
                                          updateSubscriptionQuantity(
                                            product.id,
                                            (subscriptionItem?.quantity || 1) -
                                              1
                                          )
                                        }
                                        className="w-6 h-6 flex items-center justify-center border rounded"
                                      >
                                        -
                                      </button>
                                      <span className="mx-2 text-sm">
                                        {subscriptionItem?.quantity || 1}
                                      </span>
                                      <button
                                        onClick={() =>
                                          updateSubscriptionQuantity(
                                            product.id,
                                            (subscriptionItem?.quantity || 1) +
                                              1
                                          )
                                        }
                                        className="w-6 h-6 flex items-center justify-center border rounded"
                                      >
                                        +
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        subscription.products.map((item) => (
                          <div
                            key={item.id}
                            className="p-3 rounded-md border border-gray-200 bg-gray-50"
                          >
                            <div className="flex items-start">
                              <div className="flex-shrink-0 h-10 w-10 rounded-md overflow-hidden">
                                <img
                                  src={
                                    products.retail.find(
                                      (p) => p.id === item.id
                                    )?.image || "https://via.placeholder.com/40"
                                  }
                                  alt={item.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="ml-3 flex-1">
                                <div className="flex justify-between">
                                  <label className="block text-sm font-medium text-gray-700">
                                    {item.name}
                                  </label>
                                  <span className="text-sm font-medium">
                                    GHC {item.price?.toFixed(2) || "0.00"}
                                  </span>
                                </div>
                                <div className="mt-2 flex items-center">
                                  <span className="text-sm text-gray-600 mr-2">
                                    Quantity:
                                  </span>
                                  <span className="mx-2 text-sm">
                                    {item.quantity}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowSubscriptionModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={saveSubscription}
                    disabled={subscription.products.length === 0}
                    className={`px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white ${
                      subscription.products.length === 0
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700"
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                  >
                    Save Subscription
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shop Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <img src={mobilemakola} alt="Mobile Makola" className="mb-4" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center px-4 py-2 rounded-full font-medium transition duration-200 ${getCategoryBgColor(
                  category.id
                )}`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Cart Button */}
      <div className="lg:hidden fixed right-4 top-24 z-40">
        <button
          onClick={() => setIsMobileCartOpen(!isMobileCartOpen)}
          className={`relative p-3 rounded-full ${getBtnColor()} text-white shadow-lg`}
        >
          <ShoppingCart className="w-6 h-6" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        {/* Products Section */}
        <div className="lg:w-3/4 lg:pr-8">
          <div className="flex flex-col md:flex-row items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-800 mr-auto">
              {categories.find((cat) => cat.id === activeCategory)?.name}
            </h2>

            {/* Subscription Button (only for retail) */}
            {activeCategory === "retail" && (
              <button
                onClick={() => setShowSubscriptionModal(true)}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                <RotateCw className="w-5 h-5 mr-2" />
                Create Subscription
              </button>
            )}

            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={`Search ${
                  activeCategory === "tools" ? "farm inputs..." : "products..."
                }`}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter Dropdown */}
            <div className="w-full md:w-auto">
              <select
                className="border-gray-300 rounded-md text-sm p-2 w-full"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              >
                <option value="">All Categories</option>
                {productCategories[activeCategory]?.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <Search className="mx-auto h-10 w-10 text-gray-400 mb-2" />
              <p className="text-gray-500">
                {searchQuery
                  ? `No products found for "${searchQuery}"`
                  : "No products available in this category"}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-2 text-blue-600 hover:text-blue-800"
                >
                  Clear search
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {/* <div
                      className={`absolute top-2 right-2 rounded-full px-2 py-1 text-xs font-medium ${getCategoryAccentColor(
                        activeCategory
                      )}`}
                    >
                      {product.unit}
                    </div> */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {product.name}
                    </h3>
                    {product.category && (
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mb-2">
                        {product.category}
                      </span>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">
GHC {product.price?.toFixed(2) || "0.00"}
                      </span>
                      <button
                        onClick={() => addToCart(product)}
                        className={`p-2 rounded-full ${getBtnColor()} text-white hover:opacity-90`}
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Cart Sidebar - Desktop (always visible) */}
        <div className="hidden lg:block lg:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
            <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b pb-3"
                    >
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-md object-cover mr-3"
                        />
                        <div>
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          <p className="text-xs text-gray-500">
                            GHC {item.price?.toFixed(2) || "0.00"} ×{" "}
                            {item.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-6 h-6 flex items-center justify-center border rounded"
                        >
                          -
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-6 h-6 flex items-center justify-center border rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Total:</span>
                    <span className="font-bold">
GHC {getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  <button
                    className={`w-full py-2 rounded-md ${getBtnColor()} text-white font-medium`}
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Mobile Cart Sidebar (only visible when toggled) */}
        {isMobileCartOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl">
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-lg font-semibold">Your Cart</h2>
                  <button
                    onClick={() => setIsMobileCartOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingCart className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                      <p className="text-gray-500">Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between border-b pb-3"
                        >
                          <div className="flex items-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded-md object-cover mr-3"
                            />
                            <div>
                              <h3 className="font-medium text-sm">
                                {item.name}
                              </h3>
                              <p className="text-xs text-gray-500">
                                GHC {item.price?.toFixed(2) || "0.00"} ×{" "}
                                {item.quantity}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-6 h-6 flex items-center justify-center border rounded"
                            >
                              -
                            </button>
                            <span className="text-sm">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-6 h-6 flex items-center justify-center border rounded"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {cartItems.length > 0 && (
                  <div className="p-4 border-t">
                    <div className="flex justify-between mb-4">
                      <span className="font-medium">Total:</span>
                      <span className="font-bold">
                        GHC {getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                    <button
                      className={`w-full py-2 rounded-md ${getBtnColor()} text-white font-medium`}
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
