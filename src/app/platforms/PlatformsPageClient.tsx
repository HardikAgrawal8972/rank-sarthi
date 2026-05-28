"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { platforms } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function PlatformsPageClient() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Platforms"
          title="Choose Your Path to Success"
          description="Each platform is purpose-built for its respective exam, with exam-specific content patterns, analytics, and preparation strategies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10 md:mb-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/platforms/${platform.slug}`}
                className="block glass-card rounded-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div
                  className="h-1.5"
                  style={{
                    background: `linear-gradient(90deg, ${platform.color}, ${platform.color}60)`,
                  }}
                />
                <div className="p-6">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 font-sora font-bold text-lg"
                    style={{ backgroundColor: `${platform.color}15`, color: platform.color }}
                  >
                    {platform.name.charAt(0)}
                  </div>

                  <h3 className="font-sora font-bold text-xl mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {platform.tagline}
                  </p>

                  <div className="flex gap-6 mb-5 py-4 border-y border-white/5">
                    <div>
                      <div className="font-sora font-bold text-xl" style={{ color: platform.color }}>
                        {platform.tests}
                      </div>
                      <div className="text-xs text-slate-500">Tests</div>
                    </div>
                    <div>
                      <div className="font-sora font-bold text-xl" style={{ color: platform.color }}>
                        {platform.questions}
                      </div>
                      <div className="text-xs text-slate-500">Questions</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {platform.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: platform.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                    style={{ color: platform.color }}
                  >
                    Explore {platform.name}
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* LMS Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-lg p-6 md:p-8 gradient-border animate-border-glow text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            Coming Soon
          </div>
          <h3 className="font-sora font-bold text-2xl md:text-3xl mb-3">
            Rank Sarthi LMS
          </h3>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-6">
            A complete learning management system with live classes, recorded lectures, and AI-powered mentorship.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/30"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-saffron hover:bg-saffron-light text-navy font-semibold text-sm rounded-lg transition-all shadow-lg shadow-saffron/20">
              Notify Me
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
