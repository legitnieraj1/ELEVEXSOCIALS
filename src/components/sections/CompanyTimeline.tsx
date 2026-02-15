"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { TIMELINE_PHASES } from "@/lib/constants";

function TimelineCard({
  phase,
  index,
  inView,
}: {
  phase: (typeof TIMELINE_PHASES)[number];
  index: number;
  inView: boolean;
}) {
  const isRight = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 40 : -40, y: 20 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.2, ease: [0.16, 1, 0.3, 1] as const }}
      className={`relative w-full flex ${isRight ? "md:justify-end" : "md:justify-start"}`}
    >
      {/* Glassmorphic Card */}
      <div
        className={`
          relative w-full md:w-[45%] p-6 md:p-8 rounded-2xl
          bg-white/70 backdrop-blur-xl
          border border-jade/12
          shadow-[0_8px_32px_rgba(74,169,144,0.06)]
          hover:shadow-[0_12px_48px_rgba(74,169,144,0.12)]
          hover:border-jade/25
          transition-all duration-500 group
        `}
      >
        {/* Subtle gradient shimmer on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(74,169,144,0.03) 0%, rgba(110,212,230,0.03) 100%)",
          }}
        />

        {/* Phase badge */}
        <div className="relative flex items-center gap-3 mb-4">
          <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-jade/10 to-aqua/10 border border-jade/15 text-jade text-xs font-bold rounded-full tracking-wider">
            PHASE {phase.number}
          </span>
          <span className="text-text-muted text-sm font-medium">
            {phase.period}
          </span>
        </div>

        {/* Title */}
        <h3 className="relative text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-jade transition-colors duration-300">
          {phase.title}
        </h3>

        {/* Description */}
        <p className="relative text-text-secondary leading-relaxed text-sm md:text-base">
          {phase.description}
        </p>

        {/* Connector arm to the center line (desktop only) */}
        <div
          className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-px ${
            isRight ? "-left-8" : "-right-8"
          }`}
          style={{
            background: "linear-gradient(90deg, rgba(74,169,144,0.3), rgba(110,212,230,0.15))",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function CompanyTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [viewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  // Scroll-based line glow
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map scroll to the glowing path length (0 → 1 as you scroll through)
  const pathProgress = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.05, 0.2, 0.8, 0.95], [0, 1, 1, 0.3]);

  // SVG curvy line path for 3 items
  // Follows an S-curve pattern down the center column
  const curvyPath = `
    M 50 0
    C 50 60, 50 80, 50 100
    C 50 140, 80 160, 50 200
    C 20 240, 50 260, 50 300
    C 50 340, 20 360, 50 400
    C 80 440, 50 460, 50 500
    C 50 540, 80 560, 50 600
  `;

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,169,144,0.2) 0%, transparent 70%)" }}
      />

      <div ref={viewRef} className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.3" }}
          >
            Our <span className="bg-gradient-to-r from-jade to-aqua bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            From a bold vision to industry leadership, our story is one of
            relentless innovation.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* ── Curvy SVG Timeline Line (Desktop) ── */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[100px]" style={{ height: "100%" }}>
            <svg
              width="100"
              height="100%"
              viewBox="0 0 100 600"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
              style={{ overflow: "visible" }}
            >
              <defs>
                <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4AA990" />
                  <stop offset="50%" stopColor="#6ED4E6" />
                  <stop offset="100%" stopColor="#4AA990" stopOpacity="0.2" />
                </linearGradient>
                <filter id="timelineGlow" x="-30%" y="-5%" width="160%" height="110%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background faint path */}
              <path
                d={curvyPath}
                fill="none"
                stroke="url(#timelineGrad)"
                strokeWidth="1"
                opacity="0.12"
              />

              {/* Glowing animated path */}
              <motion.path
                d={curvyPath}
                fill="none"
                stroke="url(#timelineGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#timelineGlow)"
                style={{
                  pathLength: pathProgress,
                  opacity: glowOpacity,
                }}
              />
            </svg>

            {/* Timeline dots at each phase position */}
            {TIMELINE_PHASES.map((_, index) => {
              const topPercent = ((index * 2 + 1) / (TIMELINE_PHASES.length * 2)) * 100;
              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 -translate-x-1/2 z-10"
                  style={{ top: `${topPercent}%` }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2, type: "spring", stiffness: 200 }}
                >
                  {/* Outer glow ring */}
                  <div className="w-10 h-10 rounded-full bg-jade/8 border border-jade/15 flex items-center justify-center backdrop-blur-sm">
                    {/* Inner bright dot */}
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-jade to-aqua shadow-[0_0_12px_rgba(74,169,144,0.4)]" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Mobile Timeline Line ── */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-jade/20 via-aqua/15 to-transparent" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-jade via-aqua to-jade/20"
              style={{
                height: pathProgress as unknown as string,
                filter: "drop-shadow(0 0 6px rgba(74,169,144,0.4))",
              }}
              initial={{ height: 0 }}
            />
          </div>

          {/* ── Timeline Cards ── */}
          <div className="space-y-16 md:space-y-20 relative z-10">
            {TIMELINE_PHASES.map((phase, index) => (
              <div key={phase.number} className="relative">
                {/* Mobile dot */}
                <motion.div
                  className="md:hidden absolute left-8 top-8 -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                >
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-jade flex items-center justify-center shadow-[0_0_10px_rgba(74,169,144,0.3)]">
                    <div className="w-2 h-2 rounded-full bg-jade" />
                  </div>
                </motion.div>

                <div className="pl-16 md:pl-0">
                  <TimelineCard phase={phase} index={index} inView={inView} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
