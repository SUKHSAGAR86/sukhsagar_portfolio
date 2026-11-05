'use client';

import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolioData';
import { ArrowDownRight, FileText, ArrowRight, ShieldCheck, Database, Terminal, Code2 } from 'lucide-react';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.heroSection} id="hero">
      <div className="container-wide">
        <div className={styles.heroGrid}>
          {/* Left Column: Editorial Headline & Identity */}
          <div className={styles.heroContent}>
            {/* Top Eyebrow Badge */}
            <div className={styles.eyebrowWrapper}>
              <div className="eyebrow eyebrow--mint">
                <span className={styles.pulseDot}></span>
                <span>NIC / MeitY Ecosystem Engineer</span>
              </div>
              <span className={styles.systemTag}>VERIFIED 2+ YRS PRO</span>
            </div>

            {/* Main Headline */}
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine}>Architecting</span>
              <span className={styles.titleLineHighlight}>
                <em>Mission-Critical</em> Systems
              </span>
              <span className={styles.titleLine}>&amp; Digital Craft.</span>
            </h1>

            {/* Role & Bio summary */}
            <p className={styles.heroDescription}>
              I&apos;m <strong>{personalInfo.name}</strong>, a Software Developer and Full-Stack Engineer specializing in high-throughput React/Next.js interfaces, secure Node.js APIs, and complex relational databases across the NIC and MeitY government ecosystem.
            </p>

            {/* Action Buttons */}
            <div className={styles.heroActions}>
              <a href="#projects" className="btn btn--primary btn--lg">
                <span>View Selected Work</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--lg"
              >
                <FileText size={18} />
                <span>Download Resume (PDF)</span>
              </a>

              <a href="#contact" className="btn btn--ghost btn--lg">
                <span>Contact Me</span>
                <ArrowDownRight size={18} />
              </a>
            </div>

            {/* Quick Metrics Ribbon */}
            <div className={styles.metricsRibbon}>
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className={styles.metricItem}>
                  <div className={styles.metricValue}>{stat.value}</div>
                  <div className={styles.metricLabel}>{stat.label}</div>
                  <div className={styles.metricSub}>{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-End Framed Photo & Interactive Identity Card */}
          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              {/* Technical Frame Crosshairs */}
              <div className={`${styles.crosshair} ${styles.crosshairTL}`}>+</div>
              <div className={`${styles.crosshair} ${styles.crosshairTR}`}>+</div>
              <div className={`${styles.crosshair} ${styles.crosshairBL}`}>+</div>
              <div className={`${styles.crosshair} ${styles.crosshairBR}`}>+</div>

              {/* Status Header inside card */}
              <div className={styles.cardHeader}>
                <div className={styles.cardHeaderLeft}>
                  <div className={styles.terminalIcon}>
                    <Code2 size={14} />
                  </div>
                  <span className={styles.coordinates}>21.2514° N, 81.6296° E • RAIPUR</span>
                </div>
                <div className={styles.badgeGov}>NIC e-Courts Ecosystem</div>
              </div>

              {/* Authentic Photo Container */}
              <div className={styles.imageContainer}>
                <Image
                  src={personalInfo.avatarImage}
                  alt="Sukhsagar Jangde at High Court of Chhattisgarh campus"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                  className={styles.heroImage}
                />
                <div className={styles.imageOverlayGradient}></div>
                
                {/* Embedded Live Role Tag on the image */}
                <div className={styles.floatingRoleTag}>
                  <div className={styles.roleTagIcon}>
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <div className={styles.roleTagTitle}>High Court of Chhattisgarh</div>
                    <div className={styles.roleTagSubtitle}>CIS Periphery Engineering</div>
                  </div>
                </div>
              </div>

              {/* Technical Specs Footer */}
              <div className={styles.cardFooter}>
                <div className={styles.techChip}>
                  <Database size={13} />
                  <span>MSSQL / MySQL</span>
                </div>
                <div className={styles.techChip}>
                  <Terminal size={13} />
                  <span>Node.js / Express</span>
                </div>
                <div className={styles.techChip}>
                  <ShieldCheck size={13} />
                  <span>RBAC &amp; SHA-256</span>
                </div>
              </div>
            </div>

            {/* Ambient Background Glow for Hero Visual */}
            <div className={styles.visualGlow}></div>
          </div>
        </div>

        {/* Bottom scroll prompt */}
        <div className={styles.scrollIndicator}>
          <a href="#about" aria-label="Scroll to about section">
            <span className={styles.scrollText}>SCROLL TO EXPLORE ARCHITECTURE</span>
            <div className={styles.scrollIconWrapper}>
              <div className={styles.scrollDot}></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
