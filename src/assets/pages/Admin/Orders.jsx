import React, { useState } from "react";
import { 
  ShoppingCart, 
  User, 
  Phone, 
  MapPin, 
  Calendar, 
  Package, 
  CheckCircle, 
  XCircle, 
  ChevronDown,
  ChevronUp,
  Search
} from "lucide-react";

const Orders = () => {
  // Sample order data - in a real app, this would come from an API
  const [orders, setOrders] = useState([
    {
      id: "ORD-1001",
      customer: {
        name: "Kwame Asare",
        phone: "0244123456",
        address: "123 Main St, Accra"
      },
      date: "2023-05-15",
      items: [
        { id: 1, name: "Premium Rice 5kg", price: 45.00, quantity: 2 },
        { id: 2, name: "Tomato Paste", price: 8.50, quantity: 3 }
      ],
      status: "completed",
      total: 112.50,
      paymentMethod: "Mobile Money"
    },
    {
      id: "ORD-1002",
      customer: {
        name: "Ama Boateng",
        phone: "0209876543",
        address: "456 Circle Rd, Kumasi"
      },
      date: "2023-05-16",
      items: [
        { id: 3, name: "Vegetable Oil 1L", price: 12.00, quantity: 4 },
        { id: 4, name: "Tin Milk", price: 5.00, quantity: 6 }
      ],
      status: "pending",
      total: 78.00,
      paymentMethod: "Cash on Delivery"
    },
    {
      id: "ORD-1003",
      customer: {
        name: "Yaw Mensah",
        phone: "0543210987",
        address: "789 Hillside Ave, Takoradi"
      },
      date: "2023-05-17",
      items: [
        { id: 5, name: "Biscuits Pack", price: 3.50, quantity: 10 },
        { id: 6, name: "Mineral Water 500ml", price: 1.50, quantity: 12 }
      ],
      status: "cancelled",
      total: 47.00,
      paymentMethod: "Card"
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });

  // Filter and sort orders
  const filteredOrders = orders
    .filter(order => {
      const matchesSearch = 
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.phone.includes(searchTerm);
      
      const matchesStatus = statusFilter === "all" || order.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <ShoppingCart className="mr-2" /> Customer Orders
      </h1>
      
      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          
          <div>
            <button 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition"
              onClick={() => {
                // In a real app, this might refresh data from the server
                setSearchTerm("");
                setStatusFilter("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
      
      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort("id")}
                >
                  <div className="flex items-center">
                    Order ID
                    {sortConfig.key === "id" && (
                      sortConfig.direction === "asc" ? 
                        <ChevronUp className="ml-1 h-4 w-4" /> : 
                        <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort("customer.name")}
                >
                  <div className="flex items-center">
                    Customer
                    {sortConfig.key === "customer.name" && (
                      sortConfig.direction === "asc" ? 
                        <ChevronUp className="ml-1 h-4 w-4" /> : 
                        <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort("date")}
                >
                  <div className="flex items-center">
                    Date
                    {sortConfig.key === "date" && (
                      sortConfig.direction === "asc" ? 
                        <ChevronUp className="ml-1 h-4 w-4" /> : 
                        <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort("total")}
                >
                  <div className="flex items-center">
                    Total
                    {sortConfig.key === "total" && (
                      sortConfig.direction === "asc" ? 
                        <ChevronUp className="ml-1 h-4 w-4" /> : 
                        <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort("status")}
                >
                  <div className="flex items-center">
                    Status
                    {sortConfig.key === "status" && (
                      sortConfig.direction === "asc" ? 
                        <ChevronUp className="ml-1 h-4 w-4" /> : 
                        <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.customer.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {order.items.length} items
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.paymentMethod}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      GHC {order.total.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === "completed" 
                          ? "bg-green-100 text-green-800" 
                          : order.status === "pending" 
                            ? "bg-yellow-100 text-yellow-800" 
                            : "bg-red-100 text-red-800"
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-green-600 hover:text-green-900 mr-3"
                      >
                        View
                      </button>
                      {order.status === "pending" && (
                        <>
                          <button
                            onClick={() => updateOrderStatus(order.id, "completed")}
                            className="text-blue-600 hover:text-blue-900 mr-3"
                          >
                            Complete
                          </button>
                          <button
                            onClick={() => updateOrderStatus(order.id, "cancelled")}
                            className="text-red-600 hover:text-red-900"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-500">
                    No orders found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setSelectedOrder(null)}
          ></div>
          
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Order #{selectedOrder.id}</h2>
                  <p className="text-sm text-gray-500">
                    Placed on {new Date(selectedOrder.date).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                  selectedOrder.status === "completed" 
                    ? "bg-green-100 text-green-800" 
                    : selectedOrder.status === "pending" 
                      ? "bg-yellow-100 text-yellow-800" 
                      : "bg-red-100 text-red-800"
                }`}>
                  {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Customer Information */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                    <User className="mr-2" /> Customer Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Name</p>
                      <p className="text-gray-800">{selectedOrder.customer.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p className="text-gray-800 flex items-center">
                        <Phone className="mr-2 h-4 w-4" /> {selectedOrder.customer.phone}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Delivery Address</p>
                      <p className="text-gray-800 flex items-start">
                        <MapPin className="mr-2 h-4 w-4 mt-0.5" /> 
                        <span>{selectedOrder.customer.address}</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                    <ShoppingCart className="mr-2" /> Order Summary
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-2">Payment Method</p>
                      <p className="text-gray-800">{selectedOrder.paymentMethod}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-2">Order Items</p>
                      <div className="border rounded-lg divide-y">
                        {selectedOrder.items.map((item, index) => (
                          <div key={index} className="p-3 flex justify-between">
                            <div>
                              <p className="font-medium text-gray-800">{item.name}</p>
                              <p className="text-sm text-gray-500">
                                {item.quantity} × GHC {item.price.toFixed(2)}
                              </p>
                            </div>
                            <p className="font-medium text-gray-800">
                              GHC {(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-bold text-gray-800">
                        <span>Total</span>
                        <span>GHC {selectedOrder.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Order Actions */}
              <div className="mt-6 flex justify-end space-x-3">
                {selectedOrder.status === "pending" && (
                  <>
                    <button
                      onClick={() => {
                        updateOrderStatus(selectedOrder.id, "completed");
                        setSelectedOrder(null);
                      }}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md flex items-center"
                    >
                      <CheckCircle className="mr-2 h-4 w-4" /> Mark as Completed
                    </button>
                    <button
                      onClick={() => {
                        updateOrderStatus(selectedOrder.id, "cancelled");
                        setSelectedOrder(null);
                      }}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md flex items-center"
                    >
                      <XCircle className="mr-2 h-4 w-4" /> Cancel Order
                    </button>
                  </>
                )}
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;