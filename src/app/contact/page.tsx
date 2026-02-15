import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ELEVEXSOCIALS. Let us discuss your next project and how we can help transform your digital presence.",
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
              Let&apos;s <span className="text-primary">Connect</span>
            </h1>
            <p className="text-text-secondary max-w-xl mx-auto">
              Have a project in mind? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white border border-jade/10 rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-1">Email</h3>
              <p className="text-text-secondary text-sm">
                hello@elevexsocials.com
              </p>
            </div>

            <div className="bg-white border border-jade/10 rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-1">Phone</h3>
              <p className="text-text-secondary text-sm">+91 98765 43210</p>
            </div>

            <div className="bg-white border border-jade/10 rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-1">Location</h3>
              <p className="text-text-secondary text-sm">Bengaluru, India</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
