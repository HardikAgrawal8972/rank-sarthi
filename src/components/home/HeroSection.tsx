"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
} as const;
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 lg:min-h-[840px] lg:flex lg:items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-indigo/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-blue-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-saffron/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-14 items-center">
          {/* Left Column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6 lg:space-y-7"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo/10 border border-indigo/20 text-indigo-light text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Now Live — 2025 Edition
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight"
            >
              Smart Exam{" "}
              <span className="bg-gradient-to-r from-indigo-light via-blue-accent to-saffron bg-clip-text text-transparent">
                Preparation.
              </span>
              <br />
              <span className="text-white/90">Prepare Smarter.</span>
              <br />
              <span className="text-white/80">Rank Higher.</span>
              <br />
              <span className="bg-gradient-to-r from-saffron to-saffron-light bg-clip-text text-transparent">
                Achieve More.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-slate-300/90 text-base md:text-lg leading-relaxed max-w-xl"
            >
              Expert-curated mock tests, AI-powered analytics, and personalized
              study plans for JEE, NEET, and NDA aspirants. Join 50,000+
              students already preparing smarter.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Link
                href="/platforms/jeerankup"
                className="group px-6 py-3 bg-indigo hover:bg-indigo-light text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg shadow-indigo/25 hover:shadow-indigo/40 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Explore JeeRankUp
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/platforms/jeerankup"
                className="px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
              >
                Take Free Mock Test
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-3">
                {["PK", "AS", "RM", "VN"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-navy bg-gradient-to-br from-indigo to-blue-accent flex items-center justify-center text-[10px] font-bold"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold">
                  Trusted by{" "}
                  <span className="text-saffron">50,000+ Students</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 fill-saffron"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-slate-400 text-xs ml-1">4.9/5</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Interactive Test Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main Test Card */}
            <div className="glass-card rounded-lg overflow-hidden shadow-2xl shadow-black/30">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="font-sora font-semibold text-sm text-white/90">
                  JEE Main — Physics
                </span>
                <span className="font-jetbrains text-sm text-saffron font-medium">
                  02:45:00
                </span>
              </div>

              {/* Question */}
              <div className="p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-md bg-indigo/20 flex items-center justify-center text-xs font-bold text-indigo-light">
                    Q7
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    A particle of mass <em>m</em> is projected with velocity{" "}
                    <em>v</em> at angle <em>θ</em> with horizontal. The
                    magnitude of angular momentum about the point of projection
                    when the particle is at maximum height:
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-2.5">
                  {[
                    { label: "A", text: "mv³sin²θcosθ / 2g", selected: false },
                    {
                      label: "B",
                      text: "mv³sinθcos²θ / 2g",
                      selected: true,
                    },
                    { label: "C", text: "mv³sin²θcosθ / g", selected: false },
                    { label: "D", text: "mv²sin²θ / 2g", selected: false },
                  ].map((opt) => (
                    <div
                      key={opt.label}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all cursor-pointer ${
                        opt.selected
                          ? "border-indigo/50 bg-indigo/10"
                          : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          opt.selected
                            ? "border-indigo bg-indigo"
                            : "border-white/20"
                        }`}
                      >
                        {opt.selected && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="font-jetbrains text-xs text-slate-300">
                        <span className="text-white/60 mr-2">({opt.label})</span>
                        {opt.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo to-blue-accent rounded-full"
                      style={{ width: "23%" }}
                    />
                  </div>
                  <span className="text-xs text-slate-400 font-jetbrains">
                    7/30
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Accuracy Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-16 left-10 glass rounded-lg px-5 py-3.5 shadow-xl shadow-black/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-green-500/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-sora font-bold text-lg text-green-400">
                    87%
                  </div>
                  <div className="text-[11px] text-slate-400">Accuracy</div>
                </div>
              </div>
            </motion.div>

            {/* Floating AIR Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute -top-14 right-6 glass rounded-lg px-5 py-3.5 shadow-xl shadow-black/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-saffron/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-saffron" />
                </div>
                <div>
                  <div className="font-sora font-bold text-sm">
                    YOUR MOCK AIR:{" "}
                    <span className="text-saffron">47th</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Top 0.1% nationally
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Students Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-24 -right-8 glass rounded-lg px-4 py-3 shadow-xl shadow-black/20"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-indigo/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-indigo-light" />
                </div>
                <div>
                  <div className="font-jetbrains text-xs font-medium text-indigo-light">
                    1,247 Live
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Taking this test
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
