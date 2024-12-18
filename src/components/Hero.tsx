import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navi=useNavigate();
  return (
    <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary-100 to-white z-0"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Smart Ordering System for Modern Restaurants
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Eliminate long waiting times and streamline your restaurant operations. 
              Let customers order seamlessly while your staff focuses on delivering exceptional service.
            </p>
            <div className="mt-8 flex gap-4">
              <button onClick={()=>{
                navi("/login");
              }} className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                Get Started Free
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full hover:bg-primary-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-200 rounded-lg filter blur-xl opacity-30 transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Restaurant tablet ordering system"
                className="relative rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}