import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.info}>
          <h3 className={styles.footerLogo}>Inspire Up</h3> {/* [cite: 94] */}
          <p>
            Email: <a href="mailto:inspireup.w.official@gmail.com">inspireup.w.official@gmail.com</a> {/* [cite: 102, 103] */}
          </p>
          <p>
            TEL: <a href="tel:080-2342-4513">080-2342-4513</a> {/* [cite: 100, 101] */}
          </p>
        </div>
        <div className={styles.links}>
          <Link href="/about">私たちについて</Link>
          <Link href="/services">事業内容</Link>
          <Link href="/contact">お問い合わせ</Link>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Inspire Up. All Rights Reserved.
      </div>
    </footer>
  );
}