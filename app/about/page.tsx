import AnimatedSection from '@/components/AnimatedSection'; // アニメーションコンポーネントをインポート

export default function AboutPage() {
  return (
    <AnimatedSection id="about-page" className="container">
      <h1 className="section-title">私たちについて</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', textAlign: 'center' }}>
        <p style={{marginBottom: '20px'}}>
          Inspire Upは、早稲田大学と東京大学に在学する現役学生3名で活動するテクノロジーチームです。
          現在、法人化の手続きを進めています。
        </p>
        <p style={{marginBottom: '20px'}}>
          メンバーは、フランス発のプログラミング教育機関「42Tokyo」の在籍者やMensa会員といった多様なバックグラウンドを持っています。
          学術的な知見と実践的な開発スキルを融合させ、従来の枠にとらわれない柔軟な発想で、お客様の課題解決に貢献します。
        </p>
        <p>
          私たちは、技術革新を通じて社会と企業の可能性を最大限に引き出すことを目指しています。
          どのような課題でも、まずは私たちにご相談ください。最適なソリューションを共に創り上げていきましょう。
        </p>
        {/* TODO: 会社概要のテーブルなどを追加 */}
      </div>
    </AnimatedSection>
  );
}