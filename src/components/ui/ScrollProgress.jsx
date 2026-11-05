'use client';

import React, { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.scss';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.progressBarWrapper} aria-hidden="true">
      <div 
        className={styles.progressBar} 
        style={{ width: `${scrollProgress}%` }} 
      />
    </div>
  );
}
