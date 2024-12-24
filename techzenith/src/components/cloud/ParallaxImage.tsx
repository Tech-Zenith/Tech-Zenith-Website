import React from 'react';
import { useParallax } from '../../hooks/useParallax';

interface ParallaxImageProps {
  imageUrl: string;
  alt: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ imageUrl, alt }) => {
  const parallaxStyle = useParallax({ speed: 0.5 });

  return (
    <div className="h-[400px] relative overflow-hidden">
      <div 
        style={parallaxStyle}
        className="absolute inset-0"
      >
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-[150%] object-cover"
        />
      </div>
    </div>
  );
};

export default ParallaxImage;