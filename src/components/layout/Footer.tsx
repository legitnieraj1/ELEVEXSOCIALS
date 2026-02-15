"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/constants";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/elevexsocials/", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer ref={ref} className="relative bg-background-card border-t border-jade/10 overflow-hidden">
      {/* ── Bottom Glow Effect ── */}
      {/* Primary jade glow — wide, centered */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[200px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 80% at 50% 100%, rgba(74,169,144,0.15) 0%, rgba(74,169,144,0.06) 40%, transparent 70%)",
        }}
      />
      {/* Aqua accent glow — offset right */}
      <div
        className="absolute bottom-0 left-[55%] -translate-x-1/2 w-[600px] h-[150px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(110,212,230,0.1) 0%, rgba(110,212,230,0.03) 50%, transparent 70%)",
        }}
      />
      {/* Subtle warm glow — offset left */}
      <div
        className="absolute bottom-0 left-[40%] -translate-x-1/2 w-[500px] h-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(47,143,120,0.08) 0%, transparent 60%)",
        }}
      />
      {/* Sharp bottom edge glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 5%, rgba(74,169,144,0.25) 30%, rgba(110,212,230,0.3) 50%, rgba(74,169,144,0.25) 70%, transparent 95%)",
        }}
      />
      {/* Secondary glow line above */}
      <div
        className="absolute bottom-[1px] left-0 right-0 h-[2px] blur-[2px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 10%, rgba(74,169,144,0.15) 35%, rgba(110,212,230,0.2) 50%, rgba(74,169,144,0.15) 65%, transparent 90%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <div className="relative w-[800px] h-[190px] mb-4">
            <Image
              src="/images/elevexsocialslogo.png"
              alt="ELEVEXSOCIALS"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-text-secondary text-sm">
            AI Tech & Social Solutions
          </p>
        </motion.div>

        {/* Divider */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-jade/40 to-transparent" />
        </div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {FOOTER_LINKS.navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-jade transition-colors duration-300 text-sm"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-5 mb-12"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-jade/5 hover:bg-jade/15 border border-jade/15 hover:border-jade/40 flex items-center justify-center transition-all duration-300 group hover:shadow-lg hover:shadow-jade/10"
                aria-label={social.label}
              >
                <Icon className="w-4.5 h-4.5 text-text-muted group-hover:text-jade transition-colors duration-300" />
              </a>
            );
          })}
        </motion.div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs text-text-muted">
          {FOOTER_LINKS.legal.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-aqua transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-text-muted">
          <p>&copy; 2025 ELEVEXSOCIALS - All Systems Operational</p>
        </div>
      </div>
    </footer>
  );
}
