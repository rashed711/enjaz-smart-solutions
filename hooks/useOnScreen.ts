import { useState, useEffect, useRef } from 'react';

export function useOnScreen(options: IntersectionObserverInit = { threshold: 0.1, rootMargin: "0px" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setHasTriggered(true);
        // Once visible, we can optionally stop observing if we want "trigger once" behavior
        if (ref.current) observer.unobserve(ref.current);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, hasTriggered]);

  return { ref, isVisible };
}