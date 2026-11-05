'use client';

import React from 'react';
import { educationData, certificationsData } from '@/data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';
import styles from './Education.module.scss';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <span>05 // ACADEMICS &amp; CREDENTIALS</span>
          </div>
          <h2 className="section-header__title">
            Academic Grounding &amp; <br />
            Industry Certifications.
          </h2>
          <p className="section-header__desc">
            Rigorous postgraduate computer applications education combined with specialized technical certifications in React.js and Full-Stack systems.
          </p>
        </div>

        <div className={styles.educationGrid}>
          {/* Left Column: Formal Degrees */}
          <div className={styles.degreesColumn}>
            <div className={styles.columnHeader}>
              <GraduationCap size={22} className={styles.headerIcon} />
              <h3 className={styles.columnTitle}>Formal Education</h3>
            </div>

            <div className={styles.degreesList}>
              {educationData.map((edu) => (
                <div key={edu.id} className={styles.degreeCard}>
                  <div className={styles.cardPeriod}>
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>

                  <h4 className={styles.degreeTitle}>{edu.degree}</h4>
                  
                  <div className={styles.instName}>{edu.institution}</div>
                  
                  <div className={styles.degreeLocation}>
                    <MapPin size={13} />
                    <span>{edu.location}</span>
                  </div>

                  {edu.details && (
                    <p className={styles.degreeDetails}>{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className={styles.certsColumn}>
            <div className={styles.columnHeader}>
              <Award size={22} className={styles.headerIconCerts} />
              <h3 className={styles.columnTitle}>Professional Certifications</h3>
            </div>

            <div className={styles.certsList}>
              {certificationsData.map((cert) => (
                <div key={cert.id} className={styles.certCard}>
                  <div className={styles.certTop}>
                    <div className={styles.certIssuer}>{cert.issuer}</div>
                    <span className={styles.certDate}>{cert.date}</span>
                  </div>

                  <h4 className={styles.certTitle}>{cert.title}</h4>
                  <p className={styles.certDesc}>{cert.description}</p>

                  <div className={styles.verifiedRow}>
                    <CheckCircle size={14} className={styles.verifiedIcon} />
                    <span>Verified Credential</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
