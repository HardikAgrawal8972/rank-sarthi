"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MetricBadge } from "@/components/shared/MetricBadge";
import { timeline, teamMembers } from "@/lib/data";

const avatarGradients = [
  "from-indigo to-blue-accent",
  "from-saffron to-yellow-500",
  "from-green-500 to-emerald-400",
  "from-purple-500 to-pink-400",
  "from-blue-accent to-cyan-400",
  "from-red-500 to-orange-400",
];

export function AboutPageClient() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="pb-14 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo/10 border border-indigo/20 text-indigo-light text-xs font-semibold uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h1 className="font-sora font-extrabold text-4xl md:text-5xl mb-5">
              Empowering India&apos;s{" "}
              <span className="bg-gradient-to-r from-indigo-light to-saffron bg-clip-text text-transparent">
                Future Leaders
              </span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Rank Sarthi was born from a simple observation: millions of talented
              students across India lacked access to quality exam preparation.
              Premium coaching was limited to a few cities and a privileged few.
              We set out to change that — building a platform that delivers
              IIT/AIIMS-calibre preparation to every smartphone in every corner of India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy-light/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="From Idea to Impact"
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo via-blue-accent to-saffron" />

            {timeline.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-indigo border-2 border-navy -translate-x-1.5 mt-6 z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-card rounded-lg p-6">
                    <span className="inline-block px-3 py-1 rounded-lg bg-indigo/20 text-indigo-light font-sora font-bold text-sm mb-3">
                      {event.year}
                    </span>
                    <h3 className="font-sora font-bold text-lg mb-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="The People Behind Rank Sarthi"
            description="A passionate team of educators, engineers, and product builders united by a common mission."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-lg p-6 group hover:bg-white/[0.06] transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center font-sora font-bold text-lg mb-5`}
                >
                  {member.avatar}
                </div>
                <h3 className="font-sora font-bold text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-light text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Metrics */}
      <section className="section-padding bg-navy-light/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="By The Numbers"
            title="Our Impact in Numbers"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <MetricBadge value="50K+" label="Active Students" delay={0} />
            <MetricBadge value="5,100+" label="Mock Tests Available" delay={0.1} />
            <MetricBadge value="1.6M+" label="Total Questions" delay={0.2} />
            <MetricBadge value="6" label="Indian States Covered" delay={0.3} />
          </div>
        </div>
      </section>
    </div>
  );
}
