"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={centered ? "text-center max-w-3xl mx-auto mb-10 md:mb-12" : "mb-10 md:mb-12"}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo/10 border border-indigo/20 text-indigo-light text-xs font-semibold uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2 className="font-sora font-bold text-3xl md:text-4xl leading-tight mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
