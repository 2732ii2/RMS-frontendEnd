import React from 'react';
import Feature from './Feature.tsx';
import { Smartphone, Clock, LineChart, Users } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50 to-white"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to manage orders efficiently</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Feature 
            icon={Smartphone}
            title="Digital Menu"
            description="Interactive digital menu with real-time updates and customization options"
          />
          <Feature 
            icon={Clock}
            title="Real-time Orders"
            description="Instant order transmission to kitchen with status tracking"
          />
          <Feature 
            icon={LineChart}
            title="Analytics"
            description="Detailed insights into order patterns and customer preferences"
          />
          <Feature 
            icon={Users}
            title="Table Management"
            description="Smart table allocation and waiting list management"
          />
        </div>
      </div>
    </section>
  );
}