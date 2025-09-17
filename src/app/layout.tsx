import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import "@/styles/globals.css";
import "@/styles/variables.css";
import "@/styles/animations.css";

export const metadata: Metadata = {
  title: "Inspire Up | DX推進・AI導入で業務効率化を実現 | 早稲田・東大学生チーム",
  description: "早稲田大学・東京大学の現役学生による高品質なDX推進・AI導入サービス。業務自動化で効率95%向上。初回相談無料。42Tokyo・Mensa会員在籍の実力派チーム。",
  keywords: "DX推進,AI導入,業務自動化,システム開発,早稲田大学,東京大学,42Tokyo,Mensa,コストパフォーマンス",
  authors: [{ name: "Inspire Up" }],
  creator: "Inspire Up",
  publisher: "Inspire Up",
  robots: "index,follow",
  openGraph: {
    title: "Inspire Up | DX推進・AI導入で業務効率化を実現",
    description: "早稲田大学・東京大学の現役学生による高品質なDX推進・AI導入サービス。業務自動化で効率95%向上。",
    type: "website",
    locale: "ja_JP",
    siteName: "Inspire Up"
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspire Up | DX推進・AI導入で業務効率化を実現",
    description: "早稲田大学・東京大学の現役学生による高品質なDX推進・AI導入サービス。"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {/* このスタイルがヘッダーとコンテンツの重なりを確実に防ぎます */}
        <main style={{ paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}