import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Package, Inbox, Home } from 'lucide-react';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <div className="w-64 bg-gray-800 text-white">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <nav className="p-4">
          <Link 
            to="/admin" 
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <Home className="mr-3" /> Dashboard
          </Link>
          <Link 
            to="/admin/products" 
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <Package className="mr-3" /> Products
          </Link>
          <Link 
            to="/admin/submissions" 
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <Inbox className="mr-3" /> Submissions
          </Link>
        </nav>
        <div className="mt-auto pt-4 border-t border-gray-700">
          <button
            // onClick={logout}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            Logout
          </button>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet /> {/* This renders child routes */}
      </div>
    </div>
  );
};

export default AdminLayout;