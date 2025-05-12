
import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const useLenis = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    setLenis(lenisInstance);
    
    return () => {
      lenisInstance.destroy();
    };
  }, []);
  
  return { lenis };
};

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const { lenis } = useLenis();
  
  return <>{children}</>;
};

export default SmoothScroll;
