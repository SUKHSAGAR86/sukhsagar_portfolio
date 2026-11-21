'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-24 sm:py-28 relative" id="experience">
      <div className="max-w-content mx-auto px-5 sm:px-7">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint/10 border border-mint/25 text-mint font-mono text-xs font-medium tracking-wide mb-4">
            <Sparkles size={14} />
            <span>02 // CAREER TIMELINE &amp; PROVEN IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-light tracking-tight leading-tight mb-4">
            Professional Experience &amp; <br />
            Govt. Engagements.
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Over 2+ years of full-stack engineering across the National Informatics Centre (NIC, MeitY) vendor ecosystem, building mission-critical public portals and judicial platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative flex flex-col gap-10 pl-7 sm:pl-11">
          {/* Vertical Track Line */}
          <div className="absolute top-4 bottom-5 left-3 sm:left-[17px] w-0.5 bg-gradient-to-b from-accent via-accent/30 to-mint/10 pointer-events-none" />

          {experienceData.map((item, idx) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Marker */}
              <div className="absolute top-6 -left-7 sm:-left-11 -translate-x-1/2 z-10">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface-2 border-2 border-accent text-accent flex items-center justify-center shadow-[0_0_15px_rgba(166,184,255,0.4)]">
                  <Briefcase size={14} />
                </div>
              </div>

              {/* Experience Card */}
              <div className="bg-surface-1 border border-borderSubtle rounded-3xl p-6 sm:p-9 hover:border-borderHover hover:shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_25px_rgba(166,184,255,0.1)] transition-all">
                {/* Card Header */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6 pb-5 border-b border-light/[0.06]">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-headline text-xl sm:text-2xl font-bold text-light tracking-tight">
                        {item.role}
                      </h3>
                      {item.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint/10 border border-mint/25 text-mint font-mono text-xs font-semibold">
                          <ShieldCheck size={13} />
                          <span>{item.badge}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 text-base font-semibold text-accent">
                        <Building2 size={16} />
                        <span>{item.company}</span>
                      </span>
                      {item.client && (
                        <span className="text-sm text-light-dim bg-light/[0.04] px-2.5 py-1 rounded border border-light/[0.05]">
                          Client: <strong className="text-light">{item.client}</strong>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-1.5 shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-light/[0.05] border border-light/10 text-light font-mono text-xs font-medium">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                      <MapPin size={13} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-base text-light-dim leading-relaxed mb-6 font-normal">
                  {item.summary}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-3 font-semibold">
                    Key Deliverables &amp; Architectural Contributions:
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {item.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-light-dim leading-relaxed">
                        <CheckCircle size={16} className="text-mint shrink-0 mt-1" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="font-mono text-xs px-3 py-1.5 rounded bg-surface-2 border border-light/[0.06] text-muted hover:text-accent hover:border-accent/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
