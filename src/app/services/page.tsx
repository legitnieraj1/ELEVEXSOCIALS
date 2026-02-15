import type { Metadata } from "next";
import ServicesHero from "@/components/sections/ServicesHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive digital solutions - Custom Web Development, AI Automations, Social Media Marketing, SEO & Growth, and Next-Gen Apps & CRMs.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ContactForm />
    </>
  );
}
