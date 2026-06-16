"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-navy py-20 lg:py-28"
      aria-label="Book a consultation"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-playfair font-bold text-white mb-5"
          style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: "1.2" }}
        >
          Ready to Build a Better Organization?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-inter text-white/70 mb-10"
          style={{ fontSize: "18px", lineHeight: "28px" }}
        >
          Book a free 30-minute consultation. No pitch, just clarity.
        </motion.p>

        <motion.a
          href="mailto:hsreeraj4@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-mid text-white font-inter font-semibold text-lg rounded-pill hover:bg-blue-mid/90 hover:scale-[1.02] transition-all duration-200 shadow-lg"
        >
          Book Your Free Call
          <ArrowRight size={20} />
        </motion.a>

        {/* Contact options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a
            href="tel:+919916555890"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-inter text-sm transition-all"
            aria-label="Call Bangalore office: +91 99165 55890"
          >
            <Phone size={14} aria-hidden="true" />
            Bangalore: +91 99165 55890
          </a>
          <a
            href="tel:+919742194666"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-inter text-sm transition-all"
            aria-label="Call Madurai office: +91 97421 94666"
          >
            <Phone size={14} aria-hidden="true" />
            Madurai: +91 97421 94666
          </a>
        </motion.div>
      </div>
    </section>
  );
}
