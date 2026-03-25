"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Brain, Share2, TrendingUp, Palette, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "Web Development",
    tagline:
      "Fast, mobile-first websites that convert visitors into customers",
  },
  {
    icon: TrendingUp,
    title: "SEO Services",
    tagline:
      "Rank on page 1 of Google for high-intent Coimbatore keywords",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    tagline:
      "Build an engaged community and turn followers into buyers",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    tagline:
      "Stand out with a brand identity that Coimbatore remembers",
  },
  {
    icon: Brain,
    title: "AI Automation",
    tagline:
      "Save 20+ hours per week with intelligent business automation",
  },
];

export default function ServicesOverview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-background overflow-hidden"
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-jade/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2
            className="font-bold mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: "1.2",
            }}
          >
            Full-Stack Digital Marketing Services{" "}
            <span className="bg-gradient-to-r from-jade to-aqua bg-clip-text text-transparent">
              in Coimbatore
            </span>
          </h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed">
            We deliver end-to-end digital solutions tailored for businesses in
            Coimbatore and across Tamil Nadu. Every strategy we build is designed
            to drive measurable results — more traffic, more leads, more
            revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-jade/10 hover:border-jade/30 hover:shadow-lg hover:shadow-jade/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-jade/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-jade/20 transition-colors">
                  <Icon className="w-6 h-6 text-jade" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-jade transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.tagline}
                </p>
              </motion.div>
            );
          })}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group p-6 rounded-2xl bg-gradient-to-br from-jade/10 to-aqua/5 border border-jade/20 flex flex-col items-center justify-center text-center hover:shadow-lg hover:shadow-jade/10 transition-all duration-300"
          >
            <Zap className="w-8 h-8 text-jade mb-3" />
            <p className="text-text-primary font-bold mb-3">
              Ready to grow your business?
            </p>
            <Link
              href="/services"
              className="px-6 py-2.5 bg-jade text-white text-sm font-semibold rounded-lg hover:bg-teal transition-colors"
            >
              Explore All Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
