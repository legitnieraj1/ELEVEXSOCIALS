"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-jade/5 via-transparent to-aqua/5 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-bold mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: "1.2",
            }}
          >
            Ready to Dominate Digital{" "}
            <span className="bg-gradient-to-r from-jade to-aqua bg-clip-text text-transparent">
              in Coimbatore?
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re a startup, a gym owner, or an established e-commerce
            brand, ElevexSocials has the strategy and the team to get you to #1.
            Book a free 30-minute strategy call today and let&apos;s build your
            growth roadmap.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-jade text-white font-bold text-lg rounded-xl hover:bg-teal hover:shadow-xl hover:shadow-jade/20 transition-all duration-300 hover:scale-[1.03] active:scale-95 group"
          >
            Get My Free Growth Plan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
