import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import TeamSection from "@/components/sections/TeamSection";
import CompanyTimeline from "@/components/sections/CompanyTimeline";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ClosingStatement from "@/components/sections/ClosingStatement";

export const metadata: Metadata = {
  title: "About ElevexSocials | Coimbatore Digital Marketing Team",
  description:
    "Meet the team behind Coimbatore's fastest-growing digital marketing agency. Learn about our story, values & results-driven approach to web development, SEO & branding.",
  alternates: {
    canonical: "https://elevexsocials.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatWeDo />
      <TeamSection />
      <CompanyTimeline />
      <ClosingStatement />
    </>
  );
}
