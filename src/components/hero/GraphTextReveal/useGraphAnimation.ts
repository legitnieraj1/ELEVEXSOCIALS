'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Animation phases:
 * 0.00 - 0.55 : Line drawing across screen (growth graph)
 * 0.55 - 0.70 : Line reaches peak, slows, stabilizes
 * 0.70 - 0.85 : Line morphs into "ELEVEXSOCIALS" text
 * 0.85 - 0.95 : Subtitle "Elevate Your Socials" fades in
 * 0.95 - 1.00 : Settle into idle state
 */

export const PHASE = {
  LINE_DRAW: 0.55,
  LINE_PEAK: 0.70,
  TEXT_MORPH: 0.85,
  SUBTITLE: 0.95,
  IDLE: 1.0,
} as const;

export function useGraphAnimation(
  duration: number = 4000,
  delay: number = 400,
  autoPlay: boolean = true
) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isIdle, setIsIdle] = useState(false);
  const animationFrameRef = useRef<number>(0);

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
    setIsIdle(false);
    setProgress(0);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setProgress(1);
      setIsAnimating(false);
      setIsIdle(true);
      return;
    }

    const startTime = performance.now() + delay;

    const animate = (now: number) => {
      if (now < startTime) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = now - startTime;
      const linear = Math.min(elapsed / duration, 1);

      // Custom easing: slow start, accelerate through middle, slow at peak
      let eased: number;
      if (linear < 0.3) {
        // Slow start
        eased = (linear / 0.3) * 0.2;
        eased = eased * eased * 0.5 + eased * 0.5;
        eased *= 0.2;
      } else if (linear < 0.6) {
        // Fast middle
        const t = (linear - 0.3) / 0.3;
        eased = 0.2 + t * 0.4;
      } else if (linear < 0.8) {
        // Slowing at peak
        const t = (linear - 0.6) / 0.2;
        const decel = 1 - Math.pow(1 - t, 2);
        eased = 0.6 + decel * 0.25;
      } else {
        // Final settle
        const t = (linear - 0.8) / 0.2;
        const settle = 1 - Math.pow(1 - t, 3);
        eased = 0.85 + settle * 0.15;
      }

      setProgress(eased);

      if (linear < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(1);
        setIsAnimating(false);
        setIsIdle(true);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [duration, delay]);

  const resetAnimation = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setIsIdle(false);
    setProgress(0);
    setTimeout(() => startAnimation(), 50);
  }, [startAnimation]);

  useEffect(() => {
    if (autoPlay) {
      startAnimation();
    }
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [autoPlay, startAnimation]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return {
    isAnimating,
    progress,
    isIdle,
    startAnimation,
    resetAnimation,
  };
}
