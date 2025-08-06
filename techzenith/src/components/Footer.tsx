import React, { useRef } from 'react';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
// import { useGSAPAnimation } from '../hooks/useGSAPAnimation';
// import { useReducedMotion } from '../hooks/useReducedMotion';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  // const prefersReducedMotion = useReducedMotion();

  // useGSAPAnimation(footerRef, {
  //   opacity: 1,
  //   y: 50,
  //   duration: prefersReducedMotion ? 0 : 0.8,
  //   ease: 'power2.out',
  // });

  return (
    <footer ref={footerRef} className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo inFooter={true} />
            <p className="mt-4">Empowering businesses with innovative technology solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/cloud-solutions" className="hover:text-indigo-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services/cybersecurity" className="hover:text-indigo-400 transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services/crm-solutions" className="hover:text-indigo-400 transition-colors">CRM Solutions</Link></li>
              <li><Link to="/services/staff-augmentation" className="hover:text-indigo-400 transition-colors">Staff Augmentation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Tech Zenith</p>
                  <p>Ground Floor</p>
                  <p>470 St Kilda Rd</p>
                  <p>Melbourne VIC 3004</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+61-447775432</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@techzenith.com.au</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Tech Zenith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;