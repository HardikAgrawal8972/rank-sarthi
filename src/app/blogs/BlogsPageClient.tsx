"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "JEE", "NEET", "NDA", "Study Tips"];

const categoryColors: Record<string, string> = {
  JEE: "bg-indigo/20 text-indigo-light",
  NEET: "bg-green-500/20 text-green-400",
  NDA: "bg-amber-500/20 text-amber-400",
  "Study Tips": "bg-purple-500/20 text-purple-400",
};

const cardAccents: Record<string, string> = {
  JEE: "from-indigo to-blue-accent",
  NEET: "from-green-500 to-emerald-400",
  NDA: "from-amber-500 to-yellow-400",
  "Study Tips": "from-purple-500 to-pink-400",
};

export function BlogsPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo/10 border border-indigo/20 text-indigo-light text-xs font-semibold uppercase tracking-wider mb-4">
            Blog
          </span>
          <h1 className="font-sora font-extrabold text-4xl md:text-5xl mb-3">
            Blog & Insights
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
            Expert strategies, exam analysis, and study tips from India&apos;s
            top educators.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "bg-indigo text-white shadow-lg shadow-indigo/25"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              layout
            >
              <Link
                href={`/blogs/${post.slug}`}
                className="block glass-card rounded-lg overflow-hidden group hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 transition-all duration-300 h-full"
              >
                {/* Gradient accent */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${cardAccents[post.category] || "from-indigo to-blue-accent"}`}
                />

                <div className="p-6">
                  {/* Category + Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider ${categoryColors[post.category] || "bg-indigo/20 text-indigo-light"}`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sora font-bold text-base mb-3 leading-snug group-hover:text-indigo-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <User size={12} />
                        {post.author}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No posts in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
