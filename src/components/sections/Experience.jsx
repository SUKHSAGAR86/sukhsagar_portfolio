'use client';

import React from 'react';
import { experienceData } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle, ShieldCheck } from 'lucide-react';
import styles from './Experience.module.scss';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow eyebrow--mint">
            <span>02 // CAREER TIMELINE &amp; IMPACT</span>
          </div>
          <h2 className="section-header__title">
            Professional Experience &amp; <br />
            Government Engagements.
          </h2>
          <p className="section-header__desc">
            Over 2+ years of software development experience within the National Informatics Centre (NIC) and MeitY vendor ecosystem, engineering high-concurrency systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className={styles.timelineContainer}>
          <div className={styles.timelineTrack}></div>

          {experienceData.map((item) => (
            <div key={item.id} className={styles.timelineItem}>
              {/* Timeline Marker */}
              <div className={styles.timelineMarker}>
                <div className={styles.markerInner}>
                  <Briefcase size={16} />
                </div>
              </div>

              {/* Experience Card */}
              <div className={styles.experienceCard}>
                {/* Card Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.roleInfo}>
                    <div className={styles.roleTitleRow}>
                      <h3 className={styles.roleTitle}>{item.role}</h3>
                      {item.badge && (
                        <span className={styles.roleBadge}>
                          <ShieldCheck size={13} />
                          <span>{item.badge}</span>
                        </span>
                      )}
                    </div>

                    <div className={styles.companyRow}>
                      <span className={styles.companyName}>
                        <Building2 size={15} />
                        <span>{item.company}</span>
                      </span>
                      {item.client && (
                        <span className={styles.clientTag}>
                          Client / Deputation: <strong>{item.client}</strong>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles.metaInfo}>
                    <div className={styles.periodBadge}>
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    <div className={styles.locationTag}>
                      <MapPin size={13} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className={styles.summaryText}>{item.summary}</p>

                {/* Key Achievements */}
                <div className={styles.achievementsBlock}>
                  <h4 className={styles.achievementsHeading}>Key Deliverables &amp; Architectural Contributions:</h4>
                  <ul className={styles.achievementsList}>
                    {item.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className={styles.achievementItem}>
                        <CheckCircle size={15} className={styles.checkIcon} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Chips */}
                <div className={styles.skillsRow}>
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className={styles.skillPill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
