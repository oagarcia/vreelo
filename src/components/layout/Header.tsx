"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo-purple.svg"
            alt="Vreelo - Artificial + Human Intelligence"
            width={160}
            height={45}
            className={styles.logo}
            style={{ width: 'auto' }}
            priority
          />
        </Link>
        <nav className={styles.nav}>
          <Link href="#services" className={styles.navLink}>Services</Link>
          <Link href="#methodology" className={styles.navLink}>Methodology</Link>
          <Link href="#contact" className={`${styles.navLink} ${styles.ctaButton}`}>Partner with us</Link>
        </nav>
        
        {/* Mobile Hamburger Button */}
        <button 
          className={styles.mobileMenuBtn} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.lineOpen1 : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.lineOpen2 : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.lineOpen3 : ''}`}></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <nav className={styles.mobileNavLinks}>
          <Link href="#services" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Services</Link>
          <Link href="#methodology" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Methodology</Link>
          <Link href="#contact" className={`${styles.mobileNavLink} ${styles.mobileCtaButton}`} onClick={toggleMobileMenu}>Partner with us</Link>
        </nav>
      </div>
    </header>
  );
}
