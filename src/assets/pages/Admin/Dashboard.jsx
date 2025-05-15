import React, { useState, useEffect } from "react";
import {
  BarChart3,
  Users,
  ShoppingBag,
  Package,
  DollarSign,
  X,
  PlusCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/AdminSide";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalSales: 0,
    newOrders: 0,
    registeredUsers: 0,
    inventoryItems: 0,
  });

  useEffect(() => {
    setOrders([
      { id: 1, customer: "Emmanuel Osei", date: "2023-06-15", amount: 249.99, status: "completed", items: 5 },
      { id: 2, customer: "Amina Kofie", date: "2023-06-14", amount: 189.5, status: "shipped", items: 3 },
      { id: 3, customer: "Daniel Mensah", date: "2023-06-14", amount: 320, status: "processing", items: 8 },
      { id: 4, customer: "Grace Ababio", date: "2023-06-13", amount: 145.75, status: "completed", items: 4 },
      { id: 5, customer: "Kwame Asante", date: "2023-06-12", amount: 89.99, status: "pending", items: 2 }
    ]);

    setProducts([
      { id: 1, name: "Fresh Vegetables", category: "vegetables", price: 2.99, stock: 150, status: "active" },
      { id: 2, name: "Organic Fruits", category: "fruits", price: 3.49, stock: 85, status: "active" },
      { id: 3, name: "Premium Grains", category: "grains", price: 4.99, stock: 42, status: "active" },
      { id: 4, name: "Dairy Products", category: "dairy", price: 3.99, stock: 0, status: "out-of-stock" },
      { id: 5, name: "Farm Tools Kit", category: "tools", price: 29.99, stock: 18, status: "active" }
    ]);

    setUsers([
      { id: 1, name: "Emmanuel Osei", email: "emmanuel@example.com", role: "farmer", joinDate: "2023-01-15" },
      { id: 2, name: "Amina Kofie", email: "amina@example.com", role: "wholesaler", joinDate: "2023-02-20" },
      { id: 3, name: "Daniel Mensah", email: "daniel@example.com", role: "retail", joinDate: "2023-03-05" },
      { id: 4, name: "Grace Ababio", email: "grace@example.com", role: "farmer", joinDate: "2023-04-12" },
      { id: 5, name: "Kwame Asante", email: "kwame@example.com", role: "admin", joinDate: "2023-05-18" }
    ]);

    setStats({
      totalSales: 12540.75,
      newOrders: 12,
      registeredUsers: 245,
      inventoryItems: 87,
    });
  }, []);

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric'
  });

  const getStatusBadge = (status) => {
    const classes = {
      completed: "bg-green-100 text-green-800",
      shipped: "bg-blue-100 text-blue-800",
      processing: "bg-yellow-100 text-yellow-800",
      pending: "bg-gray-100 text-gray-800",
      active: "bg-green-100 text-green-800",
      "out-of-stock": "bg-red-100 text-red-800",
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${classes[status]}`}>{status}</span>
    );
  };
  
  return (
    <div className="flex h-screen bg-gray-50 font-nunito-sans">
      {/* Sidebar Component */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-500 mr-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-lg font-medium text-gray-800 capitalize">{activeTab}</h1>
            </div>
            <div className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">SA</div>
                <span className="hidden md:block text-sm font-medium text-gray-700">Admin User</span>
                {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 py-1">
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Cards */}
        {activeTab === "dashboard" && (
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4"><DollarSign size={20} /></div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Sales</p>
                    <p className="text-2xl font-semibold text-gray-800">GHC {stats.totalSales.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4"><ShoppingBag size={20} /></div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">New Orders</p>
                    <p className="text-2xl font-semibold text-gray-800">{stats.newOrders}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4"><Users size={20} /></div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Registered Users</p>
                    <p className="text-2xl font-semibold text-gray-800">{stats.registeredUsers}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4"><Package size={20} /></div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Inventory Items</p>
                    <p className="text-2xl font-semibold text-gray-800">{stats.inventoryItems}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Action Button */}
            <div className="mt-8">
              <Link
                to="/admin/add"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <PlusCircle className="w-5 h-5 mr-2" />
                Add New Product
              </Link>
            </div>
          </main>
        )}
        
        {/* Products Tab - With Add Button */}
        {activeTab === "products" && (
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Products List</h2>
              <Link
                to="/admin/add"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <PlusCircle className="w-5 h-5 mr-2" />
                Add Product
              </Link>
            </div>
            
            {/* Product Table would go here */}
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 capitalize">{product.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">GHC {product.price.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{product.stock}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(product.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default Dashboard;