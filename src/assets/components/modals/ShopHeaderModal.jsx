const ShopHeaderModal = ({ 
    categories, 
    activeCategory, 
    handleCategoryChange, 
    getCategoryBgColor,
    onClose 
  }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Shop Categories</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    handleCategoryChange(category.id);
                    onClose();
                  }}
                  className={`flex items-center px-4 py-3 rounded-lg font-medium transition duration-200 ${getCategoryBgColor(
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
      </div>
    );
  };