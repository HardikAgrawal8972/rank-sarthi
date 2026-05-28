import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rank Sarthi's founding story, our mission to democratize exam preparation, and the team behind India's leading competitive exam platform.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
