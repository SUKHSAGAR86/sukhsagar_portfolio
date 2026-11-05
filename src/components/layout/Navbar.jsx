'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/portfolioData';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Brand Monogram */}
        <Link href="/" className={styles.brand} onClick={() => setMobileMenuOpen(false)}>
          <span className={styles.brandMonogram}>SJ</span>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Sukhsagar Jangde</span>
            <span className={styles.brandRole}>Full-Stack Engineer</span>
          </div>
        </Link>

        {/* Live Availability Pill */}
        <div className={styles.statusPill}>
          <span className={styles.statusDot}></span>
          <span className={styles.statusText}>NIC / MeitY Experienced</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
            title="Download Sukhsagar Jangde's CV (PDF)"
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>

          <a href="#contact" className={styles.ctaBtn}>
            <span>Let&apos;s Connect</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <div className={styles.mobileDrawerInner}>
          <div className={styles.mobileStatus}>
            <span className={styles.statusDot}></span>
            <span>Based in Raipur, CG • Available for Roles</span>
          </div>

          <nav className={styles.mobileNavLinks} aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <span className={styles.mobileNavNumber}>0{idx + 1}</span>
                <span className={styles.mobileNavTitle}>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className={styles.mobileDrawerFooter}>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileResumeBtn}
            >
              <FileText size={18} />
              <span>Download Official Resume</span>
            </a>
            <div className={styles.mobileSocialLinks}>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`}>Email</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
