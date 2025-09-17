export const SITE_CONFIG = {
  name: 'Inspire Up',
  title: 'Inspire Up - DX向上・業務効率化支援',
  description: 'DX推進とデジタル変革による業務効率化を支援します。システム開発からコンサルティングまで、お客様のビジネス成長をサポートします。',
  url: 'https://inspire-up.com',
  ogImage: '/images/og-image.png',
  
  // SEO設定
  keywords: [
    'DX推進',
    'デジタル変革',
    '業務効率化',
    'システム開発',
    'コンサルティング',
    'AI活用',
    'データ分析',
    'プロセス改善'
  ],
  
  // ソーシャルメディア
  social: {
    twitter: '@inspire_up_jp',
    linkedin: 'inspire-up',
    github: 'inspire-up'
  },
  
  // 連絡先情報
  contact: {
    email: 'inspireup.w.official@gmail.com',
    phone: '080-2342-4513',
    address: '東京都内'
  },
  
  // 営業時間
  businessHours: {
    weekdays: '平日 9:00 - 18:00',
    weekend: '土日祝日 休業'
  }
} as const;

export const META_DEFAULTS = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords.join(', '),
  ogType: 'website',
  ogImage: SITE_CONFIG.ogImage,
  twitterCard: 'summary_large_image'
} as const;
