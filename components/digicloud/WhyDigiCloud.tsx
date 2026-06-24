"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Heart, BadgeCheck, TrendingUp } from "lucide-react";

const items = [
  {
    Icon: Lightbulb,
    title: "Innovation First",
    body: "We build software that solves real Indian business problems — not generic global templates.",
  },
  {
    Icon: Heart,
    title: "Customer-Centric",
    body: "18+ years of consulting experience means we understand what businesses actually need.",
  },
  {
    Icon: BadgeCheck,
    title: "Proven Expertise",
    body: "Our products power 90+ companies across 6+ Indian states.",
  },
  {
    Icon: TrendingUp,
    title: "Results-Driven",
    body: "Every product we ship is measured by outcomes — not features.",
  },
];

export default function WhyDigiCloud() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="dc-why"
      ref={ref}
      className="bg-navy py-20 lg:py-28 relative overflow-hidden"
      aria-label="Why choose DigiCloud"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-inter font-medium text-label tracking-[0.08em] uppercase text-gold mb-3"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair font-bold text-white"
            style={{ fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: "1.2" }}
          >
            Built Different. Delivered Right.
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-mid/20">
                <item.Icon size={20} className="text-gold" strokeWidth={1.75} />
              </div>
              <h3 className="font-inter font-semibold text-white" style={{ fontSize: "17px" }}>
                {item.title}
              </h3>
              <p className="font-inter" style={{ color: "#94A3B8", fontSize: "14px", lineHeight: "22px" }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
