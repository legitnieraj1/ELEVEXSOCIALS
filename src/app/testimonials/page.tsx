import type { Metadata } from "next";
import ClientSuccess from "@/components/sections/ClientSuccess";
import Transformations from "@/components/sections/Transformations";

export const metadata: Metadata = {
  title: "Client Results & Testimonials | ElevexSocials Coimbatore",
  description:
    "See real results from businesses we've transformed. ElevexSocials delivers measurable growth through web development, SEO, branding & digital marketing in Coimbatore.",
  alternates: {
    canonical: "https://elevexsocials.com/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <ClientSuccess />
      <Transformations />
    </div>
  );
}
