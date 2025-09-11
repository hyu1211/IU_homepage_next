import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { IoRocketOutline, IoCodeSlashOutline, IoExtensionPuzzleOutline, IoBarChartOutline, IoPeopleOutline } from "react-icons/io5";
import { FaLightbulb, FaBrain, FaRobot, FaBullhorn, FaTools, FaLaptopCode } from "react-icons/fa";
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`${styles.heroContent} container`}>
          <h1 className={styles.heroTitle}>
            DX推進とAI導入で<br />企業の未来を加速する
          </h1>
          <p className={styles.heroSubtitle}>
            企業のDX推進、AI導入、業務自動化・効率化を支援し<br />ビジネスの持続的な成長をサポートします。
          </p>
          {/* <Link href="/contact" className={styles.ctaButton}>
            まずは無料で相談する
          </Link> */}
        </div>
      </section>

      {/* 会社概要セクション */}
      <AnimatedSection id="about" className={styles.aboutSection}>
        <div className="container">
          <h2 className="section-title">会社概要</h2> {/* ← 日本語表記に */}
          <div className={styles.aboutContent}>
            <IoPeopleOutline className={styles.aboutIcon} />
            <p>
              Inspire Upは、早稲田大学・東京大学の現役学生3名で活動するテクノロジーチームです。メンバーは「42Tokyo」在籍者やMensa会員といった多様な背景を持ち、学術的な知見と実践的な開発スキルを融合させ、お客様の課題解決に貢献します。
            </p>
            <Link href="/about" className={styles.simpleButton}>
              私たちについて
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* 提供できる価値セクション */}
      <AnimatedSection id="solution" className={styles.solutionSection}>
        <div className="container">
          <h2 className="section-title">提供サービス</h2> {/* ← 日本語表記に */}
          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <FaLaptopCode className={styles.solutionIcon}/>
              <h3>DX推進の支援</h3>
              <p>業務フローをデジタル化し、効率的で透明性の高い仕組みを構築します。</p>
            </div>
            <div className={styles.solutionCard}>
              <FaRobot className={styles.solutionIcon}/>
              <h3>AI導入による競争力強化</h3>
              <p>最新AI技術で顧客対応、自動化、データ活用などを高次元で実現します。</p>
            </div>
            <div className={styles.solutionCard}>
              <IoExtensionPuzzleOutline className={styles.solutionIcon}/>
              <h3>業務自動化・効率化</h3>
              <p>定型業務を自動化し、工数削減と人的リソースの最適化を実現します。</p>
            </div>
            <div className={styles.solutionCard}>
              <IoBarChartOutline className={styles.solutionIcon}/>
              <h3>業界トップクラスのコストパフォーマンス</h3>
              <p>若手チームの強みを活かし、高品質なソリューションをリーズナブルに提供します。</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 私たちの強みセクション */}
      <AnimatedSection id="strength" className={styles.strengthSection}>
        <div className="container">
          <h2 className="section-title">特長・強み</h2> {/* ← 日本語表記に */}
          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}><IoCodeSlashOutline /></div>
              <div className={styles.textWrapper}>
                <h3>最新技術への高い適応力</h3>
                <p>常に最新のAI・DX技術を学び、実際のビジネス課題に応用しています。</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}><IoRocketOutline /></div>
              <div className={styles.textWrapper}>
                <h3>柔軟かつスピーディーな開発</h3>
                <p>少数精鋭チームならではのフットワークで、要望に迅速かつ的確に対応可能です。</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}><FaLightbulb /></div>
              <div className={styles.textWrapper}>
                <h3>独自の発想と専門性</h3>
                <p>学術研究と現場実装の両輪で活動し、従来の枠にとらわれない解決策を提供します。</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}><FaBrain /></div>
              <div className={styles.textWrapper}>
                <h3>高い知的能力と論理的思考力</h3>
                <p>42 TokyoやMensaでの経験を背景に、複雑な課題を論理的に整理し、最適なソリューションを設計できます。</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 実績・導入事例セクション */}
      <AnimatedSection id="works" className={styles.worksSection}>
        <div className="container">
          <h2 className="section-title">実績紹介</h2> {/* ← 日本語表記に */}
          <div className={styles.worksGrid}>
            <div className={styles.worksCard}>
              <div className={styles.worksIcon}><FaBullhorn/></div>
              <h4>フォーム営業自動化ツール「Salesbot」</h4>
              <p>ボタン一つで1日1万件以上のフォーム営業を自動化。150万件以上の営業リストも使い放題で、営業効率を飛躍的に向上させます。</p>
              <Link href="/salesbot" className={styles.worksLink}>詳しく見る</Link>
            </div>
            <div className={styles.worksCard}>
              <div className={styles.worksIcon}><FaRobot/></div>
              <h4>AI開発・導入の取り組み</h4>
              <p>ECサイトのAIチャットボット、高齢者向け音声チャットアプリ、教材スライド自動生成サービスなど、多様なAIソリューションを開発・提供しています。</p>
            </div>
            <div className={styles.worksCard}>
              <div className={styles.worksIcon}><FaTools/></div>
              <h4>その他の取り組み</h4>
              <p>LINE自動予約システム、シフト自動生成、SNS自動運用、スクレイピング、Excel業務自動化(VBA)、HP制作など、幅広いニーズに対応します。</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}