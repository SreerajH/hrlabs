"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/lib/useCountUp";

const stats = [
  { value: 90, suffix: "+", label: "Companies" },
  { value: 320, suffix: "+", label: "Projects" },
  { value: 160, suffix: "+", label: "Seminars & Workshops" },
  { value: 48, suffix: "", label: "Satisfaction Rate", prefix: "4.", scale: 10, display: "4.8/5 Stars" },
];

function StatCounter({
  stat,
  active,
  index,
}: {
  stat: (typeof stats)[0];
  active: boolean;
  index: number;
}) {
  const count = useCountUp(active ? stat.value : 0, 2000);

  const display =
    stat.display ??
    `${stat.prefix ?? ""}${count}${stat.suffix}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="text-center flex flex-col items-center gap-2 relative px-4"
    >
      {/* Gold divider between stats (not before first) */}
      {index > 0 && (
        <span
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16"
          style={{ background: "rgba(201,168,76,0.35)" }}
        />
      )}
      <p
        className="font-playfair font-bold text-white"
        style={{ fontSize: "clamp(48px, 5vw, 64px)", lineHeight: "1" }}
      >
        {active ? display : stat.display ?? `0${stat.suffix}`}
      </p>
      <p
        className="font-inter text-[#94A3B8] uppercase tracking-wider"
        style={{ fontSize: "14px" }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative bg-navy py-20 lg:py-28 overflow-hidden noise-bg"
      aria-label="Impact statistics"
    >
      {/* Background subtle decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(27,79,216,0.12) 0%, transparent 60%),
                            radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-playfair font-bold text-white text-center mb-16"
          style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: "1.2" }}
        >
          18 Years. 90 Companies. One Mission.
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} stat={stat} active={inView} index={i} />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16 font-inter italic"
          style={{ color: "#C9A84C", fontSize: "16px" }}
        >
          Crafted in India. Designed for Excellence.
        </motion.p>
      </div>
    </section>
  );
}
