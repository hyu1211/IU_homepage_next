import React from 'react';
import { Button, Card } from '@/components/ui';
import { AnimatedSection } from '@/components';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <AnimatedSection className={styles.hero}>
      <div className={`${styles.heroContent} container`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            DX推進とAI導入で
            <br />
            企業の未来を加速する
          </h1>
          <p className={styles.heroDescription}>
            企業のDX推進、AI導入、業務自動化・効率化を支援し、
            ビジネスの持続的な成長をサポートします。
          </p>
          <div className={styles.heroButtons}>
            <Button size="large">
              お問い合わせ
            </Button>
            <Button variant="outline" size="large">
              サービス詳細
            </Button>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <Card variant="elevated" className={styles.featureCard}>
            <h3>DXコンサルティング</h3>
            <p>デジタル変革の戦略立案から実行まで</p>
          </Card>
          <Card variant="elevated" className={styles.featureCard}>
            <h3>AI・データ活用</h3>
            <p>データドリブンな意思決定を支援</p>
          </Card>
          <Card variant="elevated" className={styles.featureCard}>
            <h3>業務効率化</h3>
            <p>プロセス改善と自動化の実現</p>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
