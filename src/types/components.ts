import { ReactNode } from 'react';

// 基本的なコンポーネントプロパティ
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// ボタンコンポーネントの型
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// カードコンポーネントの型
export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'small' | 'medium' | 'large';
}

// ナビゲーション関連の型
export interface NavigationItem {
  label: string;
  href: string;
  subLabel?: string;
  external?: boolean;
}

// セクション関連の型
export interface SectionProps extends BaseComponentProps {
  id?: string;
  title?: string;
  subtitle?: string;
  background?: 'default' | 'alt' | 'gradient';
}

// アニメーション関連の型
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

// フォーム関連の型
export interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}
