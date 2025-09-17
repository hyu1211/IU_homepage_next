'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  id, 
  className = '',
  delay = 0
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
    delay
  });

  return (
    <section
      ref={ref}
      id={id}
      className={`section ${className} ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </section>
  );
}