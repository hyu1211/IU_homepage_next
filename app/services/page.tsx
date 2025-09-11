import AnimatedSection from '@/components/AnimatedSection'; // アニメーションコンポーネントをインポート

export default function ServicesPage() {
  return (
    <AnimatedSection id="services-page" className="container">
      <h1 className="section-title">事業内容</h1>
       <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        <p style={{textAlign: 'center', marginBottom: '40px'}}>
          お客様のビジネスを加速させるための、私たちの多様なサービスラインナップです。
          デジタルトランスフォーメーションからシステム開発まで、幅広くサポートします。
        </p>
        <ul>
          <li><strong>DX推進の支援:</strong> 業務フローのデジタル化を進め、効率的かつ透明性の高い仕組みを構築します。</li>
          <li><strong>AI導入による競争力強化:</strong> 最新AI技術で顧客対応、自動化、データ活用などを高次元で実現します。</li>
          <li><strong>業務自動化・効率化:</strong> 定型業務の自動化により、工数削減と人的リソースの最適化を実現します。</li>
          <li><strong>ホームページ制作:</strong> 集客・ブランディングを支援するWebサイトを短期間で制作します。</li>
          <li><strong>その他開発:</strong> SNS自動運用、スクレイピングツール、シフト自動生成ツール、LINE予約システム、Excel業務の自動化など、お客様のニーズに合わせて柔軟に対応します。</li>
        </ul>
      </div>
    </AnimatedSection>
  );
}