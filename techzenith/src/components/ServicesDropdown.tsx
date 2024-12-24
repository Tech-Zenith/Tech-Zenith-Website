import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { servicesList } from '../data/services';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPAnimation(dropdownRef, {
    opacity: 0,
    y: -10,
    duration: prefersReducedMotion ? 0 : 0.3,
    ease: 'power2.out',
  });

  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-800 hover:text-indigo-600 transition-colors"
      >
        <span>Services</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      <div className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="py-1">
          {servicesList.map((service) => (
            <Link
              key={service.href}
              to={service.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;