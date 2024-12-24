import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SecurityFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  delay?: number;
}

const SecurityFeatureCard: React.FC<SecurityFeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow border border-red-100"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-red-600 mr-3" />
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-2" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SecurityFeatureCard;