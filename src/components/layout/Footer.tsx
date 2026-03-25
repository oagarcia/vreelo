import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/">
              <Image
                src="/logo-purple.svg"
                alt="Vreelo - Artificial + Human Intelligence"
                width={140}
                height={40}
                className={styles.logo}
                style={{ width: 'auto' }}
                priority
              />
            </Link>
          </div>
          <div className={styles.links}>
            <div className={styles.column}>
              <h3>Company</h3>
              <Link href="#about">About Us</Link>
              <Link href="#contact">Contact</Link>
            </div>
            <div className={styles.column}>
              <h3>Services</h3>
              <Link href="#sdlc">Software Engineering</Link>
              <Link href="#ai">AI Automation</Link>
            </div>
            <div className={styles.column}>
              <h3>Legal</h3>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} <strong>vreelo</strong>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
