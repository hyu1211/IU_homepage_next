// アニメーション関連のユーティリティ関数

export const easeInOut = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

export const easeOut = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

export const easeIn = (t: number): number => {
  return t * t * t;
};

// スムーススクロール
export const smoothScrollTo = (target: string | number, duration: number = 800): void => {
  const startPosition = window.pageYOffset;
  const targetPosition = typeof target === 'string' 
    ? document.querySelector(target)?.offsetTop || 0
    : target;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    window.scrollTo(0, startPosition + distance * easeInOut(progress));
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }
  
  requestAnimationFrame(animation);
};

// 要素が画面内に入ったかを判定
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// 要素が部分的に画面内に入ったかを判定
export const isPartiallyInViewport = (element: Element, threshold: number = 0.1): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  const verticalInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horizontalInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  
  if (!verticalInView || !horizontalInView) return false;
  
  const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
  const visibleArea = visibleHeight * visibleWidth;
  const totalArea = rect.height * rect.width;
  
  return (visibleArea / totalArea) >= threshold;
};

// スクロール方向を検出
export const getScrollDirection = (() => {
  let lastScrollTop = 0;
  
  return (): 'up' | 'down' | 'none' => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const direction = scrollTop > lastScrollTop ? 'down' : scrollTop < lastScrollTop ? 'up' : 'none';
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    return direction;
  };
})();

// src/utils/animations.ts

// debounce関数
export const debounce = <A extends unknown[], R>(
  func: (...args: A) => R,
  wait: number
): ((...args: A) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: A) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// throttle関数
export const throttle = <A extends unknown[]>(
  func: (...args: A) => void,
  limit: number
): ((...args: A) => void) => {
  let inThrottle: boolean;
  return (...args: A) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};