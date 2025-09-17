import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function Card({
  children,
  variant = 'default',
  padding = 'medium',
  className = '',
}: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[padding]} ${className}`}>
      {children}
    </div>
  );
}
