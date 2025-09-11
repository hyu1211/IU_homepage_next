'use client'; // Client Componentとしてマーク

import React, { useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function AnimatedSection({ children, id, className }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // 一度表示されたら監視を停止
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // 10%表示されたら発火
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section ${className || ''} ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </section>
  );
}