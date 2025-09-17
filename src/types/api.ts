// API レスポンスの基本型
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// お問い合わせフォームのAPI型
export interface ContactFormRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ContactFormResponse extends ApiResponse {
  data?: {
    id: string;
    submitted_at: string;
  };
}

// ブログ記事の型（将来的な拡張用）
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  published_at: string;
  updated_at: string;
  tags: string[];
  featured_image?: string;
}

// 実績・ポートフォリオの型
export interface WorkItem {
  id: string;
  title: string;
  description: string;
  category: string;
  client?: string;
  technologies: string[];
  images: string[];
  project_url?: string;
  completion_date: string;
}

// サービス情報の型
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
  category: string;
}
