import React from 'react';
import { Menu, X, Utensils } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navi=useNavigate();
  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Utensils className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Saida Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600">How it Works</a>
            <a href="#benefits" className="text-gray-600 hover:text-primary-600">Benefits</a>
            <button onClick={()=>{
              navi("/login");
            }} className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-effect">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-primary-600">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-primary-600">How it Works</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-600 hover:text-primary-600">Benefits</a>
            <button className="w-full mt-2 bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}