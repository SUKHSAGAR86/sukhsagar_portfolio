'use client';

import React, { useState } from 'react';
import { skillCategories } from '@/data/portfolioData';
import { Terminal, Database, Layout, Wrench, CheckCircle2 } from 'lucide-react';
import styles from './Skills.module.scss';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return <Layout size={18} />;
      case 1:
        return <Terminal size={18} />;
      case 2:
        return <Database size={18} />;
      case 3:
        return <Wrench size={18} />;
      default:
        return <Terminal size={18} />;
    }
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow eyebrow--mint">
            <span>04 // TECHNICAL EXPERTISE &amp; STACK</span>
          </div>
          <h2 className="section-header__title">
            Specialized in Production-Grade <br />
            Full-Stack Engineering.
          </h2>
          <p className="section-header__desc">
            A comprehensive matrix of technologies utilized to deliver high-concurrency portals, secure judicial workflows, and resilient RESTful services.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className={styles.tabNav}>
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              className={`${styles.tabBtn} ${activeCategory === idx ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveCategory(idx)}
            >
              <div className={styles.tabIcon}>{getCategoryIcon(idx)}</div>
              <div className={styles.tabText}>
                <span className={styles.tabTitle}>{category.title}</span>
                <span className={styles.tabSub}>{category.skills.length} Technologies</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className={styles.categoryPanel}>
          <div className={styles.panelHeader}>
            <div>
              <h3 className={styles.panelTitle}>{skillCategories[activeCategory].title}</h3>
              <p className={styles.panelTagline}>{skillCategories[activeCategory].tagline}</p>
            </div>
            <div className={styles.panelCount}>
              <span>{skillCategories[activeCategory].skills.length} Verified Proficiencies</span>
            </div>
          </div>

          <div className={styles.skillsGrid}>
            {skillCategories[activeCategory].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className={`${styles.skillCard} ${skill.isKey ? styles.skillCardKey : ''}`}
              >
                <div className={styles.skillCardTop}>
                  <div className={styles.skillNameWrapper}>
                    {skill.isKey && (
                      <span className={styles.keyStar} title="Core Specialization">★</span>
                    )}
                    <h4 className={styles.skillName}>{skill.name}</h4>
                  </div>
                  <span className={`${styles.levelBadge} ${styles[`level--${skill.level.toLowerCase()}`] || ''}`}>
                    {skill.level}
                  </span>
                </div>

                {skill.note && (
                  <p className={styles.skillNote}>{skill.note}</p>
                )}

                <div className={styles.skillFooter}>
                  <div className={styles.statusLive}>
                    <CheckCircle2 size={13} className={styles.checkIcon} />
                    <span>Production Applied</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture Highlights Bar */}
        <div className={styles.techPhilosophyBar}>
          <div className={styles.philosophyItem}>
            <div className={styles.philosophyNum}>01</div>
            <div>
              <div className={styles.philosophyTitle}>Zero-Bloat Engineering</div>
              <div className={styles.philosophyDesc}>Clean SCSS, modular components, and server-side optimization without excessive client packages.</div>
            </div>
          </div>

          <div className={styles.philosophyItem}>
            <div className={styles.philosophyNum}>02</div>
            <div>
              <div className={styles.philosophyTitle}>Relational Data Integrity</div>
              <div className={styles.philosophyDesc}>Complex SQL queries, transaction locks, and ACID guarantees on MSSQL &amp; MySQL.</div>
            </div>
          </div>

          <div className={styles.philosophyItem}>
            <div className={styles.philosophyNum}>03</div>
            <div>
              <div className={styles.philosophyTitle}>Gov &amp; Judicial Standard Compliant</div>
              <div className={styles.philosophyDesc}>Tested under strict accessibility, low-bandwidth, and multi-tier approval constraints.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
