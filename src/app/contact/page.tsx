// アイコンをインポートします
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FaLine } from "react-icons/fa";
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div className="section container">
      <h1 className="section-title">お問い合わせ</h1>
      <div className={styles.contactWrapper}>
        <p className={styles.intro}>
          DX推進やAI導入に関するご相談から、具体的なシステム開発まで、お客様のあらゆる課題に対して最適なソリューションをご提案いたします。<br />
          <strong>初回相談は無料</strong>ですので、お気軽にお問い合わせください。
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>✓ 初回相談無料</div>
          <div className={styles.feature}>✓ 24時間以内に返信</div>
          <div className={styles.feature}>✓ オンライン・対面両方対応</div>
        </div>
        <div className={styles.contactInfo}>
          {/* Email */}
          <div className={styles.infoItem}>
            <MdOutlineEmail className={styles.contactIcon} />
            <div className={styles.infoText}>
              <strong>Email</strong>
              <a href="mailto:inspireup.w.official@gmail.com">inspireup.w.official@gmail.com</a>
            </div>
          </div>
          {/* Phone */}
          <div className={styles.infoItem}>
            <MdOutlinePhone className={styles.contactIcon} />
            <div className={styles.infoText}>
              <strong>Phone</strong>
              <a href="tel:080-2342-4513">080-2342-4513</a>
            </div>
          </div>
          {/* LINE */}
          <div className={styles.infoItem}>
            <FaLine className={styles.contactIcon} />
            <div className={styles.infoText}>
              <strong>Official LINE</strong>
              <a href="https://lin.ee/zrudU0a" target="_blank" rel="noopener noreferrer">LINEで相談する</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}