import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CRMPlatformCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: Array<{
    title: string;
    items: string[];
  }>;
  delay?: number;
  color: string;
}

const CRMPlatformCard: React.FC<CRMPlatformCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  delay = 0,
  color
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-lg shadow-xl overflow-hidden border-t-4 ${color}`}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Icon className={`w-8 h-8 ${color.replace('border', 'text')} mr-3`} />
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>

      <div className="bg-gray-50 p-6">
        {features.map((feature, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h4 className="font-semibold text-gray-900 mb-3">{feature.title}</h4>
            <ul className="space-y-2">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className={`inline-block w-2 h-2 ${color.replace('border', 'bg')} rounded-full mt-2 mr-2`} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CRMPlatformCard;