// src/components/Shop/ProductGrid.js
import React from 'react';
import { Plus, Search } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import { useCart } from '../../context/CartContext';
import { useUI } from '../../context/UIContext';

const ProductGrid = () => {
  const { filteredProducts, isLoading, searchQuery, setSearchQuery, setSelectedProduct } = useProducts();
  const { addToCart } = useCart();
  const { getBtnColor } = useUI();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
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
    );
  }

  return (
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
  );
};

export default ProductGrid;