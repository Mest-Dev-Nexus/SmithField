import { X } from "lucide-react";

const WholesaleLogin = ({
  showWholesaleModal,
  setShowWholesaleModal,
  isLogin,
  setIsLogin,
  vendorDetails,
  setVendorDetails,
  handleSubmit,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendorDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    showWholesaleModal && (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {isLogin
                    ? "Wholesale Shopper Login"
                    : "Wholesale Shopper Registration"}
                </h3>
                <button
                  onClick={() => setShowWholesaleModal(false)}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={vendorDetails.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={vendorDetails.password}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                {!isLogin && (
                  <>
                    <div className="mb-4">
                      <label
                        htmlFor="businessName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        id="businessName"
                        required
                        value={vendorDetails.businessName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        required
                        value={vendorDetails.phoneNumber}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    {isLogin
                      ? "Need to register as a vendor?"
                      : "Already have an account? Login"}
                  </button>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                  >
                    {isLogin ? "Login" : "Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default WholesaleLogin;