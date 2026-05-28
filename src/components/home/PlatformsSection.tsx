"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Atom, Bell } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { platforms } from "@/lib/data";

const platformIcons: Record<string, React.ReactNode> = {
  jeerankup: <Atom className="w-6 h-6" />,
  neetrankup: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  ndarankup: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
};

export function PlatformsSection() {
  const [notifyEmail, setNotifyEmail] = useState("");

  return (
    <section className="section-padding relative overflow-hidden bg-navy-light/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Platforms"
          title="Choose Your Exam. Start Your Journey."
          description="Specialized preparation platforms built for each competitive exam, with exam-specific content, patterns, and analytics."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top accent border */}
              <div
                className="h-1"
                style={{
                  background: `linear-gradient(90deg, ${platform.color}, ${platform.color}80)`,
                }}
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${platform.color}15`, color: platform.color }}
                  >
                    {platformIcons[platform.slug]}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {platform.exam}
                  </span>
                </div>

                <h3 className="font-sora font-bold text-xl mb-2">
                  {platform.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {platform.tagline}
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-5">
                  <div>
                    <div className="font-sora font-bold text-lg" style={{ color: platform.color }}>
                      {platform.tests}
                    </div>
                    <div className="text-xs text-slate-500">Tests</div>
                  </div>
                  <div>
                    <div className="font-sora font-bold text-lg" style={{ color: platform.color }}>
                      {platform.questions}
                    </div>
                    <div className="text-xs text-slate-500">Questions</div>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="space-y-2 mb-6">
                  {platform.features.slice(0, 3).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs text-slate-400"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: platform.color }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href={`/platforms/${platform.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                  style={{ color: platform.color }}
                >
                  Explore {platform.name}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* LMS Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-lg overflow-hidden relative md:col-span-3"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-lg gradient-border animate-border-glow" />

            <div className="relative p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-8">
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-saffron/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-saffron" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-xs font-bold uppercase tracking-wider">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="font-sora font-bold text-2xl">
                    Rank Sarthi LMS
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A complete learning ecosystem with live classes, recorded
                    lectures, AI-powered mentorship, and integrated test
                    preparation. Everything you need, in one place.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:min-w-[340px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron/50 transition-all"
                  />
                  <button className="px-6 py-3 bg-saffron hover:bg-saffron-light text-navy font-semibold text-sm rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-saffron/20 hover:shadow-saffron/30 whitespace-nowrap">
                    <Bell size={16} />
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
