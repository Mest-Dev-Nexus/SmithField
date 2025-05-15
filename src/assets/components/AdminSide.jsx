import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, Users, ShoppingBag, Truck, Shovel, Package, FileText, Settings, LogOut, X, PlusCircle} from "lucide-react";
import logo from "../images/logo.png"

const AdminSide = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform z-30 transition-transform duration-200 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
          <span className="ml-2 text-xl font-bold text-gray-800">SmithField Admin</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-gray-500">
          <X size={20} />
        </button>
      </div>
      <nav className="px-4 py-6 space-y-2">
        {["dashboard", "products", "users", "farmers", "wholesale", "reports",].map(tab => (
          <Link
            key={tab}
            to="#"
            onClick={() => setActiveTab(tab)}
            className={`flex items-center px-4 py-3 rounded-lg ${activeTab === tab ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {tab === "dashboard" && <BarChart3 className="w-5 h-5 mr-3" />}
            {tab === "products" && <Package className="w-5 h-5 mr-3" />}
            {tab === "users" && <Users className="w-5 h-5 mr-3" />}
            {tab === "farmers" && <Shovel className="w-5 h-5 mr-3" />}
            {tab === "wholesale" && <Truck className="w-5 h-5 mr-3" />}
            {tab === "reports" && <FileText className="w-5 h-5 mr-3" />}
            <span className="capitalize">{tab}</span>
          </Link>
        ))}


        
        {/* Add Product Link */}
        <Link
          to="/admin/orders"
          className="flex items-center px-4 py-3 rounded-lg text-green-700 hover:bg-green-50"
        >
          <ShoppingBag className="w-5 h-5 mr-3" />
          <span>Orders</span>
        </Link>

        <Link
          to="/admin/add"
          className="flex items-center px-4 py-3 rounded-lg text-green-700 hover:bg-green-50"
        >
          <PlusCircle className="w-5 h-5 mr-3" />
          <span>Add Product</span>
        </Link>
        
        <div className="pt-6 border-t">
          <Link to="#" className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
            <Settings className="w-5 h-5 mr-3" />
           Settings
          </Link>
          <Link to="#" className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default AdminSide
