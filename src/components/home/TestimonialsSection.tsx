"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/lib/data";

const avatarGradients = [
  "from-indigo to-blue-accent",
  "from-saffron to-yellow-500",
  "from-green-500 to-emerald-400",
  "from-purple-500 to-pink-400",
  "from-blue-accent to-cyan-400",
  "from-red-500 to-orange-400",
];

export function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-navy-light/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="Hear From Our Achievers"
          description="Real stories from students who transformed their preparation with Rank Sarthi."
        />

        {/* Scrollable Cards */}
        <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-lg p-6 md:p-7 min-w-[300px] md:min-w-[360px] max-w-[400px] snap-start flex flex-col shrink-0"
            >
              {/* Quotation Mark */}
              <div className="font-sora text-5xl text-indigo/20 leading-none mb-2 select-none">
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed italic flex-1 mb-6">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} flex items-center justify-center font-sora font-bold text-sm`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-saffron text-xs font-medium">
                    {testimonial.achievement}
                  </div>
                </div>
                <span className="ml-auto px-2.5 py-1 rounded-md bg-white/5 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  {testimonial.platform}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-8 h-1 rounded-full bg-indigo" />
          <div className="w-2 h-1 rounded-full bg-white/20" />
          <div className="w-2 h-1 rounded-full bg-white/20" />
          <div className="w-2 h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
}
