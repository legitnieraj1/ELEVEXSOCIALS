"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const glassCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.2 + 1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    })
};

const pulseVariants = {
    pulse: {
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.8, 0.5],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
};

export default function HeroGraph() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Path for the main graph line (smooth bezier)
    const pathD = "M 0 350 C 100 350, 150 150, 250 200 C 350 250, 400 300, 500 220 C 600 140, 650 100, 800 60";
    const areaD = `${pathD} V 400 H 0 Z`;

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* ── Background Grid ── */}
            <div className="absolute inset-0 opacity-[0.2]"
                style={{
                    backgroundImage: "linear-gradient(rgba(74,169,144,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,169,144,0.3) 1px, transparent 1px)",
                    backgroundSize: "80px 80px"
                }}
            />

            {/* ── Graph SVG ── */}
            <svg
                viewBox="0 0 800 400"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4AA990" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#4AA990" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#4AA990" />
                        <stop offset="50%" stopColor="#6ED4E6" />
                        <stop offset="100%" stopColor="#4AA990" />
                    </linearGradient>
                </defs>

                {/* Fill Area */}
                <motion.path
                    d={areaD}
                    fill="url(#graphGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* Line Path */}
                <motion.path
                    d={pathD}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Data Points */}
                <motion.circle cx="250" cy="200" r="6" fill="#6ED4E6" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
                <motion.circle cx="500" cy="220" r="6" fill="#6ED4E6" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />
                <motion.circle cx="800" cy="60" r="8" fill="#4AA990" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.0 }} />
            </svg>

            {/* ── Floating Data Cards (HTML over SVG) ── */}

            {/* Card 1: Visibility */}
            <motion.div
                custom={1}
                variants={glassCardVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-[35%] left-[25%] p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-3"
            >
                <div className="w-8 h-8 rounded-full bg-jade/20 flex items-center justify-center text-jade">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <div className="text-xs text-text-secondary/80">Visibility</div>
                    <div className="text-sm font-bold text-white">+142%</div>
                </div>
            </motion.div>

            {/* Card 2: Engagement */}
            <motion.div
                custom={2}
                variants={glassCardVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-[45%] left-[55%] p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-3"
            >
                <div className="w-8 h-8 rounded-full bg-aqua/20 flex items-center justify-center text-aqua">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <div className="text-xs text-text-secondary/80">Engagement</div>
                    <div className="text-sm font-bold text-white">4.8M</div>
                </div>
            </motion.div>

            {/* Card 3: Conversion (Peak) */}
            <motion.div
                custom={3}
                variants={glassCardVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-[5%] right-[0%] p-3 rounded-lg bg-jade/20 backdrop-blur-md border border-jade/40 shadow-xl flex items-center gap-3"
            >
                <div className="w-10 h-10 rounded-full bg-jade text-white flex items-center justify-center shadow-lg shadow-jade/40">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <div className="text-xs text-white/90">Growth</div>
                    <div className="text-lg font-bold text-white">Scale</div>
                </div>
            </motion.div>

            {/* ── Text Overlay (User Requested) ── */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute top-[10%] left-[0%] z-10"
            >
                <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-jade tracking-tight mb-2">
                    ELEVEXSOCIALS
                </h1>
                <p className="text-base lg:text-lg text-text-secondary font-medium tracking-widest uppercase">
                    ELEVATE YOUR SOCIALS
                </p>
            </motion.div>
        </div>
    );
}
