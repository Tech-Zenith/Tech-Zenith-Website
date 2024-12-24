import React from 'react';
import { motion } from 'framer-motion';
import CloudServiceCard from './CloudServiceCard';

interface CloudServiceSectionProps {
  title: string;
  services: Array<{
    title: string;
    description: string;
    icon: any;
  }>;
}

const CloudServiceSection: React.FC<CloudServiceSectionProps> = ({ title, services }) => {
  return (
    <div className="py-24 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {title}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <CloudServiceCard
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudServiceSection;