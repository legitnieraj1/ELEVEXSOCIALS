"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Target,
  MapPin,
  Eye,
  Rocket,
  Brain,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Results-First Approach",
    description:
      "We measure everything and optimize relentlessly. Every campaign is backed by data, not guesswork.",
  },
  {
    icon: MapPin,
    title: "Coimbatore-Born Agency",
    description:
      "We understand the local market deeply — the culture, competition, and customer behavior of Coimbatore businesses.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "Real-time dashboards, weekly reports, and no hidden costs. You always know exactly where your investment goes.",
  },
  {
    icon: Rocket,
    title: "Speed to Market",
    description:
      "Launch campaigns in under 7 days, not 7 weeks. We move fast without compromising quality.",
  },
  {
    icon: Brain,
    title: "AI-Powered Edge",
    description:
      "We use cutting-edge automation tools that most agencies in Coimbatore don't offer, giving you a competitive advantage.",
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-background-lighter overflow-hidden"
    >
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-aqua/5 rounded-full blur-[150px] pointer-events-none" />

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
            Why 50+ Coimbatore Businesses{" "}
            <span className="bg-gradient-to-r from-jade to-aqua bg-clip-text text-transparent">
              Choose ElevexSocials
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-jade to-aqua mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex gap-4"
              >
                <div className="shrink-0 w-12 h-12 bg-jade/10 rounded-xl flex items-center justify-center group-hover:bg-jade/20 transition-colors">
                  <Icon className="w-6 h-6 text-jade" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-jade transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
