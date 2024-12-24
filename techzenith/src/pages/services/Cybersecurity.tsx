import React from 'react';
import { motion } from 'framer-motion';
import ServiceHeader from '../../components/ServiceHeader';
import SecurityFeatureCard from '../../components/cybersecurity/SecurityFeatureCard';
import { securityFeatures } from '../../data/securityFeatures';

const Cybersecurity = () => {
  return (
    <div className="min-h-screen">
      <ServiceHeader
        title="Cybersecurity Services"
        description="Protect your business with enterprise-grade security solutions"
        bgColor="bg-gradient-to-r from-red-900 via-red-800 to-red-900"
      />
      
      <div className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/90 via-gray-900/85 to-red-900/90" />
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Cybersecurity Solutions for Small to Medium Businesses in Australia
              </h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                At Tech Zenith, we understand the unique cybersecurity challenges faced by small to medium businesses (SMBs) in the Australian market. Our tailored cybersecurity offerings are designed to protect your business from threats while ensuring compliance with local regulations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <SecurityFeatureCard
                  key={index}
                  {...feature}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;