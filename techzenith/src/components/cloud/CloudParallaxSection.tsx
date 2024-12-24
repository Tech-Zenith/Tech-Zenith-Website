import React from 'react';
import { useParallax } from '../../hooks/useParallax';
import { motion } from 'framer-motion';

interface CloudParallaxSectionProps {
  imageUrl: string;
  title?: string;
  description?: string;
  reversed?: boolean;
}

const CloudParallaxSection: React.FC<CloudParallaxSectionProps> = ({ 
  imageUrl, 
  title, 
  description,
  reversed = false 
}) => {
  const parallaxStyle = useParallax({ speed: 0.8 }); // Increased speed for more pronounced effect

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div 
        style={parallaxStyle}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <img
          src={imageUrl}
          alt={title || "Cloud Services"}
          className="w-full h-[200%] object-cover" // Increased height for more parallax room
        />
      </div>
      
      {(title || description) && (
        <div className={`relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center ${reversed ? 'justify-end' : 'justify-start'}`}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`max-w-lg ${reversed ? 'text-right' : 'text-left'}`}
          >
            {title && (
              <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">{title}</h3>
            )}
            {description && (
              <p className="text-lg text-gray-100 drop-shadow-lg">{description}</p>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CloudParallaxSection;