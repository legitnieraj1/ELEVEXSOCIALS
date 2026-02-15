"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/40 rounded-full blur-[80px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="font-bold mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: "1.2" }}
          >
            <span className="text-text-primary">Digital Solutions</span>
            <br />
            <span className="italic font-light text-text-secondary">
              For The Future
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We blend futuristic aesthetics with robust engineering to deliver
            software that transforms businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
