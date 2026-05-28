import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Rank Sarthi. We're here to help with your exam preparation questions, platform support, and feedback.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
