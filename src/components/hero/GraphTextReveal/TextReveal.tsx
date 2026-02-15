'use client';

import { motion } from 'framer-motion';
import { PHASE } from './useGraphAnimation';

interface TextRevealProps {
  text: string;
  progress: number;
  gradient: { start: string; end: string };
}

export default function TextReveal({
  text,
  progress,
  gradient,
}: TextRevealProps) {
  const letters = text.split('');

  // Text morphs in during the TEXT_MORPH phase (0.70 → 0.85)
  const morphStart = PHASE.LINE_PEAK; // 0.70
  const morphEnd = PHASE.TEXT_MORPH;   // 0.85
  const morphProgress = progress < morphStart
    ? 0
    : Math.min((progress - morphStart) / (morphEnd - morphStart), 1);

  // Subtitle fades in during SUBTITLE phase (0.85 → 0.95)
  const subtitleStart = PHASE.TEXT_MORPH;
  const subtitleEnd = PHASE.SUBTITLE;
  const subtitleProgress = progress < subtitleStart
    ? 0
    : Math.min((progress - subtitleStart) / (subtitleEnd - subtitleStart), 1);

  // Layout: text centered vertically where the peak of the graph was (~y:80-120 area)
  const letterSpacing = 50;
  const totalWidth = letters.length * letterSpacing;
  const startX = (800 - totalWidth) / 2 + letterSpacing / 2;
  const textY = 180; // Center of the canvas — the line converges here

  return (
    <g>
      {/* Brand text — each letter appears as if the line dissolves into it */}
      {letters.map((letter, index) => {
        // Stagger each letter slightly across the morph window
        const letterDelay = (index / letters.length) * 0.6;
        const letterMorph = Math.max(0, Math.min((morphProgress - letterDelay * (1 - morphProgress)) / 0.5, 1));
        // Elastic overshoot for scale
        const scaleVal = letterMorph > 0
          ? 1 + Math.sin(letterMorph * Math.PI) * 0.08
          : 0;

        return (
          <motion.text
            key={index}
            x={startX + index * letterSpacing}
            y={textY}
            fontSize="52"
            fontWeight="800"
            fontFamily="var(--font-heading), system-ui, sans-serif"
            fill="url(#lineGrad)"
            textAnchor="middle"
            dominantBaseline="central"
            filter={letterMorph > 0.5 ? 'url(#textGlow)' : undefined}
            initial={{ opacity: 0 }}
            animate={{
              opacity: letterMorph,
              scale: scaleVal > 0 ? scaleVal : 0.6,
            }}
            transition={{ duration: 0.15, ease: 'linear' }}
            style={{ textTransform: 'uppercase' as const }}
          >
            {letter}
          </motion.text>
        );
      })}

      {/* Subtle underline that traces beneath the text */}
      <motion.line
        x1={startX - letterSpacing / 2 + 30}
        y1={textY + 30}
        x2={startX + totalWidth - letterSpacing / 2 - 30}
        y2={textY + 30}
        stroke="url(#lineGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: morphProgress > 0.8 ? 1 : 0,
          opacity: morphProgress > 0.8 ? 0.25 : 0,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Subtitle: "Elevate Your Socials" */}
      <motion.text
        x={400}
        y={textY + 58}
        fontSize="14"
        fontWeight="400"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fill={gradient.start}
        textAnchor="middle"
        letterSpacing="5"
        initial={{ opacity: 0, y: textY + 68 }}
        animate={{
          opacity: subtitleProgress,
          y: subtitleProgress > 0 ? textY + 58 : textY + 68,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ textTransform: 'uppercase' as const }}
      >
        Elevate Your Socials
      </motion.text>
    </g>
  );
}
