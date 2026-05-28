import type { Metadata } from "next";
import { PlatformsPageClient } from "./PlatformsPageClient";

export const metadata: Metadata = {
  title: "Our Platforms",
  description:
    "Explore Rank Sarthi's specialized exam preparation platforms for JEE, NEET, and NDA. Expert-curated tests tailored for each competitive exam.",
};

export default function PlatformsPage() {
  return <PlatformsPageClient />;
}
