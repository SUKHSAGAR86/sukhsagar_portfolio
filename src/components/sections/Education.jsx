'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { educationData, certificationsData } from '@/data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, Sparkles } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-24 sm:py-28 relative" id="education">
      <div className="max-w-content mx-auto px-5 sm:px-7">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/25 text-accent font-mono text-xs font-medium tracking-wide mb-4">
            <Sparkles size={14} />
            <span>05 // ACADEMICS &amp; CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-light tracking-tight leading-tight mb-4">
            Academic Grounding &amp; <br />
            Industry Certifications.
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Postgraduate computer applications degree combined with specialized professional training in React.js and Prompt Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Formal Degrees */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-borderSubtle">
              <GraduationCap size={22} className="text-accent" />
              <h3 className="font-headline text-xl font-bold text-light tracking-tight">Formal Academic Qualifications</h3>
            </div>

            <div className="flex flex-col gap-6">
              {educationData.map((edu, idx) => (
                <motion.div 
                  key={edu.id} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-surface-1 border border-borderSubtle rounded-2xl p-6 sm:p-8 hover:border-borderHover hover:-translate-y-0.5 hover:shadow-xl transition-all"
                >
                  <div className="inline-flex items-center gap-1.5 font-mono text-xs text-accent bg-accent/15 px-3 py-1 rounded-full mb-4">
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>

                  <h4 className="font-headline text-xl font-bold text-light mb-1.5 leading-snug">
                    {edu.degree}
                  </h4>
                  
                  <div className="text-sm font-semibold text-light-dim mb-1">
                    {edu.institution}
                  </div>
                  
                  <div className="flex items-center gap-1.5 font-mono text-xs text-muted mb-4">
                    <MapPin size={13} />
                    <span>{edu.location}</span>
                  </div>

                  {edu.details && (
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-borderSubtle">
              <Award size={22} className="text-mint" />
              <h3 className="font-headline text-xl font-bold text-light tracking-tight">Professional Certifications</h3>
            </div>

            <div className="flex flex-col gap-6">
              {certificationsData.map((cert, idx) => (
                <motion.div 
                  key={cert.id} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-surface-1 border border-borderSubtle rounded-2xl p-6 sm:p-8 hover:border-borderHover hover:-translate-y-0.5 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="font-mono text-xs text-mint uppercase tracking-wider font-semibold">
                      {cert.issuer}
                    </div>
                    <span className="font-mono text-[0.72rem] text-muted">{cert.date}</span>
                  </div>

                  <h4 className="font-headline text-lg font-bold text-light mb-2 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-mint">
                    <CheckCircle size={14} className="text-mint" />
                    <span>Verified Credential</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
