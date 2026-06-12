"use client"

import { useEffect, useRef, useState, type MutableRefObject } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { PlatformFeature } from "@/data/platforms"

interface FeaturesGridProps {
  features: PlatformFeature[]
}

interface InViewOptions {
  triggerOnce: boolean
  threshold: number
}

function useInView<T extends HTMLElement>({
  triggerOnce,
  threshold,
}: InViewOptions): [MutableRefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return
        }

        if (entry.isIntersecting) {
          setIsInView(true)

          if (triggerOnce) {
            observer.unobserve(entry.target)
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      { threshold }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [threshold, triggerOnce])

  return [ref, isInView]
}

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  const [sectionRef, isInView] = useInView<HTMLDivElement>({
    triggerOnce: true,
    threshold: 0.15,
  })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="border-y border-[#E3E8F4] bg-[#FFFFFF] py-20 font-body text-[#0E1117]">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-2.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#D93025] before:block before:h-0.5 before:w-7 before:bg-[#D93025]">
            What's Included
          </div>
          <h2 className="font-display text-[clamp(32px,6vw,52px)] font-bold leading-[1.1] tracking-normal text-[#0E1117]">
            Everything you need to <span className="text-[#1B2D8F]">crack JEE</span>
          </h2>
        </div>

        <motion.div
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-5 md:grid-cols-3"
          initial="hidden"
          ref={sectionRef}
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.article
              className="group relative overflow-hidden rounded-[12px] border-[1.5px] border-[#E3E8F4] bg-[#FFFFFF] p-7 transition-shadow hover:shadow-[0_8px_32px_rgba(27,45,143,.12)]"
              key={feature.title}
              transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            >
              <span className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-[#1B2D8F] transition-transform duration-200 group-hover:scale-x-100" />
              <div className="mb-3.5 text-[28px]" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-display text-xl font-bold leading-tight text-[#0E1117]">
                {feature.title}
              </h3>
              <p className="text-[13.5px] leading-[1.65] text-[#3D4A63]">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
