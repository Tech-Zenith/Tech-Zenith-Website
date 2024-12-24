import React from 'react';

interface StagnantBackgroundProps {
  imageUrl: string;
  children: React.ReactNode;
}

const StagnantBackground: React.FC<StagnantBackgroundProps> = ({ imageUrl, children }) => {
  return (
    <div className="relative">
      {/* Fixed background image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      </div>
      
      {/* Content with transparent background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default StagnantBackground;