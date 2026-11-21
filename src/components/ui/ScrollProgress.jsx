'use client';

import React, { useEffect, useState } from 'react';

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
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-light/5 z-[110] pointer-events-none" aria-hidden="true">
      <div 
        className="h-full bg-gradient-to-r from-accent to-mint shadow-[0_0_10px_rgba(166,184,255,0.4)] transition-[width] duration-100 ease-linear" 
        style={{ width: `${scrollProgress}%` }} 
      />
    </div>
  );
}
