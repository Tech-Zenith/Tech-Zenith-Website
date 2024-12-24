import React from 'react';
import { motion } from 'framer-motion';

const CloudIntroSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              alt="Cloud Computing"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-right"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Cloud Computing?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Cloud computing delivers computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.
            </p>
            <p className="text-lg text-gray-600">
              At Tech Zenith, we specialize in both Microsoft Azure and Google Cloud Platform (GCP), providing comprehensive solutions that help businesses leverage the power of cloud computing to drive growth, enhance efficiency, and maintain competitive advantage in today's digital landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CloudIntroSection;