'use client';

import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolioData';
import { Shield, Cpu, Layers, CheckCircle2, Award, Terminal, ArrowUpRight } from 'lucide-react';
import styles from './About.module.scss';

export default function About() {
  const engineeringPrinciples = [
    {
      icon: <Shield size={24} />,
      title: 'Security-First Architecture',
      desc: 'Government and judicial applications demand uncompromised data integrity. I implement SHA-256 encryption, strict Role-Based Access Control (RBAC), and sanitization pipelines.',
      tag: 'SECURITY & RBAC',
    },
    {
      icon: <Layers size={24} />,
      title: 'Relational Database Precision',
      desc: 'Specialized in MSSQL, MySQL, and PostgreSQL with normalized schemas, stored procedures, and indexing optimized for high-concurrency public records.',
      tag: 'MSSQL / MYSQL / POSTGRES',
    },
    {
      icon: <Cpu size={24} />,
      title: 'High-Throughput React & Next.js',
      desc: 'Crafting responsive, clean-architecture user interfaces that load instantly across low-bandwidth environments with strict adherence to judicial usability standards.',
      tag: 'REACT.JS / NEXT.JS',
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: 'Production-Tested Delivery',
      desc: '8+ full-stack systems built, with 4+ actively deployed in live production environments handling state advertisements, court proceedings, and departmental media.',
      tag: '4+ LIVE DEPLOYMENTS',
    },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <span>01 // DIGITAL CRAFT × CREATIVE ENGINEERING</span>
          </div>
          <h2 className="section-header__title">
            Engineering Systems That <br />
            Operate Where It Matters.
          </h2>
          <p className="section-header__desc">
            Bridging technical depth, rigorous database architecture, and polished frontend craft for public infrastructure and modern web software.
          </p>
        </div>

        {/* Narrative & Bio Grid */}
        <div className={styles.aboutStoryGrid}>
          <div className={styles.storyCard}>
            <h3 className={styles.storyHeading}>
              From Academic Grounding to the Frontlines of Public Digital Infrastructure.
            </h3>
            
            <p className={styles.storyParagraph}>
              I am a Software Developer and Full-Stack Engineer based in <strong>Raipur, Chhattisgarh</strong>. Having completed my <strong>Master of Computer Applications (MCA)</strong> from Pt. Ravishankar Shukla University, I transitioned straight into high-stakes development within the <strong>National Informatics Centre (NIC) and MeitY ecosystem</strong>.
            </p>

            <p className={styles.storyParagraph}>
              My engineering journey is defined by real-world responsibility. Whether optimizing the <strong>Case Information System (CIS Periphery)</strong> for the High Court of Chhattisgarh or engineering the end-to-end <strong>Advertisement Management System</strong> for Chhattisgarh Samvad, I build software that processes public records, financial disbursements, and judicial causelists with absolute accuracy.
            </p>

            <div className={styles.storyHighlights}>
              <div className={styles.highlightBadge}>
                <Award size={18} />
                <span>NIC / MeitY Vendor Ecosystem</span>
              </div>
              <div className={styles.highlightBadge}>
                <Terminal size={18} />
                <span>MERN &amp; Relational Stack</span>
              </div>
            </div>
          </div>

          {/* Side Portrait Card */}
          <div className={styles.portraitCard}>
            <div className={styles.portraitWrapper}>
              <Image
                src={personalInfo.portraitImage}
                alt="Sukhsagar Jangde professional portrait"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className={styles.portraitImg}
              />
              <div className={styles.portraitOverlay}></div>
            </div>

            <div className={styles.portraitDetails}>
              <div className={styles.portraitName}>{personalInfo.name}</div>
              <div className={styles.portraitLoc}>Raipur, Chhattisgarh, India</div>
              <div className={styles.portraitEdu}>MCA, Pt. Ravishankar Shukla University</div>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinLink}
              >
                <span>View LinkedIn Verification</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className={styles.pillarsGrid}>
          {engineeringPrinciples.map((item, idx) => (
            <div key={idx} className={styles.pillarCard}>
              <div className={styles.pillarIconWrapper}>{item.icon}</div>
              <div className={styles.pillarTag}>{item.tag}</div>
              <h4 className={styles.pillarTitle}>{item.title}</h4>
              <p className={styles.pillarDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Quote */}
        <div className={styles.philosophyBanner}>
          <div className={styles.quoteMark}>&ldquo;</div>
          <p className={styles.philosophyQuote}>
            {personalInfo.bio.quote}
          </p>
          <div className={styles.philosophyAuthor}>
            — Sukhsagar Jangde, Software Developer
          </div>
        </div>
      </div>
    </section>
  );
}
