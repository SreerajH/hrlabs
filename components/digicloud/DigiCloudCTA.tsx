"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function DigiCloudCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#1B4FD8" }}
      aria-label="DigiCloud contact CTA"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-playfair font-bold text-white mb-5"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.2" }}
        >
          Ready to Transform Your Business with Technology?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-inter mb-10"
          style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: "28px" }}
        >
          Book a free consultation with our DigiCloud team. No commitment, just clarity.
        </motion.p>

        <motion.a
          href="mailto:hr@hrlabs.in"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-mid font-inter font-semibold text-lg rounded-pill hover:bg-white/90 hover:scale-[1.02] transition-all duration-200 shadow-lg"
        >
          Get in Touch
          <ArrowRight size={20} />
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-6 mt-8"
          style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}
        >
          <a
            href="tel:+919916555890"
            className="inline-flex items-center gap-2 font-inter hover:text-white transition-colors"
          >
            <Phone size={14} />
            Bangalore: +91 99165 55890
          </a>
          <a
            href="tel:+919742194666"
            className="inline-flex items-center gap-2 font-inter hover:text-white transition-colors"
          >
            <Phone size={14} />
            Madurai: +91 97421 94666
          </a>
        </motion.div>
      </div>
    </section>
  );
}
