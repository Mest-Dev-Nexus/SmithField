// src/context/ProductContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
            // ... other products
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

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        searchQuery,
        setSearchQuery,
        isLoading,
        selectedProduct,
        setSelectedProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};