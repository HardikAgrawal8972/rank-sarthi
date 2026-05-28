"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Target, Layers, Shield, Microscope, Calculator } from "lucide-react";
import type { Platform } from "@/lib/data";

const featureIcons = [BookOpen, Target, Layers, Shield, Microscope, Calculator];

export function PlatformDetailClient({ platform }: { platform: Platform }) {
  const isNeet = platform.slug === "neetrankup";
  const isNda = platform.slug === "ndarankup";

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${platform.color}40, transparent 70%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex w-16 h-16 rounded-lg items-center justify-center font-sora font-bold text-2xl mb-6"
              style={{ backgroundColor: `${platform.color}15`, color: platform.color }}
            >
              {platform.name.charAt(0)}
            </div>
            <h1 className="font-sora font-extrabold text-4xl md:text-5xl mb-4">
              {platform.name}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-4">
              {platform.tagline}
            </p>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border"
              style={{
                color: platform.color,
                borderColor: `${platform.color}30`,
                backgroundColor: `${platform.color}10`,
              }}
            >
              {platform.exam}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-10 border-y border-white/5 bg-navy-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platform.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div
                  className="font-sora font-bold text-3xl md:text-4xl mb-1"
                  style={{ color: platform.color }}
                >
                  {h.value}
                </div>
                <div className="text-slate-400 text-sm">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-300 text-base md:text-lg leading-relaxed"
            >
              {platform.description}
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {platform.features.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-card rounded-lg p-5 flex items-start gap-4 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${platform.color}12`, color: platform.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300 font-medium">{feature}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEET: NCERT Tagging */}
      {isNeet && (
        <section className="py-16 bg-navy-light/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="font-sora font-bold text-2xl md:text-3xl">
                  NCERT-Level Precision Tagging
                </h2>
              </div>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Every question in NeetRankUp is meticulously tagged to specific NCERT chapters
                and page numbers. This enables you to trace any question back to the exact
                source material, making your revision razor-focused and efficient.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Chapter-Level Mapping", desc: "Every question linked to its NCERT chapter" },
                  { label: "Page Number Tagging", desc: "Trace questions to exact textbook pages" },
                  { label: "Weightage Analysis", desc: "Topic-wise distribution from past papers" },
                ].map((item) => (
                  <div key={item.label} className="glass-card rounded-lg p-5">
                    <h4 className="font-semibold text-sm mb-2 text-green-400">{item.label}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* NDA: GAT Framework */}
      {isNda && (
        <section className="py-16 bg-navy-light/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-400" />
                </div>
                <h2 className="font-sora font-bold text-2xl md:text-3xl">
                  GAT-Specific Framework
                </h2>
              </div>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                NDARankUp&apos;s General Ability Test modules are structured around the exact
                NDA exam pattern, covering English, General Knowledge, Physics, Chemistry,
                Geography, History, and Current Affairs with dedicated practice modules.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "English Proficiency", desc: "Grammar, vocabulary, and comprehension drills" },
                  { label: "GK & Current Affairs", desc: "Monthly compilations with MCQ practice" },
                  { label: "Mathematics Paper", desc: "NDA-pattern math sets with solutions" },
                ].map((item) => (
                  <div key={item.label} className="glass-card rounded-lg p-5">
                    <h4 className="font-semibold text-sm mb-2 text-amber-400">{item.label}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-lg p-8 md:p-10 max-w-3xl mx-auto"
          >
            <h2 className="font-sora font-bold text-2xl md:text-3xl mb-4">
              Start Preparing with {platform.name}
            </h2>
            <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
              Join thousands of students already using {platform.name} to ace {platform.exam}.
              Start with a free test today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#pricing"
                className="px-8 py-3.5 bg-indigo hover:bg-indigo-light text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg shadow-indigo/25 hover:shadow-indigo/40 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Start Free Test
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/platforms"
                className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold text-sm rounded-lg transition-all hover:bg-white/5"
              >
                View All Platforms
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
