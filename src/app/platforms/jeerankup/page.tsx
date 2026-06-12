import type { Metadata } from "next"
import { jeeRankUpData } from "@/data/platforms"
import PlatformHero from "@/components/platform/PlatformHero"
import FeaturesGrid from "@/components/platform/FeaturesGrid"
import SyllabusSection from "@/components/platform/SyllabusSection"
import CtaStrip from "@/components/shared/CtaStrip"

export const metadata: Metadata = {
  title: "JeeRankUp — JEE Main & Advanced Test Series | Rank Sarthi",
  description:
    "India's most accurate JEE preparation platform. 2,400+ mock tests, NTA-exact interface, live All-India ranking. Start free today.",
  openGraph: {
    title: "JeeRankUp — JEE Main & Advanced Test Series | Rank Sarthi",
    description: "India's most accurate JEE preparation platform.",
    url: "https://ranksarthi.in/platforms/jeerankup",
    siteName: "Rank Sarthi",
    type: "website",
  },
  alternates: { canonical: "https://ranksarthi.in/platforms/jeerankup" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "JeeRankUp",
      description: metadata.description,
      brand: { "@type": "Brand", name: "Rank Sarthi" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "2840",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://ranksarthi.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Platforms",
          item: "https://ranksarthi.in/platforms",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "JeeRankUp",
          item: "https://ranksarthi.in/platforms/jeerankup",
        },
      ],
    },
  ],
}

export default function JeeRankUpPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <main>
        <PlatformHero data={jeeRankUpData} />
        <FeaturesGrid features={jeeRankUpData.features} />
        <SyllabusSection subjects={jeeRankUpData.subjects} />
        <CtaStrip
          heading={
            <>
              Your first mock is <em>free.</em>
            </>
          }
          primaryCta={{ label: "Take Free Mock Test →", href: "#" }}
          secondaryCta={{ label: "View Pricing Plans", href: "/plans" }}
          subtext="No credit card required. Start with a free mock and see your All-India rank instantly."
        />
      </main>
    </>
  )
}
