import React from "react";
import { X, Plus, Minus, ShoppingCart, Info, Package } from "lucide-react";


const ProductModal = ({ product, onClose, addToCart }) => {
  const [quantity, setQuantity] = React.useState(1);

  console.log("Product data received:", product);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay with blur effect */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal container */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
          {/* Product image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden h-64 md:h-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product details */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {product.name}
              </h2>
              
              <div className="flex items-center mt-2">
                <span className="inline-block bg-gray-100 text-gray-800 text-xs md:text-sm px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
            </div>
            
            {/* Description */}
            <div className="text-sm md:text-base text-gray-600">
              {product.description || "No description available for this product."}
            </div>
            
            {/* Price */}
            <div className="py-2">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Price</h3>
              <p className="text-xl md:text-2xl font-bold text-gray-800">
                GHC {product.price?.toFixed(2) || "0.00"}
                <span className="text-xs md:text-sm font-normal text-gray-500 ml-1">
                  per {product.unit || "unit"}
                </span>
              </p>
            </div>
            
            {/* Product Details */}
            {product.details && (
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <Info className="w-4 h-4 mr-2 text-gray-600" />
                  <h3 className="text-sm font-medium text-gray-700">Product Details</h3>
                </div>
                <ul className="text-xs md:text-sm text-gray-600 space-y-1 list-disc list-inside">
                  {Array.isArray(product.details) ? (
                    product.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))
                  ) : (
                    <li>{product.details}</li>
                  )}
                </ul>
              </div>
            )}
            
            {/* Storage Information */}
            {product.storage && (
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <Package className="w-4 h-4 mr-2 text-gray-600" />
                  <h3 className="text-sm font-medium text-gray-700">Storage & Handling</h3>
                </div>
                <ul className="text-xs md:text-sm text-gray-600 space-y-1 list-disc list-inside">
                  {Array.isArray(product.storage) ? (
                    product.storage.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <li>{product.storage}</li>
                  )}
                </ul>
              </div>
            )}
            
            {/* Quantity selector */}
            <div className="pt-2">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Quantity</h3>
              <div className="flex items-center max-w-xs">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-2 rounded-l-md bg-gray-100 hover:bg-gray-200 text-gray-800"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="px-4 py-2 bg-gray-50 text-center w-full">
                  {quantity}
                </div>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-2 rounded-r-md bg-gray-100 hover:bg-gray-200 text-gray-800"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Add to cart button */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition mt-4"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span>Add to Cart - GHC {(product.price * quantity).toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;