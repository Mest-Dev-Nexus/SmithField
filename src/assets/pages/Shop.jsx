// import React, { useState, useEffect } from "react";
// import {
//   ShoppingBag,
//   Truck,
//   Shovel,
//   ShoppingBasketIcon,
//   Search,
//   Plus,
//   X,
// } from "lucide-react";
// import mobilemakola from "../images/mobilemakola.png";
// import ShopCart from "../components/Cart/ShopCart";
// import SubscriptionModal from "../components/modals/Subscription";
// import ProductModal from "../components/modals/ProductModal";
// import { useCart } from "../context/CartContext";
// import { apiGetAllProducts } from "../services/products";

// // Subscription packages data
// const subscriptionPackages = [
//   {
//     id: "family-essentials",
//     name: "Family Essentials",
//     description:
//       "Perfect for a family of 4, includes staple foods and fresh produce",
//     price: 99.99,
//     frequencyDiscounts: {
//       weekly: 0,
//       biweekly: 5,
//       monthly: 10,
//     },
//     products: [
//       { id: "prod1", name: "Fresh Vegetables", quantity: 5, price: 2.99 },
//       { id: "prod2", name: "Fruits", quantity: 4, price: 3.49 },
//       { id: "prod3", name: "Grains", quantity: 3, price: 4.99 },
//       { id: "prod4", name: "Dairy", quantity: 2, price: 3.99 },
//     ],
//     image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
//   },
//   {
//     id: "healthy-living",
//     name: "Healthy Living",
//     description: " and health-focused items for conscious consumers",
//     price: 129.99,
//     frequencyDiscounts: {
//       weekly: 0,
//       biweekly: 7,
//       monthly: 15,
//     },
//     products: [
//       { id: "prod5", name: " Vegetables", quantity: 6, price: 3.99 },
//       { id: "prod6", name: " Fruits", quantity: 5, price: 4.49 },
//       { id: "prod7", name: "Whole Grains", quantity: 2, price: 5.99 },
//       { id: "prod8", name: "Plant-Based Dairy", quantity: 3, price: 4.49 },
//     ],
//     image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
//   },
//   {
//     id: "quick-meals",
//     name: "Quick Meals",
//     description: "Everything you need for easy weeknight dinners",
//     price: 89.99,
//     frequencyDiscounts: {
//       weekly: 0,
//       biweekly: 5,
//       monthly: 8,
//     },
//     products: [
//       { id: "prod9", name: "Pre-cut Vegetables", quantity: 4, price: 3.49 },
//       { id: "prod10", name: "Meat", quantity: 3, price: 6.99 },
//       { id: "prod11", name: "Pasta", quantity: 2, price: 2.99 },
//       { id: "prod12", name: "Sauces", quantity: 2, price: 3.49 },
//     ],
//     image: "https://images.unsplash.com/photo-1544025162-d76694265947",
//   },
// ];

// const productCategories = {
//   retail: ["fruits", "vegetables", "meat", "dairy", "grains"],
//   wholesale: ["fruits", "vegetables", "meat", "dairy", "grains"],
//   tools: ["fertilizers", "garden tools", "seeds", "irrigation", "pesticides"],
// };

// const categories = [
//   {
//     id: "retail",
//     name: "Retail",
//     icon: <ShoppingBag className="w-5 h-5 mr-2" />,
//   },
//   {
//     id: "wholesale",
//     name: "Wholesale",
//     icon: <Truck className="w-5 h-5 mr-2" />,
//   },
//   {
//     id: "tools",
//     name: "Farm Inputs",
//     icon: <Shovel className="w-5 h-5 mr-2" />,
//   },
// ];

// const frequencyOptions = [
//   { value: "weekly", label: "Weekly" },
//   { value: "biweekly", label: "Bi-weekly" },
//   { value: "monthly", label: "Monthly" },
// ];

// const dayOptions = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// const Shop = () => {
//   const { cartItems, addToCart, updateCartQuantity, cartCount, isCartOpen } =
//     useCart();

//   // State management
//   const [activeCategory, setActiveCategory] = useState("retail");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showCart, setShowCart] = useState(false);
//   const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");

//   // Subscription state
//   const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
//   const [subscription, setSubscription] = useState({
//     type: "custom",
//     frequency: "weekly",
//     deliveryDay: "Monday",
//     products: [],
//     selectedPackage: null,
//   });

//   // Products state
//   const [products, setProducts] = useState({
//     retail: [],
//     wholesale: [],
//     tools: [],
//   });
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   // Fetch products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // Mock products data
//         // const mockProducts = {
//         //   retail: [
//         //     {
//         //       id: "prod1",
//         //       name: "Fresh Vegetables",
//         //       category: "vegetables",
//         //       price: 2.99,
//         //       unit: "lb",
//         //       description:
//         //         "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
//         //       storage: "Store in cool dry place",
//         //       details: "Naturally ripened",
//         //       image:
//         //         "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
//         //     },
//         //     {
//         //       id: "prod2",
//         //       name: "Fruits",
//         //       category: "fruits",
//         //       price: 3.49,
//         //       unit: "lb",
//         //       description:
//         //         "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
//         //       storage: "Store in cool dry place",
//         //       details: "Naturally ripened",
//         //       image:
//         //         "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
//         //     },
//         //     {
//         //       id: "prod3",
//         //       name: "Grains",
//         //       category: "grains",
//         //       price: 4.99,
//         //       unit: "bag",
//         //       description:
//         //         "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
//         //       storage: "Store in cool dry place",
//         //       details: "Naturally ripened",
//         //       image:
//         //         "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
//         //     },
//         //     {
//         //       id: "prod4",
//         //       name: "Dairy",
//         //       category: "dairy",
//         //       price: 3.99,
//         //       unit: "unit",
//         //       description:
//         //         "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
//         //       storage: "Store in cool dry place",
//         //       details: "Naturally ripened",
//         //       image:
//         //         "https://images.unsplash.com/photo-1550583724-b2692b85b150",
//         //     },
//         //     {
//         //       id: "prod5",
//         //       name: "Organic Vegetables",
//         //       category: "vegetables",
//         //       price: 3.99,
//         //       unit: "lb",
//         //       description:
//         //         "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
//         //       storage: "Store in cool dry place",
//         //       details: "Naturally ripened",
//         //       image:
//         //         "https://images.unsplash.com/photo-1542838132-92c53300491e",
//         //     },
//         //     {
//         //       id: "prod6",
//         //       name: "Seasonal Fruits",
//         //       category: "fruits",
//         //       price: 4.49,
//         //       unit: "lb",
//         //       description:
//         //         "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
//         //       storage: "Store in cool dry place",
//         //       details: "Naturally ripened",
//         //       image:
//         //         "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
//         //     },
//         //     {
//         //       id: "prod7",
//         //       name: "Whole Grains",
//         //       category: "grains",
//         //       price: 5.99,
//         //       unit: "bag",
//         //       description:
//         //         "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
//         //       storage: "Store in cool dry place",
//         //       details: "Naturally ripened",
//         //       image:
//         //         "https://images.unsplash.com/photo-1544025162-d76694265947",
//         //     },
//         //     {
//         //       id: "prod8",
//         //       name: "Plant-Based Dairy",
//         //       category: "dairy",
//         //       price: 4.49,
//         //       unit: "unit",
//         //       description:
//         //         "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
//         //       storage: "Store in cool dry place",
//         //       details: "Naturally ripened",
//         //       image:
//         //         "https://images.unsplash.com/photo-1550583724-b2692b85b150",
//         //     },
//         //     {
//         //       id: "prod9",
//         //       name: "Pre-cut Vegetables",
//         //       category: "vegetables",
//         //       price: 3.49,
//         //       unit: "pack",
//         //       description:
//         //         "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
//         //       storage: "Store in cool dry place",
//         //       details: "Naturally ripened",
//         //       image:
//         //         "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
//         //     },
//         //     {
//         //       id: "prod10",
//         //       name: "Meat",
//         //       category: "meat",
//         //       price: 6.99,
//         //       unit: "lb",
//         //       description:
//         //         "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
//         //       storage: "Store in cool dry place",
//         //       details: "Naturally ripened",
//         //       image:
//         //         "https://images.unsplash.com/photo-1602476527208-9c2a66a0916f",
//         //     },
//         //     {
//         //       id: "prod11",
//         //       name: "Pasta",
//         //       category: "grains",
//         //       price: 2.99,
//         //       unit: "box",
//         //       description:
//         //         "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
//         //       storage: "Store in cool dry place",
//         //       details: "Naturally ripened",
//         //       image:
//         //         "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
//         //     },
//         //     {
//         //       id: "prod12",
//         //       name: "Sauces",
//         //       category: "grains",
//         //       price: 3.49,
//         //       unit: "jar",
//         //       description:
//         //         "Locally sourced, organic vegetables harvested at peak ripeness for maximum flavor and nutrition.",
//         //       storage: "Store in cool dry place",
//         //       details: "Naturally ripened",
//         //       image:
//         //         "https://images.unsplash.com/photo-1544025162-d76694265947",
//         //     },
//         //   ],
//         //   wholesale: [
//         //     // Add your wholesale products here (no login required)
//         //     {
//         //       id: "w-prod1",
//         //       name: "Wholesale Vegetables",
//         //       category: "vegetables",
//         //       price: 1.99, // wholesale price
//         //       unit: "case",
//         //       description: "Wholesale vegetables",
//         //       image:
//         //         "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
//         //     },
//         //     {
//         //       id: "w-prod2",
//         //       name: "Bulk Grains",
//         //       category: "grains",
//         //       price: 15.0,
//         //       unit: "50kg bag",
//         //       description:
//         //         "Large quantity of high-quality grains for bulk purchase.",
//         //       image:
//         //         "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
//         //     },
//         //   ],
//         //   tools: [
//         //     {
//         //       id: "t-prod1",
//         //       name: "Garden Shovel",
//         //       category: "garden tools",
//         //       price: 12.5,
//         //       unit: "piece",
//         //       description: "Durable garden shovel for all your digging needs.",
//         //       image:
//         //         "https://images.unsplash.com/photo-1533035345-a74e9e048187", // Placeholder image
//         //     },
//         //     {
//         //       id: "t-prod2",
//         //       name: "Organic Fertilizer",
//         //       category: "fertilizers",
//         //       price: 25.0,
//         //       unit: "bag",
//         //       description: "Eco-friendly fertilizer for healthy plant growth.",
//         //       image:
//         //         "https://images.unsplash.com/photo-1598007797072-001d8f8a1e3b", // Placeholder image
//         //     },
//         //   ],
//         // };
// const data = await apiGetAllProducts()
// console.log(data)
//         setProducts(data.data);
//         // setFilteredProducts(mockProducts[activeCategory] || []);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Filter products
//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       setFilteredProducts(products[activeCategory] || []);
//     } else {
//       const filtered = (products[activeCategory] || []).filter((product) => {
//         const matchesName = product.name
//           .toLowerCase()
//           .includes(searchQuery.toLowerCase());
//         const matchesCategory = product.category
//           ?.toLowerCase()
//           .includes(searchQuery.toLowerCase());
//         return matchesName || matchesCategory;
//       });
//       setFilteredProducts(filtered);
//     }
//   }, [searchQuery, activeCategory, products]);

//   // Category functions
//   const handleCategoryChange = (categoryId) => {
//     setActiveCategory(categoryId);
//     setSearchQuery("");
//   };

//   const getCategoryBgColor = (category) => {
//     if (category !== activeCategory)
//       return "bg-gray-100 text-gray-700 hover:bg-gray-200";

//     switch (category) {
//       case "retail":
//         return "bg-green-600 text-white";
//       case "wholesale":
//         return "bg-blue-600 text-white";
//       case "tools":
//         return "bg-amber-600 text-white";
//       default:
//         return "bg-green-600 text-white";
//     }
//   };

//   const getBtnColor = () => {
//     switch (activeCategory) {
//       case "retail":
//         return "bg-green-600 hover:bg-green-700";
//       case "wholesale":
//         return "bg-blue-600 hover:bg-blue-700";
//       case "tools":
//         return "bg-amber-600 hover:bg-amber-700";
//       default:
//         return "bg-green-600 hover:bg-green-700";
//     }
//   };

//   // Subscription functions
//   const saveSubscription = () => {
//     setShowSubscriptionModal(false);
//     setToastMessage(
//       `Your ${
//         subscription.selectedPackage?.name || "custom"
//       } subscription has been saved!`
//     );
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);
//   };

//   const handlePlaceOrder = () => {
//     if (cartItems.length === 0) {
//       setToastMessage("Your cart is empty. Add items before placing an order.");
//       setShowToast(true);
//       setTimeout(() => setShowToast(false), 3000);
//       return;
//     }

//     console.log("Placing order for:", cartItems);
//     // In a real application, this is where you would:
//     // 1. Send the `cartItems` data to your backend API (e.g., using fetch or axios).
//     // 2. Handle payment processing (e.g., redirect to a payment gateway).
//     // 3. Upon successful order, clear the cart.
//     // 4. Display a success message or redirect to an order confirmation page.

//     setToastMessage("Order placed successfully!");
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);

//     clearCart(); // Clear the cart from CartContext after order is "placed"
//     setShowCart(false); // Close the cart sidebar
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Subscription Modal */}
//       <SubscriptionModal
//         showSubscriptionModal={showSubscriptionModal}
//         setShowSubscriptionModal={setShowSubscriptionModal}
//         subscription={subscription}
//         setSubscription={setSubscription}
//         filteredProducts={filteredProducts}
//         products={products}
//         subscriptionPackages={subscriptionPackages}
//         frequencyOptions={frequencyOptions}
//         dayOptions={dayOptions}
//         saveSubscription={saveSubscription}
//       />

//       {/* Product Modal */}
//       {selectedProduct && (
//         <ProductModal
//           product={selectedProduct}
//           onClose={() => setSelectedProduct(null)}
//           addToCart={addToCart}
//         />
//       )}

//       {/* Shop Header */}
//       <div className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-8">
//           <img src={mobilemakola} alt="Mobile Makola" className="mb-4" />
//           <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
//             <div className="flex flex-wrap gap-2 flex-1">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => handleCategoryChange(category.id)}
//                   className={`flex items-center px-4 py-2 rounded-full font-medium transition duration-200 ${getCategoryBgColor(
//                     category.id
//                   )}`}
//                 >
//                   {category.icon}
//                   {category.name}
//                 </button>
//               ))}
//             </div>

//             {/* Subscription Button (only for retail) */}
//             {activeCategory === "retail" && (
//               <button
//                 onClick={() => setShowSubscriptionModal(true)}
//                 className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition whitespace-nowrap"
//               >
//                 <ShoppingBasketIcon className="w-5 h-5 mr-2" />
//                 Create Subscription
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
//         {/* Products Section */}
//         <div className={`${showCart ? "lg:w-3/4" : "w-full"} lg:pr-8`}>
//           <div className="flex flex-col md:flex-row items-center mb-8 gap-4">
//             <h2 className="text-2xl font-bold text-gray-800 mr-auto">
//               {categories.find((cat) => cat.id === activeCategory)?.name}
//             </h2>

//             {/* Search Bar */}
//             <div className="relative w-full md:w-64">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder={`Search ${
//                   activeCategory === "tools" ? "farm inputs..." : "products..."
//                 }`}
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>

//             {/* Category Filter Dropdown */}
//             <div className="w-full md:w-auto">
//               <select
//                 className="border-gray-300 rounded-md text-sm p-2 w-full"
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 value={searchQuery}
//               >
//                 <option value="">All Categories</option>
//                 {productCategories[activeCategory]?.map((category) => (
//                   <option key={category} value={category}>
//                     {category.charAt(0).toUpperCase() + category.slice(1)}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {isLoading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//             </div>
//           ) : filteredProducts.length === 0 ? (
//             <div className="text-center py-12">
//               <Search className="mx-auto h-10 w-10 text-gray-400 mb-2" />
//               <p className="text-gray-500">
//                 {searchQuery
//                   ? `No products found for "${searchQuery}"`
//                   : "No products available in this category"}
//               </p>
//               {searchQuery && (
//                 <button
//                   onClick={() => setSearchQuery("")}
//                   className="mt-2 text-blue-600 hover:text-blue-800"
//                 >
//                   Clear search
//                 </button>
//               )}
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 h-full cursor-pointer hover:shadow-lg transition-shadow"
//                   onClick={() => setSelectedProduct(product)}
//                 >
//                   <div className="relative">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-48 object-cover"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold mb-1">
//                       {product.name}
//                     </h3>
//                     {product.category && (
//                       <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mb-2">
//                         {product.category}
//                       </span>
//                     )}
//                     <div className="flex items-center justify-between">
//                       <span className="text-lg font-bold">
//                         GHC {product.price?.toFixed(2) || "0.00"}
//                       </span>
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           addToCart(product);
//                           setToastMessage(`${product.name} added to cart!`);
//                           setShowToast(true);
//                           setTimeout(() => setShowToast(false), 3000);
//                         }}
//                         className={`p-2 rounded-full ${getBtnColor()} text-white hover:opacity-90`}
//                       >
//                         <Plus className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;

import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Truck,
  Shovel,
  ShoppingBasketIcon,
  Search,
  Plus,
  X,
  Loader2,
  AlertCircle,
} from "lucide-react";
import mobilemakola from "../images/mobilemakola.png";
import ShopCart from "../components/Cart/ShopCart";
import SubscriptionModal from "../components/modals/Subscription";
import ProductModal from "../components/modals/ProductModal";
import { useCart } from "../context/CartContext";
import { apiGetAllProducts } from "../services/products";
import triggervalve from "../images/trigger valve.jpg";
import lance from "../images/lance extention.jpg";
import sphere from "../images/sphere.jpg";
import jactopm30 from "../images/jacto pm30.jpg";
import jactogm3 from "../images/jacto gm3.jpg";
import jactopm10 from "../images/jacto pm10.jpg";
import jactohh5 from "../images/jacto hh5.jpg";
import jactohh15 from "../images/jacto hh1.5.jpg";
import jactodjb from "../images/jacto djb.jpg";
import redonion from "../images/red onion.jpg";
import tomato from "../images/tomato.jpg";
import watermelon from "../images/watermelon.jpg";
import amco301010 from "../images/amco 301010.jpg";
import amco121236 from "../images/amco 121236.jpg";
import amco191919 from "../images/amco 191919.jpg";
import councilactiv from "../images/council activ.jpg";
import beltexpert from "../images/belt expert.jpg";
import nutrel24 from "../images/nutrel 24.jpg";
import specf1 from "../images/spec f1.jpg";
import hotpepper from "../images/hot pepper.jpg";

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
    description: "Organic and health-focused items for conscious consumers",
    price: 129.99,
    frequencyDiscounts: {
      weekly: 0,
      biweekly: 7,
      monthly: 15,
    },
    products: [
      { id: "prod5", name: "Organic Vegetables", quantity: 6, price: 3.99 },
      { id: "prod6", name: "Organic Fruits", quantity: 5, price: 4.49 },
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

const categories = [
  {
    id: "retail",
    name: "Retail",
    icon: <ShoppingBag className="w-1.5h-5 mr-2" />,
    shopType: "retail",
  },
  {
    id: "wholesale",
    name: "Wholesale",
    icon: <Truck className="w-5 h-5 mr-2" />,
    shopType: "wholesale",
  },
  {
    id: "farm-input",
    name: "Farm Inputs",
    icon: <Shovel className="w-5 h-5 mr-2" />,
    shopType: "farm-input",
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

const farmInputProducts = [
  {
    id: "farm-1",
    name: "Trigger Valve Assembly LP-3 - XP16, HD400 ",
    description: "",
    price: 100.0,
    shopType: "farm-input",
    image: triggervalve,
    quantity: 50,
    availability: true,
  },
  {
    id: "farm-2",
    name: "Lance Extention",
    description: "All jacto sprayers",
    price: 220.0,
    shopType: "farm-input",
    image: lance,
    quantity: 30,
    availability: true,
  },
  {
    id: "farm-3",
    name: "Stainless Steel Sphere",
    description: "7/16 - XP16",
    price: 180.0,
    shopType: "farm-input",
    image: sphere,
    quantity: 15,
    availability: true,
  },
  {
    id: "farm-4",
    name: "Jacto PM-30",
    description: "",
    price: 120.0,
    shopType: "farm-input",
    image: jactopm30,
    quantity: 40,
    availability: true,
  },
  {
    id: "farm-5",
    name: "Jacto GM - 3",
    description: "Pruning Lopper",
    price: 85.0,
    shopType: "farm-input",
    image: jactogm3,
    quantity: 25,
    availability: true,
  },
  {
    id: "farm-6",
    name: "Jacto PM - 10",
    description: "Picking and Trimming Snip",
    price: 45.0,
    shopType: "farm-input",
    image: jactopm10,
    quantity: 20,
    availability: true,
  },
  {
    id: "farm-7",
    name: "Jacto HH - 5",
    description: "Manual portable sprayer. Tank capacity: 5L",
    price: 65.0,
    shopType: "farm-input",
    image: jactohh5,
    quantity: 18,
    availability: true,
  },
  {
    id: "farm-8",
    name: "Jacto HH - 1.5",
    description: "Manual Portable Sprayer. Tank capacity: 1.5L",
    price: 75.0,
    shopType: "farm-input",
    image: jactohh15,
    quantity: 12,
    availability: true,
  },
  {
    id: "farm-9",
    name: "Jacto DJB -16",
    description:
      "Dual purpose re-chargable battery sprayer.Doser and sprayer. Exclusive timer system that applies from 5- to 300-ml dosages with precision and speed. Easy, practical and precise. With a battery charge. ",
    price: 55.0,
    shopType: "farm-input",
    image: jactodjb,
    quantity: 10,
    availability: true,
  },
  {
    id: "farm-10",
    name: "Red Onion Seeds",
    description: "Treated seeds. Available in 100gr & 500gr",
    price: 450.0,
    shopType: "farm-input",
    image: redonion,
    quantity: 8,
    availability: true,
  },
  {
    id: "farm-11",
    name: "Tomato Seeds",
    description: "Open Field Tomato Origin: Proseed - Holland. Size: 100g",
    price: 25.0,
    shopType: "farm-input",
    image: tomato,
    quantity: 35,
    availability: true,
  },
  {
    id: "farm-12",
    name: "Watermelon Seeds",
    description: "Origin: Proseed - Holland Size: 100g",
    price: 30.0,
    shopType: "farm-input",
    image: watermelon,
    quantity: 60,
    availability: true,
  },
  {
    id: "farm-13",
    name: "Amcolon 30-10-10 +TE",
    description:
      "Soluble high nitrogen NPK with micro elements for fertigation, foliar spray and topdressing. Origin: MCFP- Jordan Packing: 100gr, 1kg, 25kg",
    price: 15.0,
    shopType: "farm-input",
    image: amco301010,
    quantity: 45,
    availability: true,
  },
  {
    id: "farm-14",
    name: "Amcolon 12-12-36 +TE",
    description:
      " Soluble high potassium NPK with micro elements for fertigation, foliar spray and topdressing Origin: MCFP- Jordan Packing: 100gr, 1kg, 25kg",
    price: 120.0,
    shopType: "farm-input",
    image: amco121236,
    quantity: 5,
    availability: true,
  },
  {
    id: "farm-15",
    name: "Amcolon 19-19-19 +TE",
    description:
      "Soluble balanced NPK with micro elements for fertigation, foliar spray and topdressing Origin: MCFP- Jordan Packing: 100gr, 1kg, 25kg",
    price: 280.0,
    shopType: "farm-input",
    image: amco191919,
    quantity: 7,
    availability: true,
  },
  {
    id: "farm-16",
    name: "Council Activ 30 WG",
    description:
      "Early post emergence herbicide for Rice. Active Ingredients: Ethoxysulfuron (10%), Triafamone (30%). Dose/Acre: 50gr By: Bayer Cropscience. Pack size: 10gr",
    price: 95.0,
    shopType: "farm-input",
    image: councilactiv,
    quantity: 9,
    availability: true,
  },
  {
    id: "farm-17",
    name: "Belt Expert 480SC",
    description:
      "The expert insecticide for the control of Fall Armyworms, Diamond Back Moth, Tuta Absoluta, caterpillars and Fruit Borers with a very low dose Active Ingredient Flubendiamide 24% + Thiacloprid 24% SC Origin: Bayer Cropscience - Germany Packing: 100ml",
    price: 18.0,
    shopType: "farm-input",
    image: beltexpert,
    quantity: 80,
    availability: true,
  },
  {
    id: "farm-18",
    name: "Nutrel 24",
    description:
      " Fruitflies attractant (Protein Bait) for the control of fruitflies in tree crops, such as Mangoes and Citrus. Suitable for both Organic and conventional farming. Used in mix with Leopard as insect killer in Traps or spot spraying. Active Ingredient: Amino acids and peptides 24% Origin: SICIT - Italy Available in 5L",
    price: 40.0,
    shopType: "farm-input",
    image: nutrel24,
    quantity: 15,
    availability: true,
  },
  {
    id: "farm-19",
    name: "Spectacular F1",
    description:
      " Mediterranean cucumber with good plant vigor and crunchy taste. Origin: Agrimatco - Jordan. Packing: 500seeds",
    price: 320.0,
    shopType: "farm-input",
    image: specf1,
    quantity: 6,
    availability: true,
  },
  {
    id: "farm-20",
    name: "Hot Pepper",
    description:
      " Hybrid chili 🌶️ pepper seeds. Strong, semi-erect plant habit. Excellent re-flushing character. Red Dry color value {80-90 ASTA) & Medium Pungent (35000-40000 SHU). Early with very high red dry yielding capacity. Smooth and Good drying quality. Red Dry value (90 ASTA) & Medium Pungent (40000 SHU)Very good FVT with Drought tolerance. Origin: Syngenta. Packing: 1000 seeds",
    price: 50.0,
    shopType: "farm-input",
    image: hotpepper,
    quantity: 22,
    availability: true,
  },
];

const Shop = () => {
  const { cartItems, addToCart, clearCart } = useCart();

  // State management
  const [activeCategory, setActiveCategory] = useState("retail");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [error, setError] = useState(null);

  // Subscription state
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [subscription, setSubscription] = useState({
    type: "custom",
    frequency: "weekly",
    deliveryDay: "Monday",
    products: [],
    selectedPackage: null,
  });

  // Products state
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Helper function to construct full image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return mobilemakola;

    // If it's already a full URL, return as is
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }

    // If it's a local image path (starts with /images), return as is
    if (imagePath.startsWith("/images")) {
      return imagePath;
    }

    // If it's a relative path from API, construct the full URL
    const baseUrl = "https://feat-smithfieldbackend.onrender.com";
    return `${baseUrl}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
  };

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // For farm-input category, use the dummy data
        if (activeCategory === "farm-input") {
          setProducts(farmInputProducts);
          setIsLoading(false);
          return;
        }

        // For other categories, fetch from API
        const response = await apiGetAllProducts();

        if (response && response.data) {
          const apiProducts = Array.isArray(response.data) ? response.data : [];

          const transformedProducts = apiProducts.map((product) => ({
            id: product._id || product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            price: parseFloat(product.price || 0),
            shopType: product.shopType,
            image: getImageUrl(product.image),
            quantity: product.quantity || 0,
            availability: product.availability,
          }));

          setProducts(transformedProducts);
        } else {
          throw new Error("Invalid response structure from API");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message || "Failed to fetch products");
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [activeCategory]);

  // Filter products by category and search
  useEffect(() => {
    let filtered = products.filter((product) => {
      // Filter by shopType matching active category
      const categoryMatch = product.shopType === activeCategory;

      // Filter by availability
      const availabilityMatch = product.availability === true;

      // Filter by search query
      const searchMatch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && availabilityMatch && searchMatch;
    });

    setFilteredProducts(filtered);
  }, [products, activeCategory, searchQuery]);

  // Category functions
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchQuery("");
  };

  const getCategoryBgColor = (category) => {
    if (category !== activeCategory)
      return "bg-gray-100 text-gray-700 hover:bg-gray-200";

    switch (category) {
      case "retail":
        return "bg-green-600 text-white";
      case "wholesale":
        return "bg-blue-600 text-white";
      case "farm-input":
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
      case "farm-input":
        return "bg-amber-600 hover:bg-amber-700";
      default:
        return "bg-green-600 hover:bg-green-700";
    }
  };

  // Subscription functions
  const saveSubscription = () => {
    setShowSubscriptionModal(false);
    setToastMessage(
      `Your ${
        subscription.selectedPackage?.name || "custom"
      } subscription has been saved!`
    );
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      setToastMessage("Your cart is empty. Add items before placing an order.");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    setToastMessage("Order placed successfully!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    clearCart();
    setShowCart(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-down">
          <div className="flex items-center">
            <span>{toastMessage}</span>
            <button
              onClick={() => setShowToast(false)}
              className="ml-4 text-white hover:text-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-down">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span>{error}</span>
            <button
              onClick={() => setError(null)}
              className="ml-4 text-white hover:text-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

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

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}

      {/* Shop Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <img src={mobilemakola} alt="Mobile Makola" className="h-10" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex flex-wrap gap-2 flex-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-200 ${getCategoryBgColor(
                    category.id
                  )} shadow-sm hover:shadow-md`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

            {/* Subscription Button (only for retail) */}
            {activeCategory === "retail" && (
              <button
                onClick={() => setShowSubscriptionModal(true)}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-md hover:from-green-700 hover:to-green-800 transition-all whitespace-nowrap shadow-sm hover:shadow-md"
              >
                <ShoppingBasketIcon className="w-5 h-5 mr-2" />
                Create Subscription
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Products Section Header */}
        <div className="flex flex-col md:flex-row items-center mb-8 gap-4">
          <div className="flex items-center mr-auto">
            <h2 className="text-2xl font-bold text-gray-800">
              {categories.find((cat) => cat.id === activeCategory)?.name}
            </h2>
            {filteredProducts.length > 0 && !isLoading && !error && (
              <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                {filteredProducts.length} items
              </span>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={`Search ${
                activeCategory === "farm-input"
                  ? "farm inputs..."
                  : "products..."
              }`}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Content Area */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin h-12 w-12 text-blue-500" />
            <p className="ml-4 text-gray-600">Loading products...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto">
            <div className="text-red-500 mb-4">
              <AlertCircle className="mx-auto h-10 w-10 mb-2" />
              <p className="text-lg font-semibold">Failed to load products</p>
              <p className="text-sm text-gray-600">{error}</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto">
            <Search className="mx-auto h-10 w-10 text-gray-400 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              {searchQuery
                ? `No products found for "${searchQuery}"`
                : "No products available"}
            </h3>
            <p className="text-gray-500 mb-4">
              {searchQuery
                ? "Try different search terms"
                : "Check back later for new inventory"}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="mt-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = mobilemakola;
                    }}
                  />
                  {product.quantity <= 10 && product.quantity > 0 && (
                    <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Low Stock
                    </div>
                  )}
                  {product.quantity === 0 && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 text-gray-800 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2 h-10">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-gray-800">
                      GHC {product.price?.toFixed(2) || "0.00"}
                    </span>
                    <span
                      className={`text-sm ${
                        product.quantity > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {product.quantity > 0
                        ? `${product.quantity} available`
                        : "Sold out"}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                      setToastMessage(`${product.name} added to cart!`);
                      setShowToast(true);
                      setTimeout(() => setShowToast(false), 3000);
                    }}
                    disabled={product.quantity === 0}
                    className={`w-full p-2 rounded-md ${getBtnColor()} text-white hover:opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center transition-colors`}
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    {product.quantity === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
