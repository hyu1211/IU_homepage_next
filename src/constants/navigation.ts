import { NavigationItem } from '@/types';

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: 'ホーム',
    href: '/',
    subLabel: 'Home'
  },
  {
    label: '会社概要',
    href: '/#about',
    subLabel: 'About'
  },
  {
    label: '提供サービス',
    href: '/#solution',
    subLabel: 'Services'
  },
  {
    label: '特長・強み',
    href: '/#strength',
    subLabel: 'Features'
  },
  {
    label: '実績紹介',
    href: '/#works',
    subLabel: 'Works'
  },
  {
    label: 'お問い合わせ',
    href: '/contact',
    subLabel: 'Contact'
  }
];

export const FOOTER_NAVIGATION = {
  company: [
    { label: '会社概要', href: '/about' },
    { label: 'プライバシーポリシー', href: '/privacy' },
    { label: '利用規約', href: '/terms' }
  ],
  services: [
    { label: 'DXコンサルティング', href: '/services#dx-consulting' },
    { label: 'システム開発', href: '/services#system-development' },
    { label: 'AI・データ活用', href: '/services#ai-data' },
    { label: '業務効率化支援', href: '/services#efficiency' }
  ],
  support: [
    { label: 'お問い合わせ', href: '/contact' },
    { label: 'よくある質問', href: '/faq' },
    { label: 'サポート', href: '/support' }
  ]
} as const;

// ページタイトルのマッピング
export const PAGE_TITLES = {
  '/': 'ホーム',
  '/about': '会社概要',
  '/services': '提供サービス',
  '/contact': 'お問い合わせ',
  '/salesbot': 'セールスボット',
  '/privacy': 'プライバシーポリシー',
  '/terms': '利用規約'
} as const;
