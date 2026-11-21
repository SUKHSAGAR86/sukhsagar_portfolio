'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/portfolioData';
import ProjectModal from '@/components/ui/ProjectModal';
import { ShieldCheck, Layers, ArrowUpRight, Cpu, Terminal, ExternalLink, Sparkles } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Government & Public Web', 'Government Enterprise', 'Judicial & e-Courts'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 sm:py-28 relative" id="projects">
      <div className="max-w-content mx-auto px-5 sm:px-7">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/25 text-accent font-mono text-xs font-medium tracking-wide mb-4">
            <Sparkles size={14} />
            <span>03 // FEATURED WORK &amp; LIVE PRODUCTION PORTALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-light tracking-tight leading-tight mb-4">
            High-Impact Systems &amp; <br />
            State Government Deployments.
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Delivering high-concurrency portals and secure digital workflows for the High Court of Chhattisgarh, Chhattisgarh Samvad, and Department of Public Relations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-3 mb-12 flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab}
              className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-headline text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === tab
                  ? 'bg-accent/20 border border-accent text-accent font-semibold shadow-[0_0_20px_rgba(166,184,255,0.25)] scale-[1.02]'
                  : 'bg-surface-1 border border-borderSubtle text-light-dim hover:text-light hover:border-borderHover hover:bg-surface-2'
              }`}
              onClick={() => setActiveFilter(tab)}
            >
              <span>{tab === 'All' ? 'All Systems' : tab}</span>
              <span className={`font-mono text-xs px-2 py-0.5 rounded-full transition-colors ${
                activeFilter === tab ? 'bg-accent text-dark font-bold' : 'bg-light/10 text-muted'
              }`}>
                {tab === 'All'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-surface-1 border border-borderSubtle rounded-3xl p-6 sm:p-10 hover:border-borderHover hover:shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_30px_rgba(166,184,255,0.12)] transition-all group"
              >
                {/* Top Meta Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-7 pb-4 border-b border-light/[0.06]">
                  <div className="flex items-center gap-2.5 font-mono text-xs text-accent tracking-wider">
                    <span className="font-bold">SYSTEM // 0{idx + 1}</span>
                    <span className="text-muted-dark">•</span>
                    <span className="text-muted">{project.category}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] font-semibold text-mint px-2.5 py-1 rounded-full bg-mint/15 border border-mint/30 shadow-[0_0_10px_rgba(183,247,212,0.2)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-mint animate-ping" />
                        <span>PUBLIC LIVE WEB</span>
                      </span>
                    )}
                    <div className="inline-flex items-center gap-2 font-mono text-xs text-mint px-3 py-1 rounded-full bg-mint/10 border border-mint/20 w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-mint shadow-[0_0_6px_#B7F7D4]"></span>
                      <span>{project.liveStatus}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-start">
                  <div className="flex flex-col">
                    <div className="inline-flex items-center gap-2 font-mono text-xs text-accent mb-2">
                      <Layers size={14} />
                      <span>{project.organization}</span>
                    </div>

                    <h3 className="font-headline text-2xl sm:text-3xl font-bold text-light tracking-tight leading-tight mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-sm font-mono text-mint mb-5">
                      {project.subtitle}
                    </div>

                    <p className="text-base text-light-dim leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="bg-light/[0.02] border border-light/[0.05] rounded-xl p-5 mb-4">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-3 font-semibold">
                        Core Architecture Highlights:
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {project.highlights.slice(0, 3).map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-sm text-light-dim leading-relaxed">
                            <span className="text-accent text-sm shrink-0">▹</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Live Portal Callout (If Available) */}
                    {project.liveUrl && (
                      <div className="pt-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-headline text-xs sm:text-sm font-bold bg-mint text-dark hover:bg-white hover:shadow-[0_0_20px_rgba(183,247,212,0.4)] transition-all"
                        >
                          <ExternalLink size={16} />
                          <span>Open Live Portal: {project.liveUrl.replace('https://', '')}</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Right Side: Architecture & Security Snapshot */}
                  <div className="bg-surface-2 border border-borderSubtle rounded-2xl p-6 sm:p-7 flex flex-col gap-6 shadow-lg">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-light pb-3 border-b border-light/[0.06] font-semibold">
                      <Cpu size={15} className="text-accent" />
                      <span>System Specifications</span>
                    </div>

                    {project.metrics && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="bg-surface-1 border border-light/[0.05] rounded p-2.5 flex flex-col">
                            <span className="font-mono text-[0.65rem] text-muted uppercase">{m.label}</span>
                            <span className="font-headline text-sm font-bold text-mint truncate">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Security Highlights */}
                    {project.securityArchitecture && (
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-1.5 font-mono text-xs text-muted uppercase font-semibold">
                          <ShieldCheck size={14} className="text-mint" />
                          <span>Security &amp; Integrity Controls</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.securityArchitecture.map((sec, sIdx) => (
                            <span key={sIdx} className="font-mono text-[0.7rem] px-2.5 py-1 rounded bg-mint/5 border border-mint/20 text-mint">
                              {sec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-1.5 font-mono text-xs text-muted uppercase font-semibold">
                        <Terminal size={14} className="text-accent" />
                        <span>Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="font-mono text-[0.72rem] px-2.5 py-1 rounded bg-surface-1 border border-light/[0.06] text-light-dim">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-2.5 mt-2">
                      <button
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-headline text-xs font-semibold bg-surface-3 text-light border border-borderSubtle hover:border-accent hover:text-accent hover:bg-surface-3/80 transition-all"
                        onClick={() => setSelectedProject(project)}
                      >
                        <span>View Architecture Deep Dive</span>
                        <ArrowUpRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
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
