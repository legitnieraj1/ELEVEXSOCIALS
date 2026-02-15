"use client";

import { motion } from "framer-motion";

export default function ClosingStatement() {
    return (
        <section className="py-24 bg-background-lighter border-t border-border">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        ElevexSocials exists to elevate brands by <span className="text-jade">eliminating friction.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-text-secondary font-medium tracking-wide">
                        Less noise. More leverage. Smarter growth.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
