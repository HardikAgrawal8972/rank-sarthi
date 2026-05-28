import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { platforms } from "@/lib/data";
import { PlatformDetailClient } from "./PlatformDetailClient";

interface PageProps {
  params: Promise<{ platform: string }>;
}

export async function generateStaticParams() {
  return platforms.map((p) => ({ platform: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { platform: slug } = await params;
  const platform = platforms.find((p) => p.slug === slug);
  if (!platform) return { title: "Platform Not Found" };
  return {
    title: `${platform.name} — ${platform.exam} Preparation`,
    description: platform.description,
  };
}

export default async function PlatformPage({ params }: PageProps) {
  const { platform: slug } = await params;
  const platform = platforms.find((p) => p.slug === slug);
  if (!platform) notFound();
  return <PlatformDetailClient platform={platform} />;
}
