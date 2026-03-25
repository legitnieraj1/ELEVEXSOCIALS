"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "What makes ElevexSocials the best digital marketing agency in Coimbatore?",
    answer:
      "ElevexSocials combines data-driven strategies, AI-powered automation, and deep local market knowledge to deliver measurable results. We focus on ROI-driven campaigns, transparent reporting, and fast execution — launching campaigns in under 7 days. Our team understands Coimbatore's business landscape intimately, giving us an edge over generic agencies.",
  },
  {
    question:
      "How much does web development cost in Coimbatore?",
    answer:
      "Our web development packages start from affordable rates tailored for startups and small businesses in Coimbatore. Pricing depends on the project scope — a simple business website costs less than a full e-commerce platform. We offer custom quotes after understanding your needs. Contact us for a free website audit and detailed pricing.",
  },
  {
    question:
      "How long does it take to rank on Google with SEO in Coimbatore?",
    answer:
      "With our proven SEO process, you can expect initial results within 30-60 days for long-tail and local keywords. Page 1 rankings for primary keywords typically happen within 3-6 months. We start with technical fixes and on-page optimization in month 1, build authority through content and backlinks in months 2-3, and achieve significant traffic growth by month 3-6.",
  },
  {
    question:
      "Do you offer social media marketing for small businesses in Coimbatore?",
    answer:
      "Yes! We specialize in social media marketing for small businesses, restaurants, gyms, e-commerce brands, and startups in Coimbatore. Our services include content strategy, graphic design, video content (Reels, Stories, carousels), paid advertising with optimized targeting, and monthly analytics reports with engagement and conversion metrics.",
  },
  {
    question:
      "What is AI automation and how can it help my Coimbatore business?",
    answer:
      "AI automation uses intelligent tools to handle repetitive business tasks automatically — like responding to customer inquiries via WhatsApp chatbots, sending automated email sequences for lead nurturing, scheduling appointments, and managing CRM workflows. This saves you 20+ hours per week and lets you focus on growing your business while AI handles the operational work.",
  },
  {
    question:
      "Can you help with branding and logo design for a new business in Coimbatore?",
    answer:
      "Absolutely. We offer complete branding services including brand strategy and positioning workshops, logo design with unlimited revisions, visual identity systems (colors, typography, imagery guidelines), brand guidelines documents, business card and stationery design, and social media branding kits. A strong brand helps you charge premium prices and build long-term customer loyalty.",
  },
  {
    question:
      "Do you work with businesses outside Coimbatore?",
    answer:
      "While we're based in Coimbatore and deeply understand the local market, we also serve businesses across Tamil Nadu including Tirupur, Erode, Salem, and beyond. We work with clients across India, especially for web development, SEO, and AI automation services.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 bg-background-lighter overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-jade/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: "1.2",
            }}
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-jade to-aqua bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-text-secondary">
            Everything you need to know about our digital marketing services in
            Coimbatore.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.08,
              }}
              className="bg-white/60 backdrop-blur-sm border border-jade/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
              >
                <span className="font-semibold text-text-primary pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-jade shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
