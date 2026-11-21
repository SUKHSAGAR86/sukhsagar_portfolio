'use client';

import React, { useEffect } from 'react';
import { X, ShieldCheck, Layers, CheckCircle2, Building, Terminal, ExternalLink } from 'lucide-react';

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
    <div 
      className="fixed inset-0 bg-dark/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true"
    >
      <div 
        className="w-full max-w-3xl max-h-[90vh] bg-surface-1 border border-accent/25 rounded-3xl flex flex-col overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(166,184,255,0.15)]" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 bg-surface-2 border-b border-borderSubtle flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-mint uppercase tracking-wider mb-1 font-semibold">
              {project.category}
            </div>
            <h2 className="font-headline text-xl sm:text-2xl font-bold text-light tracking-tight mb-1.5">
              {project.title}
            </h2>
            <div className="flex items-center gap-2 text-sm text-accent">
              <Building size={14} />
              <span>{project.organization}</span>
            </div>
          </div>
          <button 
            className="w-9 h-9 rounded-md bg-surface-1 border border-borderSubtle text-muted hover:text-light hover:border-borderHover hover:bg-surface-3 flex items-center justify-center transition-all shrink-0" 
            onClick={onClose} 
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-7 custom-scrollbar">
          {/* Live Link Callout if available */}
          {project.liveUrl && (
            <div className="p-4 rounded-xl bg-mint/10 border border-mint/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-mint animate-ping" />
                <span className="font-headline text-sm font-bold text-light">This system is publicly live &amp; accessible</span>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-headline text-xs font-bold bg-mint text-dark hover:bg-white transition-all shadow-md shrink-0"
              >
                <span>Visit Live System</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )}

          {/* Key Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-surface-2 rounded-xl border border-borderSubtle">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-mono text-[0.7rem] text-muted uppercase">{m.label}</span>
                  <span className="font-headline text-base sm:text-lg font-bold text-accent">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Overview */}
          <div className="flex flex-col gap-2.5">
            <h3 className="flex items-center gap-2 font-headline text-base font-semibold text-light">
              <Layers size={18} className="text-accent" />
              <span>Engineering Overview &amp; Mandate</span>
            </h3>
            <p className="text-sm sm:text-base text-light-dim leading-relaxed">{project.description}</p>
          </div>

          {/* Key Architecture Deliverables */}
          <div className="flex flex-col gap-2.5">
            <h3 className="flex items-center gap-2 font-headline text-base font-semibold text-light">
              <CheckCircle2 size={18} className="text-mint" />
              <span>Key Deliverables &amp; Frontend/Backend Contributions</span>
            </h3>
            <ul className="flex flex-col gap-2.5">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-light-dim leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2"></span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security & Access Control */}
          {project.securityArchitecture && (
            <div className="flex flex-col gap-2.5">
              <h3 className="flex items-center gap-2 font-headline text-base font-semibold text-light">
                <ShieldCheck size={18} className="text-mint" />
                <span>Security, RBAC &amp; Integrity Architecture</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.securityArchitecture.map((sec, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-mint/5 border border-mint/15 font-mono text-xs text-mint">
                    <ShieldCheck size={14} className="shrink-0 text-mint" />
                    <span>{sec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Complete Tech Stack */}
          <div className="flex flex-col gap-2.5">
            <h3 className="flex items-center gap-2 font-headline text-base font-semibold text-light">
              <Terminal size={18} className="text-accent" />
              <span>Technology Stack &amp; Tools</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="font-mono text-xs px-3 py-1.5 rounded bg-surface-2 border border-borderSubtle text-light-dim">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-surface-2 border-t border-borderSubtle flex items-center justify-between">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-mint">
            <span className="w-2 h-2 rounded-full bg-mint shadow-[0_0_8px_#B7F7D4]"></span>
            <span>Status: {project.liveStatus}</span>
          </div>
          <button 
            className="px-4 py-2 rounded-full font-headline text-xs font-semibold bg-surface-3 text-light border border-borderSubtle hover:border-borderHover transition-colors" 
            onClick={onClose}
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
}
