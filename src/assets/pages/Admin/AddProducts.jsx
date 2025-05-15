import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Save, Upload, X } from "lucide-react";
import mobilemakola from "../../images/mobilemakola.png";

const AddProduct = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    category: "vegetables",
    price: "",
    unit: "lb",
    description: "",
    image: null,
    details: [""],
    storage: "",
    productType: "retail"
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image selection
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle removing image
  const handleRemoveImage = () => {
    setFormData({ ...formData, image: null });
    setImagePreview(null);
  };

  // Handle adding another detail field
  const handleAddDetail = () => {
    setFormData({
      ...formData,
      details: [...formData.details, ""]
    });
  };

  // Handle detail field changes
  const handleDetailChange = (index, value) => {
    const updatedDetails = [...formData.details];
    updatedDetails[index] = value;
    setFormData({
      ...formData,
      details: updatedDetails
    });
  };

  // Handle removing a detail field
  const handleRemoveDetail = (index) => {
    const updatedDetails = [...formData.details];
    updatedDetails.splice(index, 1);
    setFormData({
      ...formData,
      details: updatedDetails
    });
  };

  // Get category-specific colors (reused from SingleProduct)
  const getCategoryBgColor = (category) => {
    switch (category) {
      case "retail":
        return "bg-green-600";
      case "wholesale":
        return "bg-blue-600";
      case "tools":
        return "bg-amber-600";
      default:
        return "bg-green-600";
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Here you would normally send the form data to your API
      console.log("Submitting product:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success - redirect to product listing or show success message
      alert("Product added successfully!");
      navigate(-1);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => navigate(-1)} 
                className="mr-4"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <img src={mobilemakola} alt="Mobile Makola" className="h-8" />
            </div>
            <h1 className="text-lg font-bold">Add New Product</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="p-6">
              {/* Product Type Selection */}
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-3">Product Type</label>
                <div className="flex space-x-4">
                  {["retail", "wholesale", "farm inputs"].map((type) => (
                    <label 
                      key={type} 
                      className={`
                        flex items-center px-4 py-2 rounded-md border-2 cursor-pointer
                        ${formData.productType === type 
                          ? `border-${type === 'retail' ? 'green' : type === 'wholesale' ? 'blue' : 'amber'}-600 bg-${type === 'retail' ? 'green' : type === 'wholesale' ? 'blue' : 'amber'}-50` 
                          : 'border-gray-200'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name="productType"
                        value={type}
                        checked={formData.productType === type}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Image Upload */}
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-3">Product Image</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  {imagePreview ? (
                    <div className="relative">
                      <img 
                        src={imagePreview} 
                        alt="Product preview" 
                        className="w-full h-64 object-cover rounded-md"
                      />
                      <button 
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8">
                      <Upload className="w-12 h-12 text-gray-400 mb-3" />
                      <p className="text-gray-500 mb-2">Drag and drop an image or</p>
                      <label className={`px-4 py-2 rounded-md text-white font-medium ${getCategoryBgColor(formData.productType)} hover:opacity-90 cursor-pointer`}>
                        Browse Files
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageSelect}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Basic Info */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Basic Information</h2>
                
                <div className="space-y-6">
                  {/* Product Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Product Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter product name"
                    />
                  </div>

                  {/* Category & Unit */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                        Category*
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="grains">Grains</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="unit" className="block text-gray-700 font-medium mb-2">
                        Unit*
                      </label>
                      <select
                        id="unit"
                        name="unit"
                        value={formData.unit}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="lb">lb</option>
                        <option value="kg">kg</option>
                        <option value="pack">pack</option>
                        <option value="unit">unit</option>
                        <option value="bag">bag</option>
                        <option value="box">box</option>
                        <option value="jar">jar</option>
                      </select>
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                      Price (GHC)*
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      min="0.01"
                      step="0.01"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Product Details</h2>
                
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                      Description*
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="4"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Describe your product..."
                    ></textarea>
                  </div>

                  {/* Key Features/Details */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-gray-700 font-medium">
                        Key Features
                      </label>
                      <button
                        type="button"
                        onClick={handleAddDetail}
                        className={`text-sm px-3 py-1 rounded-md text-white font-medium ${getCategoryBgColor(formData.productType)}`}
                      >
                        Add Feature
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      {formData.details.map((detail, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="text"
                            value={detail}
                            onChange={(e) => handleDetailChange(index, e.target.value)}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder={`Feature ${index + 1}`}
                          />
                          {formData.details.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveDetail(index)}
                              className="ml-2 p-2 text-red-500 hover:text-red-600"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Storage Instructions */}
                  <div>
                    <label htmlFor="storage" className="block text-gray-700 font-medium mb-2">
                      Storage Instructions
                    </label>
                    <textarea
                      id="storage"
                      name="storage"
                      value={formData.storage}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="How should this product be stored?"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="border-t border-gray-200 pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="px-6 py-3 mr-4 rounded-md text-gray-600 font-medium border border-gray-300 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-3 rounded-md text-white font-medium ${getCategoryBgColor(formData.productType)} hover:opacity-90 transition flex items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5 mr-2" />
                      Save Product
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;