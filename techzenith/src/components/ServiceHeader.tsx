import React from 'react';
import { motion } from 'framer-motion';

interface ServiceHeaderProps {
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ 
  title, 
  description, 
  bgColor,
  textColor = 'text-white'
}) => {
  return (
    <div className={`${bgColor} ${textColor}`}>
      <div className="pt-24 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-6xl font-extrabold">{title}</h1>
          <p className="text-2xl opacity-90 max-w-3xl pb-4">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceHeader;