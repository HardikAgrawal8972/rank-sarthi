import type { Metadata } from "next";
import { BlogsPageClient } from "./BlogsPageClient";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Expert tips, exam strategies, and preparation guides for JEE, NEET, and NDA from the Rank Sarthi team.",
};

export default function BlogsPage() {
  return <BlogsPageClient />;
}
