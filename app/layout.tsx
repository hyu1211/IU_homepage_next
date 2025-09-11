import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inspire Up | DX推進とAI導入で企業の未来を加速する",
  description: "企業のDX推進、AI導入、業務自動化・効率化を支援し、ビジネスの持続的な成長をサポートします。",
//   icons: {
//     icon: "https://res.cloudinary.com/dagugihav/image/upload/v1757590201/Adobe_Express_-_file_3_yaomdl.png",
//   },
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