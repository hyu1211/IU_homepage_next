import { generateOrganizationSchema, generateWebsiteSchema } from '@/utils/seo';

interface SEOProps {
  children?: React.ReactNode;
}

export default function SEO({ children }: SEOProps) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      
      {children}
    </>
  );
}
