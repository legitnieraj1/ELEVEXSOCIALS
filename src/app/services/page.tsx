import type { Metadata } from "next";
import ServicesHero from "@/components/sections/ServicesHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServicesFAQ from "@/components/sections/ServicesFAQ";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title:
    "Digital Marketing Services in Coimbatore | Web Dev, SEO, Branding & AI",
  description:
    "Full-stack digital marketing services in Coimbatore — custom web development, SEO, social media marketing, branding & AI automation. Drive real business results with ElevexSocials.",
  alternates: {
    canonical: "https://elevexsocials.com/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Marketing Services",
  provider: {
    "@type": "ProfessionalService",
    name: "ElevexSocials",
    url: "https://elevexsocials.com",
  },
  areaServed: {
    "@type": "City",
    name: "Coimbatore",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Development",
          description:
            "Fast, mobile-first websites that convert visitors into customers. Custom designs for startups, ecommerce & local businesses in Coimbatore.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Services",
          description:
            "Rank on page 1 of Google for high-intent Coimbatore keywords. On-page, off-page, technical & local SEO.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Marketing",
          description:
            "Build an engaged community and turn followers into buyers. Content creation, ads management & community building.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Branding & Identity",
          description:
            "Stand out with a brand identity that Coimbatore remembers. Logo design, brand strategy & visual identity.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation",
          description:
            "Save 20+ hours per week with intelligent business automation. Chatbots, email sequences & workflow automation.",
        },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <ServicesHero />
      <ServicesGrid />
      <ServicesFAQ />
      <ContactForm />
    </>
  );
}
