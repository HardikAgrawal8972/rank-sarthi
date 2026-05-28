"use client";

import { motion } from "framer-motion";

interface MetricBadgeProps {
  value: string;
  label: string;
  delay?: number;
}

export function MetricBadge({ value, label, delay = 0 }: MetricBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-lg p-5 text-center hover:bg-white/[0.06] transition-all duration-300 group"
    >
      <div className="font-sora font-bold text-2xl md:text-3xl bg-gradient-to-r from-indigo-light to-blue-accent bg-clip-text text-transparent mb-2 group-hover:from-saffron group-hover:to-saffron-light transition-all duration-500">
        {value}
      </div>
      <div className="text-slate-400 text-sm font-medium">{label}</div>
    </motion.div>
  );
}
