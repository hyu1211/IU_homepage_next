'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isVisible ? styles.headerVisible : styles.headerHidden}`}>
      <nav className={`${styles.nav} container`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="https://res.cloudinary.com/dagugihav/image/upload/v1757590201/Adobe_Express_-_file_3_yaomdl.png"
            alt="Inspire Up Icon"
            width={40}
            height={40}
            priority
          />
          <Image
            src="https://res.cloudinary.com/dagugihav/image/upload/v1757591043/1_h473ft.png"
            alt="Inspire Up Text"
            className={styles.logoText} /* ← このクラスを追加 */
            width={140} /* 初期表示用の幅も少し調整 */
            height={35}  /* 初期表示用の高さも少し調整 */
            style={{ marginLeft: '8px' }}
            priority
          />
        </Link>
        <ul className={styles.navList}>
          <li><Link href="/">ホーム <span>/ Home</span></Link></li>
          <li><Link href="/#about">会社概要 <span>/ About</span></Link></li>
          <li><Link href="/#solution">提供サービス <span>/ Services</span></Link></li>
          <li><Link href="/#strength">特長・強み <span>/ Features</span></Link></li>
          <li><Link href="/#works">実績紹介 <span>/ Works</span></Link></li>
          <li><Link href="/contact">お問い合わせ <span>/ Contact</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}