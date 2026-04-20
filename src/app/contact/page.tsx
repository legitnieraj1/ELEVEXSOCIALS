import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact ElevexSocials | Digital Marketing Agency Coimbatore",
  description:
    "Get in touch for a free digital marketing consultation. Visit our Coimbatore office or book a call. Web development, SEO, branding & AI automation.",
  alternates: {
    canonical: "https://elevexsocials.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Contact Info Bar */}
      <section className="py-16 bg-background-lighter">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              className="font-bold mb-4"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: "1.2",
              }}
            >
              Contact <span className="text-primary">ElevexSocials</span>
            </h1>
            <p className="text-text-secondary max-w-xl mx-auto">
              Get in touch for a free digital marketing consultation in Coimbatore. Let&apos;s discuss how we can grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white border border-jade/10 rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-1">Email</h3>
              <p className="text-text-secondary text-sm">
                elevexsocials@gmail.com
              </p>
            </div>

            <div className="bg-white border border-jade/10 rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-1">Phone</h3>
              <p className="text-text-secondary text-sm">+91 9500593323</p>
            </div>

            <div className="bg-white border border-jade/10 rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-1">Location</h3>
              <p className="text-text-secondary text-sm">Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
