"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DigiCloudHero() {
  return (
    <section
      className="relative bg-navy pt-32 pb-24 overflow-hidden"
      aria-label="DigiCloud hero"
    >
      {/* Dot-grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(27,79,216,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-inter font-medium text-label tracking-[0.08em] uppercase text-gold mb-5"
        >
          DigiCloud Tech Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-playfair font-bold text-white mb-6"
          style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1" }}
        >
          Your All-in-One Tech Partner.
          <br />
          Built by HR Labs.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-inter mb-10 mx-auto"
          style={{
            color: "#94A3B8",
            fontSize: "18px",
            lineHeight: "28px",
            maxWidth: "560px",
          }}
        >
          We build and deliver the software that powers modern Indian businesses
          — from HR systems to recruitment platforms to full SaaS suites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#dc-offers"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-mid text-white font-inter font-medium text-base rounded-pill hover:bg-blue-mid/90 hover:scale-[1.02] transition-all duration-200 shadow-md"
          >
            Explore Our Products
            <ArrowRight size={18} />
          </a>
          <a
            href="mailto:hr@hrlabs.in"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-inter font-medium text-base rounded-pill hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            Talk to Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
