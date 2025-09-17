'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu, IoClose } from "react-icons/io5"; // ハンバーガーメニュー用のアイコンをインポート
import styles from './Header.module.css';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // メニューの開閉状態を管理
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

  // メニューの開閉を切り替える関数
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            className={styles.logoText}
            width={140}
            height={35}
            style={{ marginLeft: '8px' }}
            priority
          />
        </Link>

        {/* ハンバーガーメニューボタン */}
        <div className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </div>

        {/* ナビゲーションリスト */}
        <ul className={`${styles.navList} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <li><Link href="/" onClick={toggleMenu}>ホーム <span>/ Home</span></Link></li>
          <li><Link href="/company" onClick={toggleMenu}>会社概要 <span>/ Company</span></Link></li>
          <li><Link href="/team" onClick={toggleMenu}>チーム <span>/ Team</span></Link></li>
          <li><Link href="/services" onClick={toggleMenu}>サービス <span>/ Services</span></Link></li>
          <li><Link href="/careers" onClick={toggleMenu}>採用情報 <span>/ Careers</span></Link></li>
          <li><Link href="/contact" onClick={toggleMenu}>お問い合わせ <span>/ Contact</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}