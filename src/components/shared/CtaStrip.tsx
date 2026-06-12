import type { ReactNode } from "react"

interface CtaLink {
  label: string
  href: string
}

interface CtaStripProps {
  heading: ReactNode
  subtext: string
  primaryCta: CtaLink
  secondaryCta: CtaLink
}

export default function CtaStrip({
  heading,
  subtext,
  primaryCta,
  secondaryCta,
}: CtaStripProps) {
  return (
    <section className="relative overflow-hidden bg-[#1B2D8F] py-16 text-center font-body">
      <div className="absolute -left-20 -top-20 size-80 rounded-full bg-[rgba(255,255,255,.04)]" />
      <div className="absolute -bottom-16 -right-16 size-60 rounded-full bg-[rgba(255,255,255,.10)]" />

      <div className="relative z-10 mx-auto max-w-[1160px] px-6">
        <h2 className="mb-3 font-sora text-[clamp(32px,6vw,52px)] font-bold leading-[1.1] tracking-normal text-[#FFFFFF] [&_em]:text-[#E6A817] [&_em]:italic">
          {heading}
        </h2>
        <p className="mx-auto mb-8 max-w-[680px] text-base text-[rgba(255,255,255,.65)]">
          {subtext}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            className="inline-flex items-center rounded-[8px] bg-[#D93025] px-7 py-[13px] text-sm font-semibold text-[#FFFFFF] shadow-[0_4px_18px_rgba(217,48,37,.4)] transition hover:-translate-y-0.5 hover:bg-[#FF4438]"
            href={primaryCta.href}
          >
            {primaryCta.label}
          </a>
          <a
            className="inline-flex items-center rounded-[8px] border border-[rgba(255,255,255,.25)] bg-[rgba(255,255,255,.12)] px-7 py-[13px] text-sm font-semibold text-[#FFFFFF] transition hover:-translate-y-0.5"
            href={secondaryCta.href}
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
