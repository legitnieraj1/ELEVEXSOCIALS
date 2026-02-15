'use client';

import { motion } from 'framer-motion';
import { PHASE } from './useGraphAnimation';

interface GraphPathProps {
  progress: number;
  gradient: { start: string; end: string };
}

// Organic growth line — contained within viewBox 0 0 800 400
// Starts at bottom-left, rises with realistic fluctuations, peaks at upper-right
// All points stay within x: 0-800, y: 60-370
const GRAPH_PATH =
  'M 0 360 C 25 360, 55 330, 85 310 C 115 290, 130 320, 165 300 C 200 280, 220 260, 260 240 C 300 220, 315 245, 350 215 C 385 185, 405 195, 440 175 C 475 155, 500 165, 535 145 C 570 125, 595 135, 625 115 C 655 95, 685 100, 720 90 C 755 80, 775 85, 800 80';

// Area fill path (closes to bottom of viewBox)
const AREA_PATH = `${GRAPH_PATH} L 800 400 L 0 400 Z`;

// Data nodes at key inflection points
const DATA_NODES = [
  { cx: 85, cy: 310, t: 0.09 },
  { cx: 165, cy: 300, t: 0.18 },
  { cx: 260, cy: 240, t: 0.28 },
  { cx: 350, cy: 215, t: 0.37 },
  { cx: 440, cy: 175, t: 0.46 },
  { cx: 535, cy: 145, t: 0.53 },
  { cx: 625, cy: 115, t: 0.61 },
  { cx: 720, cy: 90, t: 0.68 },
];

export default function GraphPath({ progress, gradient }: GraphPathProps) {
  const lineProgress = Math.min(progress / PHASE.LINE_PEAK, 1);
  const lineFade = progress > PHASE.TEXT_MORPH
    ? Math.max(0, 1 - (progress - PHASE.TEXT_MORPH) / 0.12)
    : 1;

  return (
    <>
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradient.start} />
          <stop offset="100%" stopColor={gradient.end} />
        </linearGradient>

        <linearGradient id="areaFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={gradient.start} stopOpacity="0.1" />
          <stop offset="60%" stopColor={gradient.end} stopOpacity="0.03" />
          <stop offset="100%" stopColor={gradient.end} stopOpacity="0" />
        </linearGradient>

        <filter id="lineGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="nodeGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="textGlow" x="-5%" y="-15%" width="110%" height="130%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Area fill beneath the line */}
      <motion.path
        d={AREA_PATH}
        fill="url(#areaFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: lineFade * (progress > 0.1 ? 0.7 : 0) }}
        transition={{ duration: 0.6 }}
      />

      {/* Faint guide line */}
      <motion.path
        d={GRAPH_PATH}
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: lineFade * 0.08 }}
        transition={{ duration: 0.4 }}
      />

      {/* Main glowing growth line */}
      <motion.path
        d={GRAPH_PATH}
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#lineGlow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: lineProgress,
          opacity: lineFade,
        }}
        transition={{ duration: 0.05, ease: 'linear' }}
      />

      {/* Data nodes — appear briefly, pulse, then fade */}
      {DATA_NODES.map((node, i) => {
        const nodeVisible = progress >= node.t && progress < node.t + 0.22;
        const nodePastPeak = progress > PHASE.TEXT_MORPH;
        const nodeOpacity = nodePastPeak
          ? 0
          : nodeVisible
            ? Math.min((progress - node.t) / 0.04, 1) * Math.max(0, 1 - (progress - node.t - 0.06) / 0.16)
            : 0;

        return (
          <motion.g key={i}>
            {/* Pulse ring */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="10"
              fill="none"
              stroke={gradient.start}
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: nodeOpacity * 0.25,
                scale: nodeVisible ? 1.4 : 0.5,
              }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
            {/* Core dot */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="3.5"
              fill="url(#lineGrad)"
              filter="url(#nodeGlow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: nodeOpacity,
                scale: nodeVisible ? 1 : 0,
              }}
              transition={{ duration: 0.25, type: 'spring', stiffness: 300 }}
            />
            {/* White center */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="1.2"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: nodeOpacity * 0.85 }}
              transition={{ duration: 0.15 }}
            />
          </motion.g>
        );
      })}
    </>
  );
}

export { GRAPH_PATH };
