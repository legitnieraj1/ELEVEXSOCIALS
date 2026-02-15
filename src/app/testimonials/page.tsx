import type { Metadata } from "next";
import ClientSuccess from "@/components/sections/ClientSuccess";
import Transformations from "@/components/sections/Transformations";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what our clients say about working with ELEVEXSOCIALS. Real results, real reviews from businesses we have transformed.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <ClientSuccess />
      <Transformations />
    </div>
  );
}
