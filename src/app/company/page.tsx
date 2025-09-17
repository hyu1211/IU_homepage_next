import { AnimatedSection } from '@/components';
import { IoBusinessOutline, IoLocationOutline, IoPeopleOutline, IoCalendarOutline } from "react-icons/io5";
import { FaUniversity, FaBrain, FaCode, FaLightbulb } from "react-icons/fa";
import styles from './Company.module.css';

export const metadata = {
  title: '会社概要 | Inspire Up - 学生によるDX・AI導入支援',
  description: '早稲田大学・東京大学の現役学生3名で構成されるInspire Upの会社概要。42TokyoやMensa会員といった多様な背景を持つメンバーがDX推進とAI導入を支援します。',
  keywords: ['会社概要', 'Inspire Up', '学生起業', 'DX推進', 'AI導入', '早稲田大学', '東京大学', '42Tokyo', 'Mensa'],
};

export default function CompanyPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>会社概要</h1>
          <p className={styles.heroSubtitle}>
            学術的知見と実践的スキルを融合し、<br />
            企業の未来を切り拓くテクノロジーチーム
          </p>
        </div>
      </section>

      {/* 会社基本情報 */}
      <AnimatedSection className={styles.basicInfo}>
        <div className="container">
          <h2 className="section-title">基本情報</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <IoBusinessOutline className={styles.infoIcon} />
              <h3>会社名</h3>
              <p>Inspire Up</p>
            </div>
            <div className={styles.infoCard}>
              <IoCalendarOutline className={styles.infoIcon} />
              <h3>設立</h3>
              <p>2024年</p>
            </div>
            <div className={styles.infoCard}>
              <IoPeopleOutline className={styles.infoIcon} />
              <h3>メンバー構成</h3>
              <p>現役大学生 3名</p>
            </div>
            <div className={styles.infoCard}>
              <IoLocationOutline className={styles.infoIcon} />
              <h3>所在地</h3>
              <p>東京都内</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ミッション・ビジョン */}
      <AnimatedSection className={styles.mission}>
        <div className="container">
          <h2 className="section-title">ミッション・ビジョン</h2>
          <div className={styles.missionContent}>
            <div className={styles.missionCard}>
              <FaLightbulb className={styles.missionIcon} />
              <h3>ミッション</h3>
              <p>
                最新のDX・AI技術を活用し、企業の課題解決と成長を支援することで、
                社会全体のデジタル変革を加速させます。
              </p>
            </div>
            <div className={styles.missionCard}>
              <FaBrain className={styles.missionIcon} />
              <h3>ビジョン</h3>
              <p>
                学術的な知見と実践的な開発スキルを融合し、
                従来の枠にとらわれない革新的なソリューションを提供します。
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* チームの特徴 */}
      <AnimatedSection className={styles.teamFeatures}>
        <div className="container">
          <h2 className="section-title">チームの特徴</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <FaUniversity className={styles.featureIcon} />
              <h3>トップ大学の学生</h3>
              <p>早稲田大学・東京大学の現役学生で構成され、高い学術的基盤を持ちます。</p>
            </div>
            <div className={styles.featureCard}>
              <FaCode className={styles.featureIcon} />
              <h3>実践的スキル</h3>
              <p>42Tokyoでの実践的プログラミング教育を受け、実務レベルの開発力を習得。</p>
            </div>
            <div className={styles.featureCard}>
              <FaBrain className={styles.featureIcon} />
              <h3>高い知的能力</h3>
              <p>Mensa会員を含む高い知的能力で、複雑な課題を論理的に解決します。</p>
            </div>
            <div className={styles.featureCard}>
              <FaLightbulb className={styles.featureIcon} />
              <h3>柔軟な発想力</h3>
              <p>既存の概念にとらわれない柔軟な発想で、革新的なソリューションを創出。</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 提供サービス概要 */}
      <AnimatedSection className={styles.services}>
        <div className="container">
          <h2 className="section-title">提供サービス概要</h2>
          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <h3>DX推進支援</h3>
              <p>業務プロセスのデジタル化と効率化を通じて、企業のデジタル変革を支援します。</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>AI導入・開発</h3>
              <p>最新のAI技術を活用したシステム開発と導入支援を行います。</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>業務自動化</h3>
              <p>定型業務の自動化により、人的リソースの最適化を実現します。</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Webシステム開発</h3>
              <p>企業のニーズに合わせたカスタムWebアプリケーションを開発します。</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
