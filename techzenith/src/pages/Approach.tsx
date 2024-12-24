import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Approach = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-8"
          >
            Our Approach
          </motion.h1>
          
          <div className="prose prose-lg">
            <p>Content will be customized later...</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Approach;