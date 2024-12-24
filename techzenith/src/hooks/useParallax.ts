import { useEffect, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  disabled?: boolean;
}

export const useParallax = ({ speed = 0.5, disabled = false }: ParallaxOptions = {}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.pageYOffset);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [disabled]);

  return {
    transform: `translateY(${offset * speed}px)`,
    transition: 'transform 0.1s linear'
  };
};