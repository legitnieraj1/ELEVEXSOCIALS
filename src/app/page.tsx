import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WorkflowSection from "@/components/sections/WorkflowSection";
import ClientSuccess from "@/components/sections/ClientSuccess";
import Transformations from "@/components/sections/Transformations";
import HomeCTA from "@/components/sections/HomeCTA";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title:
    "ElevexSocials | Best Digital Marketing Agency in Coimbatore | Web Dev, SEO & Branding",
  description:
    "ElevexSocials is the top-rated digital marketing agency in Coimbatore offering web development, SEO, branding, social media marketing & AI automation. Get a free strategy call today.",
  alternates: {
    canonical: "https://elevexsocials.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <WorkflowSection />
      <ClientSuccess />
      <Transformations />
      <HomeCTA />
      <ContactForm />
    </>
  );
}
