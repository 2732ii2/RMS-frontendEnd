import React from 'react';

export default function Showcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50 to-white"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Powerful Admin Dashboard</h2>
          <p className="mt-4 text-xl text-gray-600">Complete control over your restaurant operations</p>
        </div>

        <div className="space-y-24">
          {/* Analytics Showcase */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900">Real-time Analytics</h3>
              <p className="mt-4 text-lg text-gray-600">
                Get detailed insights into your restaurant's performance. Track sales trends, popular dishes, 
                peak hours, and customer preferences with intuitive visualizations.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                  Sales performance tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                  Customer behavior analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                  Peak hour identification
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-200 rounded-lg filter blur-xl opacity-30 transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Analytics Dashboard"
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Order Management Showcase */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900">Order Management</h3>
              <p className="mt-4 text-lg text-gray-600">
                Efficiently manage all orders in real-time. Track order status, manage kitchen queue, 
                and ensure timely delivery to enhance customer satisfaction.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                  Real-time order tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                  Kitchen queue management
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                  Order history and reporting
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-200 rounded-lg filter blur-xl opacity-30 transform -rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Order Management System"
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}