'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '@/data/portfolioData';
import { Terminal, Database, Layout, Wrench, CheckCircle2, Sparkles } from 'lucide-react';

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
    <section className="py-24 sm:py-28 relative" id="skills">
      <div className="max-w-content mx-auto px-5 sm:px-7">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint/10 border border-mint/25 text-mint font-mono text-xs font-medium tracking-wide mb-4">
            <Sparkles size={14} />
            <span>04 // TECHNICAL EXPERTISE &amp; STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-light tracking-tight leading-tight mb-4">
            Specialized in Production-Grade <br />
            Full-Stack Engineering.
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            A comprehensive matrix of technologies utilized to deliver high-concurrency portals, secure judicial workflows, and resilient RESTful services.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              className={`p-5 rounded-2xl border text-left flex items-center gap-4 transition-all duration-300 ${
                activeCategory === idx
                  ? 'bg-surface-2 border-accent shadow-[0_8px_25px_rgba(0,0,0,0.4),0_0_20px_rgba(166,184,255,0.2)] scale-[1.02]'
                  : 'bg-surface-1 border-borderSubtle hover:border-borderHover hover:bg-surface-2'
              }`}
              onClick={() => setActiveCategory(idx)}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                activeCategory === idx ? 'bg-accent text-dark' : 'bg-accent/10 text-accent'
              }`}>
                {getCategoryIcon(idx)}
              </div>
              <div className="flex flex-col">
                <span className={`font-headline text-sm font-bold leading-tight mb-0.5 ${
                  activeCategory === idx ? 'text-light' : 'text-light-dim'
                }`}>
                  {category.title}
                </span>
                <span className="font-mono text-xs text-muted">
                  {category.skills.length} Technologies
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="bg-surface-1 border border-borderSubtle rounded-3xl p-6 sm:p-10 mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-light/[0.06]">
            <div>
              <h3 className="font-headline text-2xl font-bold text-light tracking-tight mb-1">
                {skillCategories[activeCategory].title}
              </h3>
              <p className="text-sm text-muted">
                {skillCategories[activeCategory].tagline}
              </p>
            </div>
            <div className="font-mono text-xs text-mint px-3.5 py-1.5 rounded-full bg-mint/10 border border-mint/20 w-fit">
              <span>{skillCategories[activeCategory].skills.length} Verified Proficiencies</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AnimatePresence mode="wait">
              {skillCategories[activeCategory].skills.map((skill, sIdx) => (
                <motion.div
                  key={`${activeCategory}-${skill.name}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                  className={`bg-surface-2 border border-light/[0.05] rounded-xl p-5 flex flex-col hover:border-borderHover hover:-translate-y-0.5 hover:shadow-xl transition-all ${
                    skill.isKey ? 'border-l-4 border-l-accent' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      {skill.isKey && (
                        <span className="text-accent text-sm" title="Core Specialization">★</span>
                      )}
                      <h4 className="font-headline text-base font-bold text-light">{skill.name}</h4>
                    </div>
                    <span className={`font-mono text-[0.7rem] font-semibold px-2.5 py-1 rounded border ${
                      skill.level === 'Expert'
                        ? 'bg-accent/15 border-accent/35 text-accent'
                        : skill.level === 'Advanced'
                        ? 'bg-mint/10 border-mint/30 text-mint'
                        : 'bg-light/10 border-light/20 text-light'
                    }`}>
                      {skill.level}
                    </span>
                  </div>

                  {skill.note && (
                    <p className="text-xs text-muted leading-relaxed mb-4">{skill.note}</p>
                  )}

                  <div className="mt-auto flex items-center gap-1.5 font-mono text-[0.7rem] text-muted">
                    <CheckCircle2 size={13} className="text-mint" />
                    <span>Production Tested &amp; Deployed</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Technical Architecture Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-1/60 border border-borderSubtle rounded-2xl p-6 sm:p-7 flex gap-5">
            <div className="font-headline text-3xl font-black text-accent/80 leading-none">01</div>
            <div>
              <div className="font-headline text-base font-bold text-light mb-1.5">Zero-Bloat Engineering</div>
              <div className="text-xs sm:text-sm text-muted leading-relaxed">
                Tailwind CSS utility styling, modular state, and sub-second rendering across low-bandwidth environments.
              </div>
            </div>
          </div>

          <div className="bg-surface-1/60 border border-borderSubtle rounded-2xl p-6 sm:p-7 flex gap-5">
            <div className="font-headline text-3xl font-black text-accent/80 leading-none">02</div>
            <div>
              <div className="font-headline text-base font-bold text-light mb-1.5">Relational &amp; Security Integrity</div>
              <div className="text-xs sm:text-sm text-muted leading-relaxed">
                ACID guarantees, stored procedures on MSSQL/PostgreSQL, SHA-256 password hashing &amp; JWT RBAC.
              </div>
            </div>
          </div>

          <div className="bg-surface-1/60 border border-borderSubtle rounded-2xl p-6 sm:p-7 flex gap-5">
            <div className="font-headline text-3xl font-black text-accent/80 leading-none">03</div>
            <div>
              <div className="font-headline text-base font-bold text-light mb-1.5">NIC (MeitY) Standard Compliant</div>
              <div className="text-xs sm:text-sm text-muted leading-relaxed">
                Architected to meet stringent government guidelines, departmental audit protocols, and judicial standards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
