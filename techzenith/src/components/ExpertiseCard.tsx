import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon: Icon, title, description, imageUrl, delay = 0 }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

  useGSAPAnimation(cardRef, {
    opacity: 0,
    x: -50,
    duration: 1,
    delay,
    ease: 'power2.out',
  });

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Icon className="w-8 h-8 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ExpertiseCard;