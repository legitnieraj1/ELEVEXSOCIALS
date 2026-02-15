"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PROCESS_STEPS } from "@/lib/constants";

export default function WorkflowSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 bg-background-lighter overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-jade/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-aqua text-sm font-semibold mb-4 uppercase tracking-widest"
            >
              Our Workflow
            </motion.p>
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: "1.2" }}>
              From Concept to<br />
              Digital{" "}
              <span className="bg-gradient-to-r from-jade to-aqua bg-clip-text text-transparent">Reality</span>
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              We don&apos;t just build software; we engineer growth. Our proven four-step process ensures transparency, speed, and exceptional results for every project.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-jade/30 rounded-lg hover:bg-jade/10 hover:border-jade/50 transition-all duration-300 text-text-primary group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-jade via-aqua/50 to-transparent origin-top"
            />
            <div className="space-y-12">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-20 group"
                >
                  <div className="absolute left-0 w-16 h-16 bg-background border-2 border-jade/30 group-hover:border-jade rounded-lg flex items-center justify-center transition-all duration-500 group-hover:shadow-lg group-hover:shadow-jade/15">
                    <span className="text-jade font-bold text-xl">{step.number}</span>
                  </div>
                  <div className="absolute left-[30px] top-[30px] w-2 h-2 bg-jade rounded-full ring-4 ring-background z-10 group-hover:scale-150 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-jade transition-colors duration-300">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
