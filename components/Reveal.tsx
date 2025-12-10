import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  width?: 'fit-content' | '100%';
}

export const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, width = "fit-content" }) => {
  const { ref, isVisible } = useOnScreen({ threshold: 0.1 });

  const style = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={ref} style={{ width }} className={`${className}`}>
      <div style={style} className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
        {children}
      </div>
    </div>
  );
};