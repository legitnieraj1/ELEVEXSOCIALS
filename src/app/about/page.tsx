import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import TeamSection from "@/components/sections/TeamSection";
import CompanyTimeline from "@/components/sections/CompanyTimeline";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ClosingStatement from "@/components/sections/ClosingStatement";

export const metadata: Metadata = {
  title: "About Us | ElevexSocials",
  description:
    "ElevexSocials is a compact, execution-focused digital studio built for modern founders.",
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
