import { HeroSection } from "@/components/home/HeroSection";
import { VisionSection } from "@/components/home/VisionSection";
import { PlatformsSection } from "@/components/home/PlatformsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <PlatformsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
