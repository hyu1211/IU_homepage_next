import { Metadata } from 'next';
import { META_DEFAULTS, SITE_CONFIG } from '@/constants';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  canonical?: string;
}

export const generateMetadata = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  noindex = false,
  canonical
}: SEOProps = {}): Metadata => {
  const pageTitle = title ? `${title} | ${SITE_CONFIG.name}` : META_DEFAULTS.title;
  const pageDescription = description || META_DEFAULTS.description;
  const pageKeywords = keywords ? keywords.join(', ') : META_DEFAULTS.keywords;
  const pageOgImage = ogImage || META_DEFAULTS.ogImage;
  const pageUrl = canonical || SITE_CONFIG.url;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    
    // Open Graph
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: ogType,
      url: pageUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: pageOgImage,
          width: 1200,
          height: 630,
          alt: pageTitle
        }
      ]
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      site: SITE_CONFIG.social.twitter,
      title: pageTitle,
      description: pageDescription,
      images: [pageOgImage]
    },
    
    // その他
    alternates: {
      canonical: pageUrl
    },
    
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    
    // モバイル対応
    viewport: 'width=device-width, initial-scale=1',
    
    // アイコン（Next.js 13 App Routerでは app/icon.png が自動的に使用される）
  };
};

// 構造化データ（JSON-LD）の生成
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contact.phone,
      contactType: 'customer service',
      email: SITE_CONFIG.contact.email
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: '東京都',
      addressCountry: 'JP'
    },
    sameAs: [
      `https://twitter.com/${SITE_CONFIG.social.twitter.replace('@', '')}`,
      `https://linkedin.com/company/${SITE_CONFIG.social.linkedin}`,
      `https://github.com/${SITE_CONFIG.social.github}`
    ]
  };
};

export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
};

// パンくずリストの構造化データ
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url
    }))
  };
};
