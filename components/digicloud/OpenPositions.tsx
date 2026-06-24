"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

const positions = [
  {
    title: "Jr. AI Developer",
    count: 3,
    location: "Bangalore",
    type: "Full-time",
  },
  {
    title: "Jr. Software Developer",
    count: 13,
    location: "Bangalore & Madurai",
    type: "Full-time",
  },
  {
    title: "Sales Associate",
    count: 5,
    location: "Bangalore & Madurai",
    type: "Full-time",
  },
];

export default function OpenPositions() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="dc-careers"
      ref={ref}
      className="bg-base py-20 lg:py-28"
      aria-label="Open positions at DigiCloud"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-inter font-medium text-label tracking-[0.08em] uppercase text-blue-mid mb-3"
          >
            Join Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair font-bold text-navy mb-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: "1.2" }}
          >
            Build the Future of Indian HR Tech
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="font-inter text-slate"
            style={{ fontSize: "16px" }}
          >
            Join our growing team in Bangalore and Madurai.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {positions.map((pos, i) => (
            <motion.div
              key={pos.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-white border border-border rounded-md p-6 flex flex-col sm:flex-row sm:items-center gap-4"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Icon */}
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-blue-light">
                <Briefcase size={20} className="text-blue-mid" strokeWidth={1.75} />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="font-inter font-semibold text-navy" style={{ fontSize: "17px" }}>
                    {pos.title}
                  </h3>
                  <span className="font-inter font-medium text-xs text-blue-mid bg-blue-light px-2.5 py-0.5 rounded-full">
                    {pos.count} {pos.count === 1 ? "Position" : "Positions"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-slate">
                  <MapPin size={13} />
                  <span className="font-inter text-sm">
                    {pos.location} · {pos.type}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={`mailto:hr@hrlabs.in?subject=Application: ${pos.title}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-mid text-white font-inter font-medium text-sm rounded-pill hover:bg-blue-mid/90 hover:scale-[1.02] transition-all duration-200 flex-shrink-0"
              >
                Apply Now
                <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
