'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Phone, Clock, FileText } from 'lucide-react';
import styles from './Footer.module.scss';

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
    <footer className={styles.footer}>
      {/* Big Editorial Marquee / Statement */}
      <div className={styles.editorialBanner}>
        <div className="container">
          <div className={styles.statementText}>
            DIGITAL CRAFT <span className={styles.accentCross}>×</span> CREATIVE ENGINEERING
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.footerMain}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.brandRow}>
              <span className={styles.monogram}>SJ</span>
              <div className={styles.nameBlock}>
                <div className={styles.brandName}>{personalInfo.name}</div>
                <div className={styles.brandTitle}>Software Developer &amp; Full-Stack Engineer</div>
              </div>
            </div>

            <p className={styles.brandBio}>
              Specializing in high-reliability React.js interfaces, secure RESTful APIs with Node.js &amp; Express, and optimized relational database systems across the NIC / MeitY government ecosystem.
            </p>

            <div className={styles.timeWidget}>
              <Clock size={14} className={styles.clockIcon} />
              <span className={styles.timeLabel}>Raipur, India (IST):</span>
              <span className={styles.timeValue}>{localTime || 'Loading...'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <div className={styles.colTitle}>Navigation</div>
            <ul className={styles.linkList}>
              <li><a href="#hero">Top Overview</a></li>
              <li><a href="#about">About &amp; Principles</a></li>
              <li><a href="#experience">Professional Experience</a></li>
              <li><a href="#projects">Selected Projects</a></li>
              <li><a href="#skills">Tech Stack &amp; Skills</a></li>
              <li><a href="#education">Academics &amp; Certs</a></li>
              <li><a href="#contact">Direct Contact</a></li>
            </ul>
          </div>

          {/* Connect & Documents */}
          <div className={styles.connectCol}>
            <div className={styles.colTitle}>Connect &amp; Verification</div>
            <ul className={styles.socialList}>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
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
                  className={styles.socialLink}
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className={styles.socialLink}>
                  <Mail size={16} />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className={styles.socialLink}>
                  <Phone size={16} />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles.resumeLink}`}
                >
                  <FileText size={16} />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved. Engineered with Next.js &amp; SCSS.
          </div>

          <button
            type="button"
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
