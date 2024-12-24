import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import ServicesDropdown from './ServicesDropdown';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <ServicesDropdown />
            <Link to="/contact" className="text-gray-800 hover:text-indigo-600 transition-colors">Contact</Link>
            <Link to="/about" className="text-gray-800 hover:text-indigo-600 transition-colors">About</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <div className="px-3 py-2">
              <ServicesDropdown />
            </div>
            <Link to="/contact" className="block px-3 py-2 text-gray-800 hover:text-indigo-600">Contact</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-800 hover:text-indigo-600">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;