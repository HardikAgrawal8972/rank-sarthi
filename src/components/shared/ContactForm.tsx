"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+]?[\d\s-]+$/, "Please enter a valid phone number"),
  platform: z.string().min(1, "Please select a platform"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  compact?: boolean;
}

export function ContactForm({ compact = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-lg p-6 md:p-8 flex flex-col items-center justify-center min-h-[360px] text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="font-sora font-bold text-xl mb-2">Message Sent!</h3>
        <p className="text-slate-400 text-sm">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-card rounded-lg p-5 md:p-6 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-slate-300 mb-1.5"
          >
            Full Name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Rajesh Kumar"
            {...register("name")}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 transition-all",
              errors.name
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-indigo/30 focus:border-indigo/50"
            )}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-slate-300 mb-1.5"
          >
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="rajesh@example.com"
            {...register("email")}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 transition-all",
              errors.email
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-indigo/30 focus:border-indigo/50"
            )}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-medium text-slate-300 mb-1.5"
          >
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+91 98765 43210"
            {...register("phone")}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 transition-all",
              errors.phone
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-indigo/30 focus:border-indigo/50"
            )}
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Platform */}
        <div>
          <label
            htmlFor="contact-platform"
            className="block text-sm font-medium text-slate-300 mb-1.5"
          >
            Select Platform
          </label>
          <select
            id="contact-platform"
            {...register("platform")}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-white/5 border text-white text-sm focus:outline-none focus:ring-2 transition-all appearance-none",
              errors.platform
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-indigo/30 focus:border-indigo/50"
            )}
          >
            <option value="" className="bg-navy">
              Choose platform...
            </option>
            <option value="jeerankup" className="bg-navy">
              JeeRankUp
            </option>
            <option value="neetrankup" className="bg-navy">
              NeetRankUp
            </option>
            <option value="ndarankup" className="bg-navy">
              NDARankUp
            </option>
            <option value="general" className="bg-navy">
              General Inquiry
            </option>
          </select>
          {errors.platform && (
            <p className="text-red-400 text-xs mt-1">
              {errors.platform.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-slate-300 mb-1.5"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          rows={compact ? 3 : 5}
          placeholder="Tell us how we can help you..."
          {...register("message")}
          className={cn(
            "w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 transition-all resize-none",
            errors.message
              ? "border-red-500/50 focus:ring-red-500/30"
              : "border-white/10 focus:ring-indigo/30 focus:border-indigo/50"
          )}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3 bg-indigo hover:bg-indigo-light text-white font-semibold text-sm rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo/20 hover:shadow-indigo/30 hover:-translate-y-0.5"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
