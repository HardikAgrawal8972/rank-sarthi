"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/shared/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "support@ranksarthi.in",
    href: "mailto:support@ranksarthi.in",
    color: "text-indigo-light",
    bg: "bg-indigo/10",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon-Sat, 9:00 AM - 8:00 PM IST",
    href: null,
    color: "text-saffron",
    bg: "bg-saffron/10",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Bengaluru, Karnataka, India",
    href: null,
    color: "text-blue-accent",
    bg: "bg-blue-accent/10",
  },
];

export function ContactSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get in Touch"
          title="We're Here to Help"
          description="Have questions about our platform? Need help choosing a plan? Reach out and we'll respond within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const Wrapper = info.href ? "a" : "div";
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Wrapper
                    {...(info.href
                      ? { href: info.href, target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="glass-card rounded-lg p-5 flex items-center gap-4 hover:bg-white/[0.06] transition-all duration-300 block"
                  >
                    <div
                      className={`w-11 h-11 rounded-lg ${info.bg} flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                        {info.label}
                      </div>
                      <div className="text-sm font-medium text-slate-300">
                        {info.value}
                      </div>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <ContactForm compact />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
