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
  ArrowRight
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const // Custom cubic-bezier for "premium" feel
    }
  }
};

export default function ServicesGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id] || Code;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1,
                  borderColor: "rgba(74, 169, 144, 0.3)", // Low opacity Jade
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly lighter bg
                  boxShadow: "0 10px 40px -10px rgba(74, 169, 144, 0.1)" // Soft Jade bloom
                }}
                className="bg-white/40 border border-jade/10 rounded-2xl p-8 backdrop-blur-sm transition-colors duration-500 group relative overflow-hidden"
              >
                {/* Background Tint on Hover */}
                <motion.div
                  className="absolute inset-0 bg-[#DFF3EE]/0 pointer-events-none"
                  whileHover={{ backgroundColor: "rgba(223, 243, 238, 0.3)" }} // Soft Mint tint
                  transition={{ duration: 0.4 }}
                />

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 bg-jade/10 rounded-xl flex items-center justify-center mb-6 relative z-10"
                  whileHover={{ scale: 1.05, rotate: 3, backgroundColor: "rgba(74, 169, 144, 0.2)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Icon className="w-7 h-7 text-jade" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-jade transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6 relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-text-secondary/80 group-hover:text-text-secondary transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-jade/60 rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Divider Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-jade to-aqua"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
