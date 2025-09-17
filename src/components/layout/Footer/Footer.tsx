import Link from 'next/link';
import styles from './Footer.module.css';
import { FOOTER_NAVIGATION, SITE_CONFIG } from '@/constants';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandColumn}>
          <div className={styles.logo}>Inspire Up</div>
          <div className={styles.address}>
            <p>{SITE_CONFIG.contact.address}</p>
            <p>
              <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>
            </p>
            <p>
              <a href={`tel:${SITE_CONFIG.contact.phone}`}>{SITE_CONFIG.contact.phone}</a>
            </p>
          </div>
        </div>

        <nav className={styles.linkColumns} aria-label="フッターナビゲーション">
          <div className={styles.column}>
            <div className={styles.columnTitle}>事業・サービス</div>
            <ul>
              {FOOTER_NAVIGATION.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.columnTitle}>会社情報</div>
            <ul>
              <li><Link href="/company">会社概要</Link></li>
              <li><Link href="/team">チーム</Link></li>
              <li><Link href="/careers">採用情報</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.columnTitle}>サポート</div>
            <ul>
              {FOOTER_NAVIGATION.support.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <span>© {new Date().getFullYear()} Inspire Up</span>
          <div className={styles.langs}>
            <button type="button">JP</button>
            <span>/</span>
            <button type="button">EN</button>
          </div>
        </div>
      </div>
    </footer>
  );
}