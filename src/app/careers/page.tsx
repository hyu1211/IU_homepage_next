import { AnimatedSection } from '@/components';
import { IoRocketOutline, IoPeopleOutline, IoSchoolOutline, IoTimeOutline, IoLocationOutline, IoTrophyOutline } from "react-icons/io5";
import { FaCode, FaLightbulb, FaBrain, FaHandshake, FaGraduationCap, FaUsers, FaRocket } from "react-icons/fa";
import Link from 'next/link';
import styles from './Careers.module.css';

export const metadata = {
  title: '採用情報 | Inspire Up - 学生によるDX・AI導入支援',
  description: 'Inspire Upでは、DXとAI技術で社会を変革したい学生メンバーを募集しています。一緒に企業の未来を創造しませんか？',
  keywords: ['採用情報', 'インターン', 'エンジニア募集', 'Inspire Up', 'DX', 'AI', '学生起業', '早稲田', '東京大学'],
};

export default function CareersPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>採用情報</h1>
          <p className={styles.heroSubtitle}>
            一緒に企業の未来を創造し、<br />
            社会にインパクトを与えませんか？
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaButton}>
              応募・お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* なぜInspire Upで働くのか */}
      <AnimatedSection className={styles.whyUs}>
        <div className="container">
          <h2 className="section-title">なぜInspire Upなのか</h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <IoRocketOutline className={styles.reasonIcon} />
              <h3>最先端技術への挑戦</h3>
              <p>AI、DX、自動化など最新の技術トレンドに触れながら、実際のビジネス課題解決に取り組めます。</p>
            </div>
            <div className={styles.reasonCard}>
              <FaLightbulb className={styles.reasonIcon} />
              <h3>創造的な環境</h3>
              <p>既存の枠にとらわれない自由な発想で、革新的なソリューションを生み出すことができます。</p>
            </div>
            <div className={styles.reasonCard}>
              <FaUsers className={styles.reasonIcon} />
              <h3>少数精鋭チーム</h3>
              <p>一人ひとりの意見が重視され、プロジェクトに大きな影響を与えることができます。</p>
            </div>
            <div className={styles.reasonCard}>
              <FaGraduationCap className={styles.reasonIcon} />
              <h3>成長機会</h3>
              <p>実際の企業案件を通じて、技術力だけでなくビジネススキルも同時に身につけられます。</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 募集職種 */}
      <AnimatedSection className={styles.positions}>
        <div className="container">
          <h2 className="section-title">募集職種</h2>
          <div className={styles.positionsGrid}>
            <div className={styles.positionCard}>
              <FaCode className={styles.positionIcon} />
              <h3>フルスタックエンジニア</h3>
              <div className={styles.positionDetails}>
                <p><strong>業務内容：</strong></p>
                <ul>
                  <li>Webアプリケーションの設計・開発</li>
                  <li>AI・機械学習システムの実装</li>
                  <li>自動化ツールの開発</li>
                  <li>システムアーキテクチャの設計</li>
                </ul>
                <p><strong>求める人物像：</strong></p>
                <ul>
                  <li>プログラミング経験（言語問わず）</li>
                  <li>新しい技術への学習意欲</li>
                  <li>課題解決への情熱</li>
                </ul>
              </div>
            </div>

            <div className={styles.positionCard}>
              <FaLightbulb className={styles.positionIcon} />
              <h3>プロダクトマネージャー</h3>
              <div className={styles.positionDetails}>
                <p><strong>業務内容：</strong></p>
                <ul>
                  <li>プロダクト企画・戦略立案</li>
                  <li>顧客要件の整理・分析</li>
                  <li>プロジェクト管理・進行</li>
                  <li>市場調査・競合分析</li>
                </ul>
                <p><strong>求める人物像：</strong></p>
                <ul>
                  <li>ビジネス企画への興味</li>
                  <li>論理的思考力</li>
                  <li>コミュニケーション能力</li>
                </ul>
              </div>
            </div>

            <div className={styles.positionCard}>
              <FaBrain className={styles.positionIcon} />
              <h3>AIエンジニア</h3>
              <div className={styles.positionDetails}>
                <p><strong>業務内容：</strong></p>
                <ul>
                  <li>機械学習モデルの開発</li>
                  <li>データ分析・可視化</li>
                  <li>AIシステムの実装・運用</li>
                  <li>最新AI技術の研究・導入</li>
                </ul>
                <p><strong>求める人物像：</strong></p>
                <ul>
                  <li>数学・統計学の基礎知識</li>
                  <li>Python等のプログラミング経験</li>
                  <li>機械学習への興味</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 働き方・環境 */}
      <AnimatedSection className={styles.workEnvironment}>
        <div className="container">
          <h2 className="section-title">働き方・環境</h2>
          <div className={styles.environmentGrid}>
            <div className={styles.environmentCard}>
              <IoTimeOutline className={styles.environmentIcon} />
              <h3>柔軟な勤務時間</h3>
              <p>学業との両立を重視し、個人の都合に合わせた柔軟な働き方が可能です。</p>
            </div>
            <div className={styles.environmentCard}>
              <IoLocationOutline className={styles.environmentIcon} />
              <h3>リモートワーク可能</h3>
              <p>基本的にリモートワークで、必要に応じてオンラインミーティングを実施します。</p>
            </div>
            <div className={styles.environmentCard}>
              <IoSchoolOutline className={styles.environmentIcon} />
              <h3>学習支援</h3>
              <p>技術書籍の購入費用や学習プラットフォームの利用料金を会社が負担します。</p>
            </div>
            <div className={styles.environmentCard}>
              <IoTrophyOutline className={styles.environmentIcon} />
              <h3>成果に応じた報酬</h3>
              <p>プロジェクトの成果や貢献度に応じて、適切な報酬をお支払いします。</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 求める人物像 */}
      <AnimatedSection className={styles.idealCandidate}>
        <div className="container">
          <h2 className="section-title">求める人物像</h2>
          <div className={styles.candidateContent}>
            <div className={styles.candidateList}>
              <div className={styles.candidateItem}>
                <FaBrain className={styles.candidateIcon} />
                <div>
                  <h3>論理的思考力</h3>
                  <p>複雑な問題を整理し、体系的にアプローチできる能力</p>
                </div>
              </div>
              <div className={styles.candidateItem}>
                <FaRocket className={styles.candidateIcon} />
                <div>
                  <h3>チャレンジ精神</h3>
                  <p>新しい技術や未知の領域に積極的に取り組む姿勢</p>
                </div>
              </div>
              <div className={styles.candidateItem}>
                <FaHandshake className={styles.candidateIcon} />
                <div>
                  <h3>協調性</h3>
                  <p>チームメンバーと協力し、共に成長していける人</p>
                </div>
              </div>
              <div className={styles.candidateItem}>
                <FaLightbulb className={styles.candidateIcon} />
                <div>
                  <h3>創造性</h3>
                  <p>既存の枠にとらわれない柔軟な発想力</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 応募方法 */}
      <AnimatedSection className={styles.application}>
        <div className="container">
          <h2 className="section-title">応募方法</h2>
          <div className={styles.applicationContent}>
            <div className={styles.applicationSteps}>
              <div className={styles.stepItem}>
                <span className={styles.stepNumber}>01</span>
                <div className={styles.stepContent}>
                  <h3>お問い合わせ</h3>
                  <p>まずはお気軽にお問い合わせフォームからご連絡ください。</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <span className={styles.stepNumber}>02</span>
                <div className={styles.stepContent}>
                  <h3>カジュアル面談</h3>
                  <p>オンラインでカジュアルな面談を行い、お互いを知る機会を設けます。</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <span className={styles.stepNumber}>03</span>
                <div className={styles.stepContent}>
                  <h3>体験プロジェクト</h3>
                  <p>実際の小規模プロジェクトに参加していただき、働き方を体験。</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <span className={styles.stepNumber}>04</span>
                <div className={styles.stepContent}>
                  <h3>正式参加</h3>
                  <p>お互いが合意できれば、正式にチームメンバーとして参加。</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.applicationCta}>
            <h3>一緒に未来を創造しませんか？</h3>
            <p>ご質問やご相談もお気軽にどうぞ。まずはお話しましょう。</p>
            <Link href="/contact" className={styles.applicationButton}>
              今すぐ応募・相談する
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
