import React from "react";
import { X, Plus, Minus } from "lucide-react";



const ProductCard = ({ 
  product, 
  onClose, 
  addToCart, 
  cartItems,
  updateCartQuantity 
}) => {
  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity" 
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal content */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Product image */}
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product details */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900">
                        GHC {product.price?.toFixed(2) || "0.00"}
                      </span>
                      {product.unit && (
                        <span className="ml-2 text-sm text-gray-500">
                          / {product.unit}
                        </span>
                      )}
                    </div>

                    {product.category && (
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {product.category}
                      </span>
                    )}

                    {product.description && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">Description</h4>
                        <p className="mt-1 text-sm text-gray-600">
                          {product.description}
                        </p>
                      </div>
                    )}

                    {product.details && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">Details</h4>
                        <p className="mt-1 text-sm text-gray-600">
                          {product.details}
                        </p>
                      </div>
                    )}

                    {product.storage && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">Storage Instructions</h4>
                        <p className="mt-1 text-sm text-gray-600">
                          {product.storage}
                        </p>
                      </div>
                    )}

                    {/* Quantity selector */}
                    <div className="mt-8">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => updateCartQuantity(product.id, Math.max(0, quantity - 1))}
                          disabled={quantity <= 0}
                          className={`p-2 rounded-full ${quantity <= 0 ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'}`}
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="text-lg font-medium">{quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(product.id, quantity + 1)}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Add to cart button */}
                    <button
                      onClick={() => {
                        if (quantity === 0) {
                          addToCart(product);
                        }
                      }}
                      className={`mt-6 w-full flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${quantity > 0 ? 'bg-green-700' : 'bg-green-600 hover:bg-green-700'} md:py-4 md:text-lg md:px-10`}
                    >
                      {quantity > 0 ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;