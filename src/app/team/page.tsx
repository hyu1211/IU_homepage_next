import { AnimatedSection } from '@/components';
import { IoPeopleOutline, IoSchoolOutline, IoCodeSlashOutline, IoTrophyOutline } from "react-icons/io5";
import { FaUniversity, FaBrain, FaCode, FaLightbulb, FaRocket, FaGraduationCap } from "react-icons/fa";
import styles from './Team.module.css';

export const metadata = {
  title: 'チーム紹介 | Inspire Up - 学生によるDX・AI導入支援',
  description: '早稲田大学・東京大学の現役学生3名で構成されるInspire Upのチームメンバー紹介。42TokyoやMensa会員といった多様な背景を持つメンバーをご紹介します。',
  keywords: ['チーム紹介', 'メンバー', 'Inspire Up', '早稲田大学', '東京大学', '42Tokyo', 'Mensa', '学生起業'],
};

export default function TeamPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>チーム紹介</h1>
          <p className={styles.heroSubtitle}>
            多様な背景と専門性を持つ<br />
            3名の現役大学生メンバー
          </p>
        </div>
      </section>

      {/* チーム概要 */}
      <AnimatedSection className={styles.overview}>
        <div className="container">
          <h2 className="section-title">チーム概要</h2>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <p>
                Inspire Upは、早稲田大学・東京大学の現役学生3名で構成されるテクノロジーチームです。
                各メンバーが異なる専門分野と経験を持ち、それぞれの強みを活かして
                お客様の課題解決に取り組んでいます。
              </p>
              <p>
                42Tokyoでの実践的なプログラミング教育、Mensa会員としての高い知的能力、
                学術研究での深い知見など、多様なバックグラウンドを持つメンバーが
                革新的なソリューションを提供します。
              </p>
            </div>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <IoPeopleOutline className={styles.statIcon} />
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>メンバー</span>
              </div>
              <div className={styles.statItem}>
                <IoSchoolOutline className={styles.statIcon} />
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>大学</span>
              </div>
              <div className={styles.statItem}>
                <IoCodeSlashOutline className={styles.statIcon} />
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>技術分野</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* メンバー紹介 */}
      <AnimatedSection className={styles.members}>
        <div className="container">
          <h2 className="section-title">メンバー紹介</h2>
          <div className={styles.membersGrid}>
            <div className={styles.memberCard}>
              <div className={styles.memberAvatar}>
                <FaCode className={styles.avatarIcon} />
              </div>
              <h3 className={styles.memberName}>メンバーA</h3>
              <p className={styles.memberRole}>リードエンジニア</p>
              <div className={styles.memberDetails}>
                <div className={styles.memberInfo}>
                  <FaUniversity className={styles.infoIcon} />
                  <span>早稲田大学</span>
                </div>
                <div className={styles.memberInfo}>
                  <FaCode className={styles.infoIcon} />
                  <span>42Tokyo 在籍</span>
                </div>
                <div className={styles.memberInfo}>
                  <FaBrain className={styles.infoIcon} />
                  <span>Mensa 会員</span>
                </div>
              </div>
              <p className={styles.memberDescription}>
                フルスタック開発とAI実装を得意とし、複雑なシステム設計から実装まで一貫して担当。
                論理的思考力を活かした効率的な問題解決が強みです。
              </p>
            </div>

            <div className={styles.memberCard}>
              <div className={styles.memberAvatar}>
                <FaLightbulb className={styles.avatarIcon} />
              </div>
              <h3 className={styles.memberName}>メンバーB</h3>
              <p className={styles.memberRole}>プロダクトマネージャー</p>
              <div className={styles.memberDetails}>
                <div className={styles.memberInfo}>
                  <FaUniversity className={styles.infoIcon} />
                  <span>東京大学</span>
                </div>
                <div className={styles.memberInfo}>
                  <FaGraduationCap className={styles.infoIcon} />
                  <span>学術研究</span>
                </div>
                <div className={styles.memberInfo}>
                  <FaRocket className={styles.infoIcon} />
                  <span>事業企画</span>
                </div>
              </div>
              <p className={styles.memberDescription}>
                ビジネス戦略とプロダクト企画を担当。学術的バックグラウンドを活かした
                データ分析と市場調査により、最適なソリューションを提案します。
              </p>
            </div>

            <div className={styles.memberCard}>
              <div className={styles.memberAvatar}>
                <FaBrain className={styles.avatarIcon} />
              </div>
              <h3 className={styles.memberName}>メンバーC</h3>
              <p className={styles.memberRole}>テクニカルアドバイザー</p>
              <div className={styles.memberDetails}>
                <div className={styles.memberInfo}>
                  <FaUniversity className={styles.infoIcon} />
                  <span>早稲田大学</span>
                </div>
                <div className={styles.memberInfo}>
                  <FaCode className={styles.infoIcon} />
                  <span>システム設計</span>
                </div>
                <div className={styles.memberInfo}>
                  <IoTrophyOutline className={styles.infoIcon} />
                  <span>技術コンサル</span>
                </div>
              </div>
              <p className={styles.memberDescription}>
                システムアーキテクチャとセキュリティ設計を専門とし、
                スケーラブルで安全なシステム構築をサポートします。
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* チームの強み */}
      <AnimatedSection className={styles.strengths}>
        <div className="container">
          <h2 className="section-title">チームの強み</h2>
          <div className={styles.strengthsGrid}>
            <div className={styles.strengthCard}>
              <FaUniversity className={styles.strengthIcon} />
              <h3>学術的基盤</h3>
              <p>
                トップレベル大学での学習により培われた論理的思考力と
                問題解決能力を実務に活用しています。
              </p>
            </div>
            <div className={styles.strengthCard}>
              <FaCode className={styles.strengthIcon} />
              <h3>実践的スキル</h3>
              <p>
                42Tokyoでの実践的プログラミング教育により、
                現場で即戦力となる技術力を身につけています。
              </p>
            </div>
            <div className={styles.strengthCard}>
              <FaBrain className={styles.strengthIcon} />
              <h3>高い知的能力</h3>
              <p>
                Mensa会員を含む高いIQを持つメンバーにより、
                複雑な課題も論理的かつ効率的に解決します。
              </p>
            </div>
            <div className={styles.strengthCard}>
              <FaRocket className={styles.strengthIcon} />
              <h3>柔軟性とスピード</h3>
              <p>
                少数精鋭チームならではの機動力で、
                変化する要求に迅速かつ柔軟に対応します。
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 協働スタイル */}
      <AnimatedSection className={styles.workStyle}>
        <div className="container">
          <h2 className="section-title">協働スタイル</h2>
          <div className={styles.workStyleContent}>
            <div className={styles.workStyleItem}>
              <h3>アジャイル開発</h3>
              <p>短いスプリントでの開発により、お客様のフィードバックを迅速に反映し、より良いプロダクトを提供します。</p>
            </div>
            <div className={styles.workStyleItem}>
              <h3>密なコミュニケーション</h3>
              <p>お客様との定期的な進捗共有と相談により、期待値のずれを防ぎ、満足度の高い成果物を納品します。</p>
            </div>
            <div className={styles.workStyleItem}>
              <h3>継続的改善</h3>
              <p>プロジェクト完了後も継続的なサポートと改善提案により、長期的なパートナーシップを構築します。</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
