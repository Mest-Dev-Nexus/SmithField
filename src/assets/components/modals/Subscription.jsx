import {
    X,
    Check,
    Package,
    Calendar,
    RotateCw,
    ShoppingBag,
  } from "lucide-react";
  import { categories } from "../shop/SubscriptionPackages";

  const Subscription = ({
    showSubscriptionModal,
    setShowSubscriptionModal,
    subscription,
    setSubscription,
    filteredProducts,
    products,
    subscriptionPackages,
    frequencyOptions,
    dayOptions,
    saveSubscription,
    categories,
  }) => {
    // if (isLoading) {
    //   return (
    //     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    //       <div className="bg-white p-6 rounded-lg">
    //         <p>Loading subscription packages...</p>
    //       </div>
    //     </div>
    //   );
    // }
  
    // if (error) {
    //   return (
    //     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    //       <div className="bg-white p-6 rounded-lg">
    //         <p className="text-red-500">{error}</p>
    //         <button onClick={() => setShowSubscriptionModal(false)}>Close</button>
    //       </div>
    //     </div>
    //   );
    // }
  
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
  
    const getSubscriptionTotal = () => {
      if (subscription.type === "custom") {
        return subscription.products.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      } else if (subscription.selectedPackage) {
        let basePrice = subscription.selectedPackage.price;
        const discountPercentage =
          subscription.selectedPackage.frequencyDiscounts[subscription.frequency];
        return basePrice * (1 - discountPercentage / 100);
      }
      return 0;
    };
  
    return (
      showSubscriptionModal && (
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
      )
    );
  };
  
  export default Subscription;