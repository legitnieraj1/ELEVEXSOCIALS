'use client';

import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import GraphPath from './GraphPath';
import TextReveal from './TextReveal';
import { useGraphAnimation } from './useGraphAnimation';

interface GraphTextRevealProps {
  text?: string;
  duration?: number;
  delay?: number;
  autoPlay?: boolean;
  onComplete?: () => void;
  gradient?: { start: string; end: string };
  width?: number;
  height?: number;
}

// Generate deterministic particle positions
function generateParticles(count: number) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: ((i * 137.508) % 800),                        // golden angle spread
      y: 40 + ((i * 97.31) % 320),                     // vertical spread
      r: 1.2 + (i % 3) * 0.6,                          // size variation
      dur: 8 + (i % 5) * 3,                             // animation duration
      dx: ((i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 5)), // drift distance x
      dy: ((i % 3 === 0 ? -1 : 1) * (8 + (i % 3) * 4)),  // drift distance y
      delay: (i % 7) * 0.8,                             // stagger
    });
  }
  return particles;
}

// Idle ambient lines — faint, slow-moving decorative lines behind text
function generateIdleLines(count: number) {
  const lines = [];
  for (let i = 0; i < count; i++) {
    const y = 100 + ((i * 73) % 200);
    lines.push({
      x1: -50 + ((i * 120) % 300),
      y1: y + (i % 2 === 0 ? 0 : 15),
      x2: 200 + ((i * 180) % 500),
      y2: y + (i % 2 === 0 ? -10 : 5),
      dur: 12 + (i % 4) * 4,
      delay: (i % 5) * 1.5,
    });
  }
  return lines;
}

export default function GraphTextReveal({
  text = 'ELEVEXSOCIALS',
  duration = 4000,
  delay = 400,
  autoPlay = true,
  onComplete,
  gradient = { start: '#4AA990', end: '#6ED4E6' },
  width = 800,
  height = 400,
}: GraphTextRevealProps) {
  const { isIdle, progress, resetAnimation } =
    useGraphAnimation(duration, delay, autoPlay);

  const particles = useMemo(() => generateParticles(18), []);
  const idleLines = useMemo(() => generateIdleLines(5), []);

  useEffect(() => {
    if (isIdle && onComplete) {
      onComplete();
    }
  }, [isIdle, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="graph-text-reveal relative w-full flex items-center justify-center"
      style={{ maxWidth: width, aspectRatio: '2 / 1' }}
      role="img"
      aria-label={`Animated growth graph revealing ${text}`}
    >
      {/* Soft radial depth behind the component */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${gradient.start}08 0%, transparent 70%)`,
        }}
      />

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
        className="relative z-10"
        style={{ overflow: 'visible' }}
      >
        {/* ── Growth Line & Data Nodes ── */}
        <GraphPath progress={progress} gradient={gradient} />

        {/* ── Brand Text Morph & Subtitle ── */}
        <TextReveal text={text} progress={progress} gradient={gradient} />

        {/* ── Idle State: Ambient drifting particles ── */}
        {isIdle && particles.map((p, i) => (
          <motion.circle
            key={`p-${i}`}
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill={i % 2 === 0 ? gradient.start : gradient.end}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.2, 0.12, 0],
              cx: [p.x, p.x + p.dx, p.x + p.dx * 0.5, p.x],
              cy: [p.y, p.y + p.dy, p.y + p.dy * 0.7, p.y],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* ── Idle State: Faint ambient lines ── */}
        {isIdle && idleLines.map((line, i) => (
          <motion.line
            key={`il-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={i % 2 === 0 ? gradient.start : gradient.end}
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.06, 0.03, 0],
              x1: [line.x1, line.x1 + 30, line.x1 + 15, line.x1],
              x2: [line.x2, line.x2 + 20, line.x2 + 10, line.x2],
            }}
            transition={{
              duration: line.dur,
              delay: line.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Replay — minimal, fades in quietly */}
      {isIdle && (
        <motion.button
          onClick={resetAnimation}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-jade/5 hover:bg-jade/15 border border-jade/10 flex items-center justify-center transition-all group cursor-pointer"
          aria-label="Replay animation"
        >
          <svg
            className="w-3 h-3 text-jade/40 group-hover:text-jade group-hover:rotate-180 transition-all duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </motion.button>
      )}
    </motion.div>
  );
}
