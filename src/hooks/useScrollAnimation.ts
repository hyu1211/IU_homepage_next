'use client';

import { useEffect, useRef, useState } from 'react';
import { isPartiallyInViewport, throttle } from '@/utils/animations';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const checkVisibility = throttle(() => {
      if (triggerOnce && hasAnimated) return;

      const visible = isPartiallyInViewport(element, threshold);
      
      if (visible && !isVisible) {
        if (delay > 0) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) setHasAnimated(true);
          }, delay);
        } else {
          setIsVisible(true);
          if (triggerOnce) setHasAnimated(true);
        }
      } else if (!visible && !triggerOnce) {
        setIsVisible(false);
      }
    }, 100);

    // 初期チェック
    checkVisibility();

    // スクロールイベントリスナー
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [threshold, triggerOnce, delay, isVisible, hasAnimated]);

  return {
    ref: elementRef,
    isVisible,
    hasAnimated
  };
};

export default useScrollAnimation;
