'use client';

import React, { useState } from 'react';
import { projectsData } from '@/data/portfolioData';
import ProjectModal from '@/components/ui/ProjectModal';
import { ShieldCheck, Layers, ArrowUpRight, Cpu, Terminal } from 'lucide-react';
import styles from './Projects.module.scss';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <span>03 // SELECTED WORKS &amp; CASE STUDIES</span>
          </div>
          <h2 className="section-header__title">
            Featured Systems &amp; <br />
            Production Deployments.
          </h2>
          <p className="section-header__desc">
            Production-grade web systems built for the High Court of Chhattisgarh, Chhattisgarh Samvad, and Department of Public Relations. Real applications serving real users.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterBar}>
          {['All', 'Government & Judicial', 'Enterprise Full-Stack'].map((tab) => (
            <button
              key={tab}
              className={`${styles.filterBtn} ${activeFilter === tab ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              <span>{tab === 'All' ? 'All Works' : tab}</span>
              <span className={styles.countPill}>
                {tab === 'All'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsList}>
          {filteredProjects.map((project, idx) => (
            <article key={project.id} className={styles.projectCard}>
              {/* Top Meta Bar */}
              <div className={styles.cardTopMeta}>
                <div className={styles.projectIndex}>
                  <span>PROJ // 0{idx + 1}</span>
                  <span className={styles.dotSeparator}>•</span>
                  <span className={styles.categoryName}>{project.category}</span>
                </div>

                <div className={styles.statusIndicator}>
                  <span className={styles.statusDot}></span>
                  <span>{project.liveStatus}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.cardContent}>
                <div className={styles.mainInfo}>
                  <div className={styles.orgBadge}>
                    <Layers size={14} />
                    <span>{project.organization}</span>
                  </div>

                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectSubtitle}>{project.subtitle}</div>

                  <p className={styles.projectDesc}>{project.description}</p>

                  {/* Highlights Bullet List */}
                  <div className={styles.highlightsContainer}>
                    <h4 className={styles.highlightsHeading}>Core Architecture Highlights:</h4>
                    <ul className={styles.highlightsList}>
                      {project.highlights.slice(0, 3).map((h, hIdx) => (
                        <li key={hIdx} className={styles.highlightItem}>
                          <span className={styles.highlightBullet}>▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side: Architecture & Security Snapshot */}
                <div className={styles.architectureBox}>
                  <div className={styles.archBoxHeader}>
                    <Cpu size={15} />
                    <span>System Specifications</span>
                  </div>

                  {project.metrics && (
                    <div className={styles.metricsRow}>
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className={styles.metricCard}>
                          <span className={styles.metricLabel}>{m.label}</span>
                          <span className={styles.metricVal}>{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Security Highlights */}
                  {project.securityArchitecture && (
                    <div className={styles.securityWrapper}>
                      <div className={styles.secHeader}>
                        <ShieldCheck size={14} />
                        <span>Security &amp; Integrity Controls</span>
                      </div>
                      <div className={styles.secBadges}>
                        {project.securityArchitecture.map((sec, sIdx) => (
                          <span key={sIdx} className={styles.secBadge}>
                            {sec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className={styles.techPillsWrapper}>
                    <div className={styles.techStackLabel}>
                      <Terminal size={14} />
                      <span>Tech Stack</span>
                    </div>
                    <div className={styles.techPills}>
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className={styles.techChip}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA: View Deep Dive */}
                  <button
                    className={`${styles.deepDiveBtn} btn btn--secondary btn--sm`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Architecture Deep Dive</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
