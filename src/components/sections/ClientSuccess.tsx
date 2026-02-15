"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS, CATEGORIES } from "@/lib/constants";

export default function ClientSuccess() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filteredTestimonials =
    activeCategory === "ALL"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === activeCategory);

  return (
    <section ref={ref} className="relative py-24 bg-background overflow-hidden">
      <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-jade/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="font-bold" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: "1.2" }}>
            CLIENT<br />
            <span className="bg-gradient-to-r from-jade to-aqua bg-clip-text text-transparent">SUCCESS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-jade to-aqua mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-gradient-to-r from-jade to-teal text-white shadow-lg shadow-jade/20"
                  : "bg-jade/5 text-text-secondary border border-jade/10 hover:bg-jade/10 hover:border-jade/25"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTestimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-muted">No testimonials found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
