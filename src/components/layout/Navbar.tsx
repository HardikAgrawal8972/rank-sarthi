"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo to-blue-accent flex items-center justify-center font-sora font-bold text-sm tracking-tight">
              RS
            </div>
            <div className="flex flex-col">
              <span className="font-sora font-bold text-base leading-tight tracking-tight">
                Rank Sarthi
              </span>
              <span className="text-[10px] text-slate-400 leading-tight tracking-widest uppercase">
                Prepare Smarter
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-white bg-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Log In
            </button>
            <Link
              href="/#pricing"
              className="px-5 py-2.5 bg-saffron hover:bg-saffron-light text-navy font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-saffron/20 hover:shadow-saffron/30 hover:-translate-y-0.5"
            >
              Start Free Test
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-navy-light/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all",
                      isActive
                        ? "text-white bg-indigo/20"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.name}
                    <ChevronRight size={16} className="opacity-40" />
                  </Link>
                );
              })}
              <div className="pt-3 mt-3 border-t border-white/10 space-y-2">
                <button className="w-full px-4 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 text-left">
                  Log In
                </button>
                <Link
                  href="/#pricing"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-3 bg-saffron hover:bg-saffron-light text-navy font-semibold text-sm rounded-lg text-center transition-all shadow-lg shadow-saffron/20"
                >
                  Start Free Test
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
