import Link from 'next/link';
import { AnimatedSection } from '@/components';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import styles from './Salesbot.module.css';

export default function SalesbotPage() {
  return (
    <AnimatedSection id="salesbot-page">
      <div className="container">
        <h1 className="section-title">フォーム営業自動化ツール「Salesbot」</h1>
        <p className={styles.description}>
          ボタンをクリックして放置するだけで、フォーム営業を完全自動化。
          人的リソースを最小化し、大量の営業アプローチを実現します。
        </p>

        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <IoCheckmarkCircleOutline className={styles.featureIcon} />
            <span>1日10,000件以上の自動送信</span>
          </div>
          <div className={styles.featureItem}>
            <IoCheckmarkCircleOutline className={styles.featureIcon} />
            <span>複数端末での同時稼働</span>
          </div>
          <div className={styles.featureItem}>
            <IoCheckmarkCircleOutline className={styles.featureIcon} />
            <span>150万件以上の営業リストが使い放題</span>
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <Link href="/salesbot-consultation" className={styles.ctaButton}>
            導入について相談する
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}