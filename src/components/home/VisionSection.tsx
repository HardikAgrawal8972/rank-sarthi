"use client";

import { motion } from "framer-motion";
import { BarChart3, Clock, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MetricBadge } from "@/components/shared/MetricBadge";

export function VisionSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Vision"
          title="Building the Future of Exam Preparation"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-14 md:mb-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Born from the belief that quality exam preparation shouldn&apos;t
              be a privilege, Rank Sarthi was founded to democratize access to
              expert-level test preparation for every aspiring student in India.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Our platform combines the precision of IIT/AIIMS-calibre question
              banks with cutting-edge AI analytics, creating a preparation
              ecosystem that adapts to each student&apos;s unique learning
              pattern. We don&apos;t just provide tests — we provide a roadmap
              to your dream rank.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Every question is authored by subject-matter experts from premier
              institutions, reviewed through a rigorous 3-tier quality process,
              and tagged to specific exam patterns and difficulty levels.
            </p>
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo" />
                <span className="text-sm text-slate-400">
                  Expert-Authored
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-saffron" />
                <span className="text-sm text-slate-400">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-sm text-slate-400">Exam-Accurate</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <MetricBadge value="50K+" label="Active Students" delay={0} />
            <MetricBadge value="1.2M+" label="Questions in Bank" delay={0.1} />
            <MetricBadge value="98%" label="Satisfaction Rate" delay={0.2} />
            <MetricBadge value="12K+" label="Top Rankers" delay={0.3} />
          </div>
        </div>

        {/* Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {/* Feature 1: Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-lg p-6 group hover:bg-white/[0.06] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-indigo/10 flex items-center justify-center mb-5 group-hover:bg-indigo/20 transition-colors">
              <BarChart3 className="w-6 h-6 text-indigo-light" />
            </div>
            <h3 className="font-sora font-semibold text-lg mb-3">
              Detailed Performance Analytics
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Track your progress with granular analytics. See accuracy, speed,
              and improvement trends across subjects and topics.
            </p>
            {/* Mini Bar Chart */}
            <div className="flex items-end gap-1.5 h-12">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-indigo/40 to-indigo transition-all duration-500 group-hover:from-indigo/60 group-hover:to-indigo-light"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Feature 2: Simulations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-lg p-6 group hover:bg-white/[0.06] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-saffron/10 flex items-center justify-center mb-5 group-hover:bg-saffron/20 transition-colors">
              <Clock className="w-6 h-6 text-saffron" />
            </div>
            <h3 className="font-sora font-semibold text-lg mb-3">
              Exam-Accurate Simulations
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Experience the real exam environment with identical interfaces,
              timing, and difficulty patterns. No surprises on exam day.
            </p>
            {/* Timer Visualization */}
            <div className="glass rounded-lg px-4 py-3 flex items-center justify-between">
              <span className="font-jetbrains text-sm text-saffron">
                02:45:00
              </span>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] font-semibold">
                  23 Attempted
                </span>
                <span className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-[10px] font-semibold">
                  7 Skipped
                </span>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-lg p-6 group hover:bg-white/[0.06] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-accent/10 flex items-center justify-center mb-5 group-hover:bg-blue-accent/20 transition-colors">
              <BadgeCheck className="w-6 h-6 text-blue-accent" />
            </div>
            <h3 className="font-sora font-semibold text-lg mb-3">
              Expert-Authored Content
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Every question crafted by IITian and AIIMS faculty. 3-tier review
              process ensures accuracy, relevance, and exam alignment.
            </p>
            {/* Quality Badges */}
            <div className="space-y-2">
              {["IIT/AIIMS Faculty", "3-Tier Review", "Exam Pattern Aligned"].map(
                (badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 text-xs text-slate-400"
                  >
                    <BadgeCheck size={14} className="text-green-400 shrink-0" />
                    {badge}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
