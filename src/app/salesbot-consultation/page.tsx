import { AnimatedSection } from '@/components';
import { IoMailOutline, IoCallOutline, IoTimeOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaBullhorn, FaRocket, FaUsers, FaChartLine } from "react-icons/fa";
import Link from 'next/link';
import styles from './SalesbotConsultation.module.css';

export const metadata = {
  title: 'Salesbot導入相談 | Inspire Up - フォーム営業自動化ツール',
  description: 'Salesbotの導入についてお気軽にご相談ください。フォーム営業の自動化で営業効率を大幅に向上させます。',
  keywords: ['Salesbot', '導入相談', 'フォーム営業', '自動化', '営業効率化', 'Inspire Up'],
};

export default function SalesbotConsultationPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Salesbot導入相談</h1>
          <p className={styles.heroSubtitle}>
            フォーム営業の自動化で<br />
            営業効率を劇的に向上させませんか？
          </p>
          <div className={styles.heroFeatures}>
            <div className={styles.feature}>
              <FaBullhorn className={styles.featureIcon} />
              <span>1日1万件の自動営業</span>
            </div>
            <div className={styles.feature}>
              <FaUsers className={styles.featureIcon} />
              <span>150万件の営業リスト</span>
            </div>
            <div className={styles.feature}>
              <FaChartLine className={styles.featureIcon} />
              <span>営業効率の大幅向上</span>
            </div>
          </div>
        </div>
      </section>

      {/* 相談内容 */}
      <AnimatedSection className={styles.consultationContent}>
        <div className="container">
          <h2 className="section-title">ご相談内容</h2>
          <div className={styles.consultationGrid}>
            <div className={styles.consultationCard}>
              <FaRocket className={styles.consultationIcon} />
              <h3>導入プロセス</h3>
              <p>Salesbotの導入手順や必要な準備について詳しくご説明します。</p>
            </div>
            <div className={styles.consultationCard}>
              <FaChartLine className={styles.consultationIcon} />
              <h3>効果測定</h3>
              <p>導入後の効果測定方法や期待できる成果についてお話しします。</p>
            </div>
            <div className={styles.consultationCard}>
              <FaUsers className={styles.consultationIcon} />
              <h3>運用サポート</h3>
              <p>導入後の運用方法やサポート体制についてご案内します。</p>
            </div>
            <div className={styles.consultationCard}>
              <FaBullhorn className={styles.consultationIcon} />
              <h3>カスタマイズ</h3>
              <p>お客様のニーズに合わせたカスタマイズ内容についてご相談します。</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 相談の流れ */}
      <AnimatedSection className={styles.consultationFlow}>
        <div className="container">
          <h2 className="section-title">相談の流れ</h2>
          <div className={styles.flowSteps}>
            <div className={styles.stepItem}>
              <span className={styles.stepNumber}>01</span>
              <div className={styles.stepContent}>
                <h3>お問い合わせ</h3>
                <p>お問い合わせフォームまたはお電話でご連絡ください。</p>
              </div>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepNumber}>02</span>
              <div className={styles.stepContent}>
                <h3>ヒアリング</h3>
                <p>現在の営業課題やご要望について詳しくお聞かせください。</p>
              </div>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepNumber}>03</span>
              <div className={styles.stepContent}>
                <h3>提案・デモ</h3>
                <p>Salesbotの機能紹介とお客様に最適な活用方法をご提案します。</p>
              </div>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepNumber}>04</span>
              <div className={styles.stepContent}>
                <h3>導入検討</h3>
                <p>ご提案内容をご検討いただき、導入をご決定ください。</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* よくある質問 */}
      <AnimatedSection className={styles.faq}>
        <div className="container">
          <h2 className="section-title">よくある質問</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>Q. 導入にかかる期間はどのくらいですか？</h3>
              <p>A. 通常1-2週間程度で導入が完了します。お客様の環境や要件により異なる場合があります。</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Q. 初期費用はかかりますか？</h3>
              <p>A. 初期設定費用が発生する場合があります。詳細は個別にご相談させていただきます。</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Q. サポート体制はどうなっていますか？</h3>
              <p>A. 導入後も継続的なサポートを提供します。技術的な質問や運用に関するご相談にお答えします。</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Q. 他のツールとの連携は可能ですか？</h3>
              <p>A. CRMやMAツールとの連携も可能です。お使いのツールに合わせてカスタマイズいたします。</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* お問い合わせ */}
      <AnimatedSection className={styles.contactSection}>
        <div className="container">
          <h2 className="section-title">お問い合わせ</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <IoMailOutline className={styles.contactIcon} />
                <div>
                  <h3>メール</h3>
                  <p><a href="mailto:inspireup.w.official@gmail.com">inspireup.w.official@gmail.com</a></p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <IoCallOutline className={styles.contactIcon} />
                <div>
                  <h3>電話</h3>
                  <p><a href="tel:080-2342-4513">080-2342-4513</a></p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <IoTimeOutline className={styles.contactIcon} />
                <div>
                  <h3>受付時間</h3>
                  <p>平日 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <div className={styles.contactCta}>
              <h3>まずはお気軽にご相談ください</h3>
              <p>Salesbotの導入について、どんな小さな疑問でもお答えします。</p>
              <Link href="/contact" className={styles.contactButton}>
                お問い合わせフォームへ
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
