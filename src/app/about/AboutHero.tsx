"use client";

import { motion } from "framer-motion";
import { Diamond } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-lighter to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="font-bold mb-6 lowercase"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: "1.1" }}
          >
            about
          </h1>

          <Diamond className="w-6 h-6 text-primary mx-auto mb-6" />

          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-8">
            Based in Coimbatore. Operating Worldwide.
          </p>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-4">
            ElevexSocials is a compact, execution-focused digital studio built for modern founders.
          </p>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-4">
            We work at the intersection of AI automation, web systems, and social growth, helping businesses eliminate operational headaches and turn complexity into clarity.
          </p>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            From intelligent workflows and chat-based automation to
            high-performance websites and scalable digital infrastructure, we design
            solutions that solve real problems — not surface-level symptoms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
