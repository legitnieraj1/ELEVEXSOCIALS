"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Brain,
  TrendingUp,
  Share2,
  Zap,
  Database,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  "custom-web-dev": Code,
  "ai-automations": Brain,
  "social-media": Share2,
  "seo-growth": TrendingUp,
  "apps-crms": Database,
  performance: Zap,
};

export default function ServicesGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id] || Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-jade/5 border border-jade/10 rounded-2xl p-8 hover:bg-jade/10 hover:border-primary/50 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover accent */}
                <div className="w-12 h-1 bg-primary rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
