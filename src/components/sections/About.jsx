'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolioData';
import { Shield, Cpu, Layers, CheckCircle2, Award, Terminal, ArrowUpRight, Sparkles } from 'lucide-react';

export default function About() {
  const engineeringPrinciples = [
    {
      icon: <Shield size={24} />,
      title: 'Security-First Architecture',
      desc: 'Government and judicial applications demand uncompromised data integrity. I implement SHA-256 encryption, strict Role-Based Access Control (RBAC), and sanitization pipelines.',
      tag: 'SECURITY & RBAC',
    },
    {
      icon: <Layers size={24} />,
      title: 'Relational Database Precision',
      desc: 'Specialized in MSSQL, PostgreSQL, and MySQL with normalized schemas, stored procedures, and indexing optimized for high-concurrency public records.',
      tag: 'MSSQL / POSTGRES / MYSQL',
    },
    {
      icon: <Cpu size={24} />,
      title: 'High-Throughput React & Next.js',
      desc: 'Crafting responsive, clean-architecture user interfaces that load instantly across low-bandwidth environments with strict adherence to judicial usability standards.',
      tag: 'REACT.JS / NEXT.JS',
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: 'Production-Tested Delivery',
      desc: '5+ full-stack systems engineered, with 4 actively deployed in live government environments handling state advertisements, court proceedings, and public news.',
      tag: '4 LIVE DEPLOYMENTS',
    },
  ];

  return (
    <section className="py-24 sm:py-28 relative" id="about">
      <div className="max-w-content mx-auto px-5 sm:px-7">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/25 text-accent font-mono text-xs font-medium tracking-wide mb-4">
            <Sparkles size={14} />
            <span>01 // DIGITAL CRAFT × CREATIVE ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-light tracking-tight leading-tight mb-4">
            Engineering Platforms That <br />
            Operate Where It Matters.
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Bridging technical depth, rigorous database architecture, and polished frontend craft for public infrastructure and modern web software.
          </p>
        </div>

        {/* Narrative & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8 mb-14 items-stretch">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface-1 border border-borderSubtle rounded-3xl p-7 sm:p-10 flex flex-col justify-center"
          >
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-light tracking-tight leading-snug mb-5">
              From Academic Grounding to the Frontlines of Public Digital Infrastructure.
            </h3>
            
            <p className="text-base text-light-dim leading-relaxed mb-5">
              I am a Full Stack Developer based in <strong className="text-light font-semibold">Raipur, Chhattisgarh</strong>. Having completed my <strong className="text-light font-semibold">Master of Computer Applications (MCA)</strong> from Pt. Ravishankar Shukla University and BCA from Atal Bihari Vajpayee Vishwavidyalaya, I transitioned straight into high-stakes development within the <strong className="text-light font-semibold">National Informatics Centre (NIC, MeitY) ecosystem</strong>.
            </p>

            <p className="text-base text-light-dim leading-relaxed mb-8">
              My engineering journey is defined by real-world responsibility. Whether optimizing the <strong className="text-light font-semibold">Case Information System (CIS Periphery)</strong> and Task Tracker for the High Court of Chhattisgarh, or building the end-to-end <strong className="text-light font-semibold">DPR News Portal</strong> and <strong className="text-light font-semibold">Advertisement Management System</strong> for Chhattisgarh Samvad, I build software that processes public records, state notices, and judicial operations with absolute precision.
            </p>

            <div className="flex gap-4 flex-wrap">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold">
                <Award size={18} />
                <span>NIC (MeitY) Vendor Ecosystem</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/10 border border-mint/20 text-mint font-mono text-xs font-semibold">
                <Terminal size={18} />
                <span>MERN &amp; Relational Stack</span>
              </div>
            </div>
          </motion.div>

          {/* Side Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface-1 border border-borderSubtle rounded-3xl p-6 flex flex-col hover:border-borderHover hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all"
          >
            <div className="relative w-full aspect-[1/1.1] rounded-2xl overflow-hidden bg-surface-2 mb-5 group">
              <Image
                src={personalInfo.portraitImage}
                alt="Sukhsagar Jangde professional portrait"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="font-headline font-bold text-xl text-light">{personalInfo.name}</div>
              <div className="font-mono text-xs text-muted">Raipur, Chhattisgarh, India</div>
              <div className="text-sm text-light-dim my-1.5">MCA, Pt. Ravishankar Shukla University</div>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline mt-1"
              >
                <span>View LinkedIn Verification</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {engineeringPrinciples.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-surface-1 border border-borderSubtle rounded-2xl p-6 flex flex-col hover:border-borderHover hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(166,184,255,0.1)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 text-accent flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <div className="font-mono text-[0.68rem] text-mint uppercase tracking-wider mb-2 font-medium">
                {item.tag}
              </div>
              <h4 className="font-headline text-lg font-bold text-light mb-2.5 leading-snug">
                {item.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Engineering Philosophy Quote */}
        <div className="relative bg-gradient-to-br from-surface-2/80 to-surface-1/95 border border-accent/25 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute -top-3 left-6 font-serif text-8xl text-accent/10 pointer-events-none select-none">
            &ldquo;
          </div>
          <p className="relative font-headline text-lg sm:text-2xl font-medium text-light leading-relaxed mb-5 tracking-tight">
            {personalInfo.bio.quote}
          </p>
          <div className="font-mono text-xs sm:text-sm text-mint uppercase tracking-wider font-semibold">
            — Sukhsagar Jangde, Full Stack Developer
          </div>
        </div>
      </div>
    </section>
  );
}
