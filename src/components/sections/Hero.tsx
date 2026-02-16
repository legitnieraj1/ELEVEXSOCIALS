"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import GraphTextReveal from "@/components/hero/GraphTextReveal";
import HeroGraph from "@/components/hero/HeroGraph";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Luxury Ambient Background */}
      <div className="absolute inset-0">
        <div
          className="absolute left-[-8%] top-[30%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-40 animate-float-slow"
          style={{
            background: "radial-gradient(circle, rgba(74,169,144,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute right-[5%] top-[15%] w-[350px] h-[350px] rounded-full blur-[120px] opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(110,212,230,0.1) 0%, transparent 70%)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute left-[30%] bottom-[10%] w-[300px] h-[300px] rounded-full blur-[100px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(47,143,120,0.08) 0%, transparent 70%)",
            animation: "float-slow 12s ease-in-out infinite",
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,169,144,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(74,169,144,.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side — Graph Animation (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center relative h-[950px]"
          >
            <div className="relative w-full h-full max-w-[600px] flex items-center justify-center">
              {/* Glow behind graph */}
              <div className="absolute inset-0 bg-gradient-to-tr from-jade/10 to-aqua/10 blur-[100px] rounded-full" />
              <HeroGraph />
            </div>
          </motion.div>

          {/* Right side — Hero Copy */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Mobile Graph — Above headline */}
            <motion.div
              variants={itemVariants}
              className="lg:hidden mb-8"
            >
              <GraphTextReveal
                text="ELEVEXSOCIALS"
                duration={4000}
                delay={300}
                autoPlay={true}
                gradient={{
                  start: '#4AA990',
                  end: '#6ED4E6',
                }}
                width={400}
                height={200}
              />
            </motion.div>

            {/* ── Headline ── */}
            <motion.h1
              variants={itemVariants}
              className="font-bold mb-8 leading-[1.06] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              <span className="text-text-primary">Elevate Your Brand</span>
              <br />
              <span className="bg-gradient-to-r from-jade via-aqua to-jade bg-clip-text text-transparent">
                Engineer Your Growth
              </span>
              <br />
              <span className="text-text-primary">Own the Digital Space</span>
            </motion.h1>

            {/* ── Subhead ── */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-text-secondary mb-10 max-w-xl leading-relaxed"
            >
              We build intelligent digital systems that turn attention into leverage.
              From AI-powered automation to performance-first social strategies,
              ElevexSocials helps modern brands scale with clarity, control, and precision.
            </motion.p>

            {/* ── Value Blocks ── */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {/* Block 1 */}
              <div className="p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-jade/10 hover:border-jade/20 transition-all duration-300 group">
                <h3 className="text-sm font-bold text-jade uppercase tracking-wider mb-2">
                  Built for Real-World Impact
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Ecommerce platforms, fitness ecosystems, smart attendance systems,
                  and automated business workflows — engineered to perform.
                </p>
              </div>
              {/* Block 2 */}
              <div className="p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-jade/10 hover:border-jade/20 transition-all duration-300 group">
                <h3 className="text-sm font-bold text-jade uppercase tracking-wider mb-2">
                  Designed for Long-Term Growth
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Every solution compounds over time, integrating technology, data,
                  and strategy into one unified growth engine.
                </p>
              </div>
            </motion.div>

            {/* ── Power Statements ── */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10">
              <span className="text-text-muted text-sm">
                Not visibility. <span className="text-text-primary font-semibold">Influence.</span>
              </span>
              <span className="hidden sm:inline text-jade/30">|</span>
              <span className="text-text-muted text-sm">
                Not posts. <span className="text-text-primary font-semibold">Systems.</span>
              </span>
              <span className="hidden sm:inline text-jade/30">|</span>
              <span className="text-text-muted text-sm">
                Not growth hacks. <span className="text-text-primary font-semibold">Infrastructure.</span>
              </span>
            </motion.div>

            {/* ── CTAs ── */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-8 py-4 bg-jade text-white font-semibold rounded-lg hover:bg-teal hover:shadow-lg hover:shadow-jade/20 transition-all duration-300 hover:scale-[1.03] active:scale-95"
              >
                OUR SERVICES
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-jade text-jade font-semibold rounded-lg hover:bg-jade hover:text-white transition-all duration-300 group flex items-center gap-2 hover:shadow-lg hover:shadow-jade/20"
              >
                BOOK A DEMO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-2">
          <span className="text-text-muted text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-jade/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
