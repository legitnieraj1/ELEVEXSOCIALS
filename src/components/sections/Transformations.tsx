"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TRANSFORMATIONS } from "@/lib/constants";

export default function Transformations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TRANSFORMATIONS.length);
  };

  const previous = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TRANSFORMATIONS.length) % TRANSFORMATIONS.length
    );
  };

  return (
    <section ref={ref} className="relative py-24 bg-background-lighter overflow-hidden">
      <div className="absolute right-[-5%] top-1/3 w-[350px] h-[350px] bg-aqua/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: "1.2" }}>
            <span className="bg-gradient-to-r from-jade via-aqua to-jade bg-clip-text text-transparent">Before & After</span>{" "}
            <span className="italic font-light text-text-secondary">transformations</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We&apos;ve taken remarkable brands and propelled them into Internet sensations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-text-muted font-semibold mb-4 uppercase tracking-wide text-sm">Before</p>
                  <div className="bg-background rounded-xl p-8 border border-jade/8">
                    <p className="text-5xl font-bold text-text-primary mb-2">{TRANSFORMATIONS[currentIndex].before.metric}</p>
                    <p className="text-text-secondary">{TRANSFORMATIONS[currentIndex].before.label}</p>
                  </div>
                </div>
                <div>
                  <p className="text-jade font-semibold mb-4 uppercase tracking-wide text-sm">After</p>
                  <div className="bg-gradient-to-br from-jade/15 to-aqua/5 border border-jade/25 rounded-xl p-8 shadow-lg shadow-jade/5">
                    <p className="text-5xl font-bold bg-gradient-to-r from-jade to-aqua bg-clip-text text-transparent mb-2">{TRANSFORMATIONS[currentIndex].after.metric}</p>
                    <p className="text-text-secondary">{TRANSFORMATIONS[currentIndex].after.label}</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-text-muted mt-8 text-sm uppercase tracking-wide">{TRANSFORMATIONS[currentIndex].client}</p>
            </motion.div>
          </AnimatePresence>

          <button onClick={previous} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-gradient-to-r from-jade to-teal rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-jade/30 transition-all duration-300 cursor-pointer" aria-label="Previous">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-gradient-to-r from-jade to-teal rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-jade/30 transition-all duration-300 cursor-pointer" aria-label="Next">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </motion.div>

        <div className="flex justify-center gap-2 mt-8">
          {TRANSFORMATIONS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? "bg-gradient-to-r from-jade to-aqua w-8" : "bg-jade/20 w-2 hover:bg-jade/40"
              }`}
              aria-label={`Go to ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
