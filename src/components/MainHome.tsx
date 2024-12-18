import React from 'react';
import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import Features from './Features.tsx';
import Showcase from './Showcase.tsx';

function MainHome() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      
      {/* CTA Section */}
      <section className="bg-primary-600 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary-500 opacity-50"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Restaurant?</h2>
          <p className="mt-4 text-xl text-primary-100">
            Join thousands of restaurants already using our platform
          </p>
          <button className="mt-8 bg-white text-primary-600 px-8 py-3 rounded-full hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}

export default MainHome;