"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "AI-powered automation & intelligent workflows",
        description: "Streamlining operations with smart logic.",
    },
    {
        title: "Custom web platforms & digital systems",
        description: "Building the infrastructure for your growth.",
    },
    {
        title: "Social media strategy built for leverage",
        description: "Not noise. Strategic, performance-first content.",
    },
    {
        title: "End-to-end digital problem solving",
        description: "If a digital bottleneck exists, we design the fix.",
    },
];

export default function WhatWeDo() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">What We Do</h2>
                    <p className="text-text-secondary uppercase tracking-widest text-sm">
                        Positioned, Not Limiting
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-background border border-border hover:border-jade/30 transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-bold mb-3 group-hover:text-jade transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
