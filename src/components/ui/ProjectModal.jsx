'use client';

import React, { useEffect } from 'react';
import { X, ShieldCheck, Database, Layers, CheckCircle2, Building, Terminal } from 'lucide-react';
import styles from './ProjectModal.module.scss';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div>
            <div className={styles.categoryPill}>{project.category}</div>
            <h2 className={styles.modalTitle}>{project.title}</h2>
            <div className={styles.orgTag}>
              <Building size={14} />
              <span>{project.organization}</span>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          {/* Key Metrics */}
          {project.metrics && (
            <div className={styles.metricsGrid}>
              {project.metrics.map((m, idx) => (
                <div key={idx} className={styles.metricBox}>
                  <span className={styles.metricLabel}>{m.label}</span>
                  <span className={styles.metricVal}>{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Overview */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <Layers size={18} />
              <span>Engineering Overview &amp; Mandate</span>
            </h3>
            <p className={styles.descText}>{project.description}</p>
          </div>

          {/* Key Architecture Deliverables */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <CheckCircle2 size={18} />
              <span>Key Deliverables &amp; Frontend/Backend Contributions</span>
            </h3>
            <ul className={styles.deliverablesList}>
              {project.highlights.map((h, idx) => (
                <li key={idx} className={styles.deliverableItem}>
                  <span className={styles.bulletDot}></span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security & Access Control */}
          {project.securityArchitecture && (
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionHeading}>
                <ShieldCheck size={18} />
                <span>Security, RBAC &amp; Integrity Architecture</span>
              </h3>
              <div className={styles.securityGrid}>
                {project.securityArchitecture.map((sec, idx) => (
                  <div key={idx} className={styles.secItem}>
                    <ShieldCheck size={14} className={styles.secIcon} />
                    <span>{sec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Complete Tech Stack */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <Terminal size={18} />
              <span>Technology Stack &amp; Tools</span>
            </h3>
            <div className={styles.techPillGrid}>
              {project.techStack.map((tech, idx) => (
                <span key={idx} className={styles.techPill}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className={styles.modalFooter}>
          <div className={styles.statusBadge}>
            <span className={styles.greenDot}></span>
            <span>Status: {project.liveStatus}</span>
          </div>
          <button className="btn btn--secondary btn--sm" onClick={onClose}>
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
}
