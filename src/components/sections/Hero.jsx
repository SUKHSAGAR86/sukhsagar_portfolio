'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolioData';
import { ArrowDownRight, FileText, ArrowRight, ShieldCheck, Database, Terminal, Code2, Sparkles, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden" id="hero">
      <div className="max-w-wide mx-auto px-5 sm:px-7 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr] gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Identity */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            {/* Top Eyebrow Badge */}
            <div className="flex items-center gap-3 flex-wrap mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint/10 border border-mint/25 text-mint font-mono text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(183,247,212,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
                </span>
                <span>NIC (MeitY) Govt. Ecosystem Developer</span>
              </div>
              <span className="font-mono text-[0.72rem] text-muted border border-borderSubtle px-3 py-1.5 rounded-full bg-light/[0.02] tracking-wider uppercase font-medium">
                4+ LIVE DEPLOYED SYSTEMS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.3rem] font-headline font-black tracking-tight leading-[1.07] text-light mb-6">
              <span className="block">Building Secure,</span>
              <span className="block">
                <em className="bg-gradient-to-r from-accent via-light to-mint bg-clip-text text-transparent not-italic">
                  High-Traffic
                </em>{' '}
                Govt. &amp;
              </span>
              <span className="block">Judicial Platforms.</span>
            </h1>

            {/* Role & Bio summary */}
            <p className="text-base sm:text-lg text-light-dim leading-relaxed max-w-2xl mb-8 font-normal">
              I&apos;m <strong className="text-light font-semibold">{personalInfo.name}</strong>, a Full Stack Developer with 2+ years of experience architecting high-reliability applications with <span className="text-accent font-medium">React.js, Next.js, Node.js, Express, MSSQL, and PostgreSQL</span> for the High Court of Chhattisgarh and the Department of Public Relations.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 flex-wrap mb-10">
              <a 
                href="#projects" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-headline font-bold text-sm sm:text-base bg-light text-dark shadow-[0_4px_25px_rgba(242,240,233,0.2)] hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_35px_rgba(242,240,233,0.35)] transition-all"
              >
                <span>Explore Live Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-headline font-semibold text-sm sm:text-base bg-surface-2 text-light border border-borderSubtle hover:bg-surface-3 hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(166,184,255,0.2)] transition-all"
              >
                <FileText size={18} />
                <span>Download Resume (PDF)</span>
              </a>

              <a 
                href="https://jansampark.cg.gov.in/dprnewsportal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-headline font-semibold text-xs sm:text-sm text-mint bg-mint/10 border border-mint/25 hover:bg-mint/20 hover:border-mint transition-all"
              >
                <span>Live Public Portal</span>
                <ExternalLink size={15} />
              </a>
            </div>

            {/* Quick Metrics Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-surface-1/80 border border-borderSubtle backdrop-blur-md shadow-2xl">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="font-headline text-2xl sm:text-3xl font-black text-accent leading-tight tracking-tight mb-0.5">
                    {stat.value}
                  </div>
                  <div className="font-headline text-sm font-semibold text-light mb-0.5">
                    {stat.label}
                  </div>
                  <div className="font-mono text-[0.7rem] text-muted leading-tight">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: High-End Framed Photo & Interactive Identity Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            {/* Visual Card */}
            <div className="relative w-full max-w-[460px] bg-surface-1 border border-borderSubtle rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-10 transition-all duration-300 hover:border-borderHover hover:shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_35px_rgba(166,184,255,0.2)] group">
              {/* Technical Frame Crosshairs */}
              <div className="absolute font-mono text-base text-accent/70 pointer-events-none -top-2 -left-1.5 leading-none">+</div>
              <div className="absolute font-mono text-base text-accent/70 pointer-events-none -top-2 -right-1.5 leading-none">+</div>
              <div className="absolute font-mono text-base text-accent/70 pointer-events-none -bottom-2 -left-1.5 leading-none">+</div>
              <div className="absolute font-mono text-base text-accent/70 pointer-events-none -bottom-2 -right-1.5 leading-none">+</div>

              {/* Status Header inside card */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-light/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="text-accent flex">
                    <Code2 size={15} />
                  </span>
                  <span className="font-mono text-[0.7rem] text-muted tracking-wider">
                    21.2514° N, 81.6296° E • RAIPUR
                  </span>
                </div>
                <div className="font-mono text-[0.7rem] font-semibold text-mint bg-mint/10 px-2.5 py-1 rounded-full border border-mint/25">
                  High Court &amp; NIC Projects
                </div>
              </div>

              {/* Authentic Photo Container */}
              <div className="relative w-full aspect-[1/1.15] rounded-2xl overflow-hidden bg-surface-2 border border-light/[0.08]">
                <Image
                  src={personalInfo.avatarImage}
                  alt="Sukhsagar Jangde at High Court of Chhattisgarh campus"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/35 to-transparent pointer-events-none opacity-90" />
                
                {/* Embedded Live Role Tag on the image */}
                <div className="absolute bottom-4 left-4 right-4 bg-dark/90 backdrop-blur-md border border-mint/30 rounded-xl p-3 flex items-center gap-3 shadow-2xl">
                  <div className="w-8 h-8 rounded-md bg-mint/15 text-mint flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <div className="font-headline text-[0.85rem] font-bold text-light leading-tight">
                      High Court of Chhattisgarh
                    </div>
                    <div className="font-mono text-[0.7rem] text-mint">
                      CIS Periphery &amp; Task Tracker
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Specs Footer */}
              <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-light/[0.06]">
                <div className="flex items-center gap-1.5 font-mono text-[0.7rem] text-muted bg-light/[0.04] px-2.5 py-1 rounded border border-light/[0.05]">
                  <Database size={13} className="text-accent" />
                  <span>MSSQL / Postgres</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[0.7rem] text-muted bg-light/[0.04] px-2.5 py-1 rounded border border-light/[0.05]">
                  <Terminal size={13} className="text-accent" />
                  <span>Node.js / Express</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[0.7rem] text-muted bg-light/[0.04] px-2.5 py-1 rounded border border-light/[0.05]">
                  <ShieldCheck size={13} className="text-accent" />
                  <span>RBAC &amp; SHA-256</span>
                </div>
              </div>
            </div>

            {/* Ambient Background Glow for Hero Visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(166,184,255,0.14)_0%,transparent_70%)] blur-[70px] pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom scroll prompt */}
        <div className="mt-14 flex justify-center">
          <a 
            href="#about" 
            aria-label="Scroll to about section"
            className="flex flex-col items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="font-mono text-[0.7rem] text-muted tracking-widest uppercase">
              SCROLL TO EXPLORE ARCHITECTURE
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-light/20 flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
