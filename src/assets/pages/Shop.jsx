import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Truck,
  Shovel,
  ShoppingBasketIcon,
  Search,
  Plus,
} from "lucide-react";
import mobilemakola from "../images/mobilemakola.png";
import ShopCart from "../components/Cart/ShopCart";
import WholesaleVendorModal from "../components/modals/WholesaleLogin";
import SubscriptionModal from "../components/modals/Subscription";
import AuthModal from "../components/modals/WholesaleLogin";
import ProductModal from "../components/modals/ProductModal";
import CartButton from "../components/cart/CartButton";

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

// const [subscriptionPackages, setSubscriptionPackages] = useState([]);
// const [isLoadingSubscriptions, setIsLoadingSubscriptions] = useState(false);
// const [subscriptionError, setSubscriptionError] = useState(null);

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

const Shop = () => {
  // State management
  const [activeCategory, setActiveCategory] = useState("retail");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Cart state
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const [showCart, setShowCart] = useState(false);
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);

  // Modals state
  const [authModal, setAuthModal] = useState({ show: false, type: "shopper" });
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [subscription, setSubscription] = useState({
    type: "custom",
    frequency: "weekly",
    deliveryDay: "Monday",
    products: [],
    selectedPackage: null,
  });

  // Products state
  const [products, setProducts] = useState({
    retail: [],
    wholesale: [],
    tools: [],
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products
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
              description:
                "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
              storage: "Store in cool dry place",
              details: "Naturally ripened",
              image:
                "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
            },
            {
              id: "prod2",
              name: "Fruits",
              category: "fruits",
              price: 3.49,
              unit: "lb",
              description:
                "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
              storage: "Store in cool dry place",
              details: "Naturally ripened",
              image:
                "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
            },
            {
              id: "prod3",
              name: "Grains",
              category: "grains",
              price: 4.99,
              unit: "bag",
              description:
                "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
              storage: "Store in cool dry place",
              details: "Naturally ripened",
              image:
                "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
            },
            {
              id: "prod4",
              name: "Dairy",
              category: "dairy",
              price: 3.99,
              unit: "unit",
              description:
                "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
              storage: "Store in cool dry place",
              details: "Naturally ripened",
              image:
                "https://images.unsplash.com/photo-1550583724-b2692b85b150",
            },
            {
              id: "prod5",
              name: " Vegetables",
              category: "vegetables",
              price: 3.99,
              unit: "lb",
              description:
                "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
              storage: "Store in cool dry place",
              details: "Naturally ripened",
              image:
                "https://images.unsplash.com/photo-1542838132-92c53300491e",
            },
            {
              id: "prod6",
              name: " Fruits",
              category: "fruits",
              price: 4.49,
              unit: "lb",
              description:
                "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
              storage: "Store in cool dry place",
              details: "Naturally ripened",
              image:
                "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
            },
            {
              id: "prod7",
              name: "Whole Grains",
              category: "grains",
              price: 5.99,
              unit: "bag",
              description:
                "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
              storage: "Store in cool dry place",
              details: "Naturally ripened",
              image:
                "https://images.unsplash.com/photo-1544025162-d76694265947",
            },
            {
              id: "prod8",
              name: "Plant-Based Dairy",
              category: "dairy",
              price: 4.49,
              unit: "unit",
              description:
                "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
              storage: "Store in cool dry place",
              details: "Naturally ripened",
              image:
                "https://images.unsplash.com/photo-1550583724-b2692b85b150",
            },
            {
              id: "prod9",
              name: "Pre-cut Vegetables",
              category: "vegetables",
              price: 3.49,
              unit: "pack",
              description:
                "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
              storage: "Store in cool dry place",
              details: "Naturally ripened",
              image:
                "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
            },
            {
              id: "prod10",
              name: "Meat",
              category: "meat",
              price: 6.99,
              unit: "lb",
              description:
                "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
              storage: "Store in cool dry place",
              details: "Naturally ripened",
              image:
                "https://images.unsplash.com/photo-1602476527208-9c2a66a0916f",
            },
            {
              id: "prod11",
              name: "Pasta",
              category: "grains",
              price: 2.99,
              unit: "box",
              description:
                "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
              storage: "Store in cool dry place",
              details: "Naturally ripened",
              image:
                "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
            },
            {
              id: "prod12",
              name: "Sauces",
              category: "grains",
              price: 3.49,
              unit: "jar",
              description:
                "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
              storage: "Store in cool dry place",
              details: "Naturally ripened",
              image:
                "https://images.unsplash.com/photo-1544025162-d76694265947",
            },
          ],
          wholesale: [],
          tools: [],
        };

        setProducts(mockProducts);
        setFilteredProducts(mockProducts.retail); // Set initial filtered products
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products[activeCategory] || []);
    } else {
      const filtered = (products[activeCategory] || []).filter((product) => {
        const matchesName = product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory = product.category
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesName || matchesCategory;
      });
      setFilteredProducts(filtered);
    }
  }, [searchQuery, activeCategory, products]);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Cart functions
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

  const updateCartQuantity = (productId, newQuantity) => {
    setCartItems((prev) =>
      newQuantity <= 0
        ? prev.filter((item) => item.id !== productId)
        : prev.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          )
    );
  };

  const toggleCart = () => {
    window.innerWidth < 1024
      ? setIsMobileCartOpen(!isMobileCartOpen)
      : setShowCart(!showCart);
  };

  // Category functions
  const handleCategoryChange = (categoryId) => {
    if (categoryId === "wholesale") {
      setAuthModal({ show: true, type: "wholesale" });
    } else {
      setActiveCategory(categoryId);
      setSearchQuery("");
    }
  };

  const getCategoryBgColor = (category) => {
    if (category !== activeCategory)
      return "bg-gray-100 text-gray-700 hover:bg-gray-200";

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

  // Auth functions
  const handleAuthSuccess = (userData) => {
    setAuthModal((prev) => ({ ...prev, show: false }));
    if (authModal.type === "wholesale") setActiveCategory("wholesale");
  };

  // Subscription functions
  const saveSubscription = () => {
    setShowSubscriptionModal(false);
    alert(
      `Your ${
        subscription.selectedPackage?.name || "custom"
      } subscription has been saved!`
    );
  };

  const [showWholesaleModal, setShowWholesaleModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [vendorDetails, setVendorDetails] = useState({
    email: "",
    password: "",
    businessName: "",
    phoneNumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint =
        userType === "wholesale" ? "/api/wholesale-auth" : "/api/shopper-auth";

      const response = await axios.post(endpoint, credentials);
      onSuccess(response.data);
    } catch (error) {
      // Handle error
    }
  };

  const handleWholesaleClick = () => {
    setAuthModal({ show: true, type: "wholesale" });
  };

  const triggerCheckoutLogin = () => {
    setAuthModal({ show: true, type: "shopper" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Wholesale Vendor Modal */}
      <WholesaleVendorModal
        showWholesaleModal={showWholesaleModal}
        setShowWholesaleModal={setShowWholesaleModal}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        vendorDetails={vendorDetails}
        setVendorDetails={setVendorDetails}
        handleSubmit={handleSubmit}
      />

      {/* Subscription Modal */}
      <SubscriptionModal
        showSubscriptionModal={showSubscriptionModal}
        setShowSubscriptionModal={setShowSubscriptionModal}
        subscription={subscription}
        setSubscription={setSubscription}
        filteredProducts={filteredProducts}
        products={products}
        subscriptionPackages={subscriptionPackages}
        frequencyOptions={frequencyOptions}
        dayOptions={dayOptions}
        saveSubscription={saveSubscription}
      />

      {/* Authentication Modal */}
      <AuthModal
        showModal={authModal.show}
        setShowModal={(show) => setAuthModal({ ...authModal, show })}
        userType={authModal.type}
        onSuccess={handleAuthSuccess}
      />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        {/* Products Section */}
        <div className={`${showCart ? "lg:w-3/4" : "w-full"} lg:pr-8`}>
          <div className="flex flex-col md:flex-row items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-800 mr-auto">
              {categories.find((cat) => cat.id === activeCategory)?.name}
            </h2>

            {/* Cart Toggle Button */}
            <CartButton
              itemCount={cartItems.length}
              onClick={() => setShowCart(true)}
            />

            {/* Subscription Button (only for retail) */}
            {activeCategory === "retail" && (
              <button
                onClick={() => setShowSubscriptionModal(true)}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                <ShoppingBasketIcon className="w-5 h-5 mr-2" />
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
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 h-full cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
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
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
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

        {/* Shopping Cart */}
        <ShopCart
          cartItems={cartItems}
          setCartItems={setCartItems}
          isMobileCartOpen={isMobileCartOpen}
          setIsMobileCartOpen={setIsMobileCartOpen}
          activeCategory={activeCategory}
          getBtnColor={getBtnColor}
          showCart={showCart}
          setShowCart={setShowCart}
          onCheckout={triggerCheckoutLogin}
        />
      </div>
    </div>
  );
};

export default Shop;