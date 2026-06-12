"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { PlatformData } from "@/data/platforms"
import TestPreviewCard from "@/components/platform/TestPreviewCard"

interface PlatformHeroProps {
  data: PlatformData
}

export default function PlatformHero({ data }: PlatformHeroProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-b border-[#E3E8F4] bg-[#FFFFFF] pt-14 font-body text-[#0E1117] before:absolute before:left-0 before:right-0 before:top-0 before:h-[5px] before:bg-[linear-gradient(90deg,#1B2D8F,#2D45B5)]">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-16">
          <div className="pb-12 md:pb-14">
            <nav className="mb-6 flex items-center gap-2 bg-transparent text-[13px] text-[#7A869A]">
              <a className="transition-colors hover:text-[#1B2D8F]" href="/">
                Home
              </a>
              <span>/</span>
              <a className="transition-colors hover:text-[#1B2D8F]" href="/platforms">
                Platforms
              </a>
              <span>/</span>
              <a className="font-semibold text-[#1B2D8F]" href="/platforms/jeerankup">
                {data.name}
              </a>
            </nav>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9D2E8] bg-[#EEF1FC] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.07em] text-[#1B2D8F]">
              <span aria-hidden="true">{data.emoji}</span>
              <span>{data.exam}</span>
            </div>

            <h1 className="mb-3 font-display text-[clamp(48px,9vw,76px)] font-bold leading-none tracking-normal text-[#0E1117]">
              {data.name}
            </h1>

            <p className="mb-[18px] font-display text-xl italic text-[#1B2D8F]">
              {data.tagline}
            </p>

            <p className="mb-8 max-w-[480px] text-base leading-[1.75] text-[#3D4A63]">
              {data.heroDescription}
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B2D8F] px-7 py-[13px] text-sm font-semibold text-[#FFFFFF] shadow-[0_4px_18px_rgba(27,45,143,.3)] transition hover:-translate-y-0.5 hover:bg-[#132270]"
                href="#"
              >
                Start Free Mock →
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-[8px] border-[1.5px] border-[#C9D2E8] bg-transparent px-7 py-[13px] text-sm font-semibold text-[#1B2D8F] transition hover:-translate-y-0.5 hover:border-[#1B2D8F] hover:bg-[#EEF1FC]"
                href="/plans"
              >
                View Plans
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-[12px] border border-[#E3E8F4] border-b-[3px] border-b-[#1B2D8F] bg-[#F9F8F5] px-6 py-5 sm:grid-cols-5 sm:gap-7">
              {data.stats.map((stat) => (
                <div className="text-center" key={stat.label}>
                  <div className="font-display text-[28px] font-bold leading-none text-[#1B2D8F]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] font-medium text-[#7A869A]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="self-end md:pt-10"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.15, duration: shouldReduceMotion ? 0 : 0.45 }}
          >
            <TestPreviewCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
