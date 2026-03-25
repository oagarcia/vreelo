import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.svg"
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
      </div>
    </header>
  );
}
