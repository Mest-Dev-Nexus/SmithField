export const subscriptionPackages = [
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
        { id: "prod6", name: "Seasonal Fruits", quantity: 5, price: 4.49 },
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
  
  // Category definitions for the shop
  export const productCategories = {
    retail: ["fruits", "vegetables", "meat", "dairy", "grains"],
    wholesale: ["fruits", "vegetables", "meat", "dairy", "grains"],
    tools: ["fertilizers", "garden tools", "seeds", "irrigation", "pesticides"],
  };
  
  // UI components for categories with icons
  import React from "react";
  import { ShoppingBag, Truck, Shovel } from "lucide-react";
  
  export const categories = [
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
  
  // Subscription options
  export const frequencyOptions = [
    { value: "weekly", label: "Weekly" },
    { value: "biweekly", label: "Bi-weekly" },
    { value: "monthly", label: "Monthly" },
  ];
  
  export const dayOptions = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  // Mock product data
  export const mockProducts = {
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
        name: "Organic Vegetables",
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
        name: "Seasonal Fruits",
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