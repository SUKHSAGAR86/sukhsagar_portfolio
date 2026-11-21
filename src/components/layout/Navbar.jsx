'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/portfolioData';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'h-[70px] bg-dark-100/80 backdrop-blur-xl border-borderSubtle shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'h-[76px] bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-wide h-full mx-auto px-5 sm:px-7 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link href="/" className="flex items-center gap-3.5 group" onClick={() => setMobileMenuOpen(false)}>
          <span className="w-10 h-10 rounded-md bg-gradient-to-br from-surface-2 to-surface-3 border border-borderHover text-accent font-headline font-bold text-[1.05rem] flex items-center justify-center shadow-[0_0_15px_rgba(166,184,255,0.15)] group-hover:-rotate-3 group-hover:scale-105 transition-all">
            SJ
          </span>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-base text-light leading-tight tracking-tight">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[0.7rem] text-muted uppercase tracking-wider">
              Full-Stack Engineer
            </span>
          </div>
        </Link>

        {/* Live Availability Pill */}
        <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint/10 border border-mint/25 text-mint font-mono text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
          </span>
          <span>NIC / MeitY Experienced</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center" aria-label="Main Navigation">
          <ul className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-surface-1/70 border border-borderSubtle backdrop-blur-md">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="px-4 py-1.5 rounded-full text-[0.88rem] font-medium text-light-dim hover:text-light hover:bg-light/10 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs font-medium text-accent bg-accent/15 border border-accent/25 hover:bg-accent/25 hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(166,184,255,0.25)] transition-all"
            title="Download Sukhsagar Jangde's CV (PDF)"
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>

          <a 
            href="#contact" 
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-headline text-xs sm:text-sm font-semibold bg-light text-dark hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_4px_18px_rgba(242,240,233,0.25)] transition-all"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-light bg-surface-2 border border-borderSubtle hover:bg-surface-3 hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[70px] bottom-0 bg-dark/95 backdrop-blur-2xl z-40 transition-all duration-300 flex flex-col justify-between p-6 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex items-center gap-2 p-3 rounded-lg bg-surface-1 border border-borderSubtle font-mono text-xs text-mint">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
          </span>
          <span>Based in Raipur, CG • Available for Roles</span>
        </div>

        <nav className="flex flex-col gap-3 my-auto py-6" aria-label="Mobile Navigation">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-baseline gap-4 py-2.5 border-b border-light/5 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="font-mono text-xs text-accent">0{idx + 1}</span>
              <span className="font-headline text-2xl font-bold text-light tracking-tight">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4 pt-4 border-t border-borderSubtle">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-accent text-dark font-headline font-bold text-sm"
          >
            <FileText size={18} />
            <span>Download Official Resume</span>
          </a>
          <div className="flex items-center justify-center gap-4 text-muted font-mono text-xs">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
            <span>•</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
            <span>•</span>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-accent">Email</a>
          </div>
        </div>
      </div>
    </header>
  );
}
