// アイコンをインポートします
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FaLine } from "react-icons/fa";
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div className="section container">
      <h1 className="section-title">Contact Us</h1>
      <div className={styles.contactWrapper}>
        <p className={styles.intro}>
          その他、相談ベースで柔軟に対応可能です。お客様のあらゆる課題に対し、最適な解決策をご提案します。お気軽にご相談ください！
        </p>
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