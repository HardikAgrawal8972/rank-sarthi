"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/shared/ContactForm";
import { cn } from "@/lib/utils";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "support@ranksarthi.in",
    href: "mailto:support@ranksarthi.in",
    color: "text-indigo-light",
    bg: "bg-indigo/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "HSR Layout, Bengaluru, Karnataka 560102",
    href: null,
    color: "text-blue-accent",
    bg: "bg-blue-accent/10",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon-Sat, 9:00 AM - 8:00 PM IST",
    href: null,
    color: "text-saffron",
    bg: "bg-saffron/10",
  },
];

const faqs = [
  {
    q: "How do I get started with Rank Sarthi?",
    a: "Simply click 'Start Free Test' on the homepage, create your account, and begin with 5 free mock tests on any platform. No credit card required.",
  },
  {
    q: "Can I switch between platforms (JEE, NEET, NDA)?",
    a: "Yes! Your subscription gives you access to all platforms. You can switch between JeeRankUp, NeetRankUp, and NDARankUp anytime from your dashboard.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a 7-day money-back guarantee on all paid plans. If you're not satisfied, contact us within 7 days of purchase for a full refund.",
  },
  {
    q: "How accurate are the AI rank predictions?",
    a: "Our AI engine has a 98% accuracy rate in predicting AIR ranges, based on analysis of 3 years of exam data and student performance patterns.",
  },
  {
    q: "Do you offer group or institutional plans?",
    a: "Yes, we offer special pricing for coaching institutes and schools. Contact us at partnerships@ranksarthi.in for custom plans.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 text-slate-400 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ContactPageClient() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="pb-12 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo/10 border border-indigo/20 text-indigo-light text-xs font-semibold uppercase tracking-wider mb-4">
              Contact
            </span>
            <h1 className="font-sora font-extrabold text-4xl md:text-5xl mb-3">
              Get in Touch
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
              Have questions? We&apos;re here to help. Reach out and we&apos;ll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-4">
              {contactDetails.map((detail, i) => {
                const Icon = detail.icon;
                const Tag = detail.href ? "a" : "div";
                return (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Tag
                      {...(detail.href ? { href: detail.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="glass-card rounded-lg p-5 flex items-center gap-4 hover:bg-white/[0.06] transition-all duration-300 block"
                    >
                      <div className={`w-11 h-11 rounded-lg ${detail.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${detail.color}`} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{detail.label}</div>
                        <div className="text-sm font-medium text-slate-300">{detail.value}</div>
                      </div>
                    </Tag>
                  </motion.div>
                );
              })}

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="glass-card rounded-lg p-8 flex flex-col items-center justify-center min-h-[180px] mt-4"
                style={{
                  background: "linear-gradient(135deg, rgba(32,59,224,0.05), rgba(74,144,217,0.05))",
                }}
              >
                <MapPin className="w-8 h-8 text-slate-500 mb-3" />
                <p className="text-slate-500 text-sm font-medium">Interactive Map</p>
                <p className="text-slate-600 text-xs">Coming Soon</p>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-light/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about Rank Sarthi."
          />
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
