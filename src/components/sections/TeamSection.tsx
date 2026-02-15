"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-background-lighter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Image Container */}
              <div
                className={`relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-background-card ${
                  member.featured
                    ? "ring-2 ring-primary ring-offset-4 ring-offset-white"
                    : ""
                }`}
              >
                {/* Placeholder gradient since we don't have actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/30">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3
                  className={`text-sm lg:text-base font-bold mb-1 ${
                    member.featured ? "text-primary" : "text-text-primary"
                  }`}
                >
                  {member.name}
                </h3>
                <p className="text-[10px] lg:text-xs text-text-muted uppercase tracking-wide leading-tight">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
