'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
  skip?: boolean;
}

const useIntersectionObserver = (options: UseIntersectionObserverOptions = {}) => {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0%',
    triggerOnce = true,
    skip = false
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const isIntersecting = entry?.isIntersecting ?? false;

  useEffect(() => {
    const element = elementRef.current;
    if (!element || skip || (triggerOnce && hasTriggered)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        
        if (entry.isIntersecting && triggerOnce) {
          setHasTriggered(true);
        }
      },
      {
        threshold,
        root,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, triggerOnce, skip, hasTriggered]);

  return {
    ref: elementRef,
    entry,
    isIntersecting,
    hasTriggered
  };
};

export default useIntersectionObserver;
