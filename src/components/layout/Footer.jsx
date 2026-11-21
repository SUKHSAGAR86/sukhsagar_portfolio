'use client';

import React, { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Phone, Clock, FileText } from 'lucide-react';

export default function Footer() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Indian Standard Time (IST, UTC+5:30)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat('en-IN', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-1 border-t border-borderSubtle relative overflow-hidden">
      {/* Big Editorial Marquee / Statement */}
      <div className="py-10 border-b border-light/[0.05] bg-dark/50">
        <div className="max-w-content mx-auto px-5 sm:px-7 text-center">
          <div className="font-headline text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-light">
            DIGITAL CRAFT <span className="bg-gradient-to-r from-accent to-mint bg-clip-text text-transparent not-italic">×</span> CREATIVE ENGINEERING
          </div>
        </div>
      </div>

      <div className="max-w-content mx-auto px-5 sm:px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr] gap-10 lg:gap-14 py-16">
          {/* Brand Info */}
          <div className="flex flex-col md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3.5 mb-5">
              <span className="w-11 h-11 rounded-md bg-surface-2 border border-borderHover text-accent font-headline font-bold text-lg flex items-center justify-center shadow-[0_0_15px_rgba(166,184,255,0.15)]">
                SJ
              </span>
              <div className="flex flex-col">
                <div className="font-headline font-bold text-lg text-light">{personalInfo.name}</div>
                <div className="font-mono text-[0.72rem] text-muted uppercase">Software Developer &amp; Full-Stack Engineer</div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-light-dim leading-relaxed max-w-md mb-6">
              Specializing in high-reliability React.js interfaces, secure RESTful APIs with Node.js &amp; Express, and optimized relational database systems across the NIC / MeitY government ecosystem.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-light/[0.06] w-fit">
              <Clock size={14} className="text-mint" />
              <span className="font-mono text-xs text-muted">Raipur, India (IST):</span>
              <span className="font-mono text-xs font-semibold text-mint">{localTime || 'Loading...'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <div className="font-mono text-xs uppercase text-muted tracking-widest mb-5 font-semibold">
              Navigation
            </div>
            <ul className="flex flex-col gap-3">
              <li><a href="#hero" className="text-sm text-light-dim hover:text-accent hover:translate-x-1 inline-block transition-all">Top Overview</a></li>
              <li><a href="#about" className="text-sm text-light-dim hover:text-accent hover:translate-x-1 inline-block transition-all">About &amp; Principles</a></li>
              <li><a href="#experience" className="text-sm text-light-dim hover:text-accent hover:translate-x-1 inline-block transition-all">Professional Experience</a></li>
              <li><a href="#projects" className="text-sm text-light-dim hover:text-accent hover:translate-x-1 inline-block transition-all">Selected Projects</a></li>
              <li><a href="#skills" className="text-sm text-light-dim hover:text-accent hover:translate-x-1 inline-block transition-all">Tech Stack &amp; Skills</a></li>
              <li><a href="#education" className="text-sm text-light-dim hover:text-accent hover:translate-x-1 inline-block transition-all">Academics &amp; Certs</a></li>
              <li><a href="#contact" className="text-sm text-light-dim hover:text-accent hover:translate-x-1 inline-block transition-all">Direct Contact</a></li>
            </ul>
          </div>

          {/* Connect & Documents */}
          <div className="flex flex-col">
            <div className="font-mono text-xs uppercase text-muted tracking-widest mb-5 font-semibold">
              Connect &amp; Verification
            </div>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-light-dim hover:text-accent transition-colors"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-light-dim hover:text-accent transition-colors"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2.5 text-sm text-light-dim hover:text-accent transition-colors">
                  <Mail size={16} />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2.5 text-sm text-light-dim hover:text-accent transition-colors">
                  <Phone size={16} />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-mint font-semibold hover:underline"
                >
                  <FileText size={16} />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-7 border-t border-light/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted text-center sm:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved. Engineered with Next.js &amp; Tailwind CSS.
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 font-mono text-xs text-light-dim bg-surface-2 border border-borderSubtle px-4 py-2 rounded-full hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
