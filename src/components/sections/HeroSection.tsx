"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      className={styles.hero}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      <div className={styles.gridBackground}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.title} animate-slide-up`}>
            Engineering <br />
            <span className={styles.highlight}><span className={styles.extraHighlight}>Optimized</span> Insights</span>
          </h1>
          <p className={`${styles.subtitle} animate-slide-up delay-100`}>
            We build robust software and integrate AI automations to transform
            your operations. A true partnership balancing powerful technology
            and deep human creativity.
          </p>
          <div className={`${styles.actions} animate-fade-in delay-200`}>
            <Link href="#contact" className={styles.primaryButton}>
              Start a Project
            </Link>
            <Link href="#services" className={styles.secondaryButton}>
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
