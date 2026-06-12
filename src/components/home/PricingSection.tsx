"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const formatPrice = (plan: (typeof pricingPlans)[0]) => {
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    if (price === 0) return "₹0";
    return `₹${price.toLocaleString("en-IN")}`;
  };

  const period = isAnnual ? "/yr" : "/mo";

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Plans & Pricing"
          title="Invest in Your Future"
          description="Choose a plan that fits your preparation goals. Start free, upgrade anytime."
        />

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 md:mb-12"
        >
          <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/5">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                !isAnnual
                  ? "bg-indigo text-white shadow-lg shadow-indigo/25"
                  : "text-slate-400 hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                isAnnual
                  ? "bg-indigo text-white shadow-lg shadow-indigo/25"
                  : "text-slate-400 hover:text-white"
              )}
            >
              Annual
            </button>
          </div>
          {!isAnnual && (
            <span className="px-3 py-1 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-xs font-semibold">
              Save 33% Annually
            </span>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "rounded-lg overflow-hidden transition-all duration-300",
                plan.popular
                  ? "gradient-border glow-indigo scale-[1.02]"
                  : ""
              )}
            >
              <div
                className={cn(
                  "h-full rounded-lg p-6 lg:p-7 flex flex-col",
                  plan.popular
                    ? "bg-navy-light"
                    : "glass-card"
                )}
              >
                {/* Badge */}
                {plan.popular && (
                  <div className="mb-5">
                    <span className="px-3 py-1 rounded-full bg-saffron text-navy text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="font-sora font-bold text-xl mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm mb-5">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-7">
                  <div className="flex items-baseline gap-1">
                    <span className="font-sora font-extrabold text-4xl lg:text-5xl">
                      {formatPrice(plan)}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-slate-400 text-sm">{period}</span>
                    )}
                  </div>
                  {plan.monthlyPrice === 0 && (
                    <span className="text-slate-400 text-sm">
                      Free forever
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-7 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <Check
                        size={16}
                        className={cn(
                          "shrink-0 mt-0.5",
                          plan.popular ? "text-saffron" : "text-indigo-light"
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/platforms/jeerankup"
                  className={cn(
                    "block w-full py-3.5 rounded-lg font-semibold text-sm text-center transition-all duration-300 hover:-translate-y-0.5",
                    plan.popular
                      ? "bg-indigo hover:bg-indigo-light text-white shadow-lg shadow-indigo/25 hover:shadow-indigo/40"
                      : plan.premium
                      ? "bg-gradient-to-r from-indigo to-blue-accent text-white shadow-lg shadow-indigo/20 hover:shadow-indigo/30"
                      : "border border-white/20 hover:border-white/40 text-white hover:bg-white/5"
                  )}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
