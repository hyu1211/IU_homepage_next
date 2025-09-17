import { AnimatedSection } from '@/components'; // アニメーションコンポーネントをインポート

export default function AboutPage() {
  return (
    <AnimatedSection id="about-page" className="container">
      <h1 className="section-title">私たちについて</h1>
      
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* ミッション */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary-color)' }}>
            私たちのミッション
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            技術革新を通じて社会と企業の可能性を最大限に引き出し、<br />
            持続的な成長と価値創造を実現する
          </p>
        </div>

        {/* チーム概要 */}
        <div style={{ 
          background: 'var(--background-light)', 
          padding: '40px', 
          borderRadius: '12px', 
          marginBottom: '50px' 
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '25px', textAlign: 'center' }}>
            チーム概要
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--secondary-color)', fontSize: '2rem', marginBottom: '10px' }}>3名</h3>
              <p>現役学生チーム</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--secondary-color)', fontSize: '2rem', marginBottom: '10px' }}>2校</h3>
              <p>早稲田大学・東京大学</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--secondary-color)', fontSize: '2rem', marginBottom: '10px' }}>100%</h3>
              <p>お客様満足度</p>
            </div>
          </div>
        </div>

        {/* 詳細説明 */}
        <div style={{ lineHeight: '1.8', textAlign: 'left' }}>
          <p style={{ marginBottom: '25px', fontSize: '1.1rem' }}>
            <strong>Inspire Up</strong>は、早稲田大学と東京大学に在学する現役学生3名で活動するテクノロジーチームです。
            現在、法人化の手続きを進めており、より多くの企業様にサービスをご提供できるよう準備を整えています。
          </p>
          <p style={{ marginBottom: '25px', fontSize: '1.1rem' }}>
            メンバーは、フランス発のプログラミング教育機関「<strong>42Tokyo</strong>」の在籍者や<strong>Mensa会員</strong>といった多様なバックグラウンドを持っています。
            学術的な知見と実践的な開発スキルを融合させ、従来の枠にとらわれない柔軟な発想で、お客様の課題解決に貢献します。
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            どのような課題でも、まずは私たちにご相談ください。お客様と共に最適なソリューションを創り上げ、
            ビジネスの成長と効率化を実現いたします。
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}