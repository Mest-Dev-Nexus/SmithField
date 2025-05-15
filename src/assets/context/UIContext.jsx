// src/context/UIContext.js
import React, { createContext, useState, useContext } from 'react';
import { ShoppingBag, Truck, Shovel } from "lucide-react";

const UIContext = createContext();

export const useUI = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("retail");

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

  const productCategories = {
    retail: ["fruits", "vegetables", "meat", "dairy", "grains"],
    wholesale: ["fruits", "vegetables", "meat", "dairy", "grains"],
    tools: ["fertilizers", "garden tools", "seeds", "irrigation", "pesticides"],
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

  return (
    <UIContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        categories,
        productCategories,
        getCategoryBgColor,
        getBtnColor
      }}
    >
      {children}
    </UIContext.Provider>
  );
};