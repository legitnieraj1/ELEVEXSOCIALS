import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import TeamSection from "@/components/sections/TeamSection";
import CompanyTimeline from "@/components/sections/CompanyTimeline";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ELEVEXSOCIALS - a creative collective of event producers, marketing specialists, art directors, designers, and strategic analysts based in Bengaluru.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <TeamSection />
      <CompanyTimeline />
    </>
  );
}
