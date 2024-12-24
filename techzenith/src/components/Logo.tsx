import React, { useRef } from 'react';
import { Cpu } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface LogoProps {
  inFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ inFooter = false }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPAnimation(logoRef, {
    opacity: 0,
    y: -20,
    duration: prefersReducedMotion ? 0 : 0.5,
    ease: 'power2.out',
  });

  return (
    <div ref={logoRef} className="flex items-center space-x-2">
      <Cpu className={`w-8 h-8 ${inFooter ? 'text-indigo-400' : 'text-indigo-600'}`} />
      <div className="flex flex-col">
        <span className={`text-xl font-bold ${inFooter ? 'text-white' : 'text-gray-900'}`}>Tech</span>
        <span className={`text-xl font-bold ${inFooter ? 'text-indigo-400' : 'text-indigo-600'}`}>Zenith</span>
      </div>
    </div>
  );
};

export default Logo;