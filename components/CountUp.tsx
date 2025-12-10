import React, { useEffect, useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, prefix = "", suffix = "", className = "" }) => {
  const { ref, isVisible } = useOnScreen({ threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease Out Quart Function for smooth effect
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(easeOut * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it lands exactly on end
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};