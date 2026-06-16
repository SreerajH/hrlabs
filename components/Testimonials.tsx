"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with HR Labs transformed how our 40-person team operates. We went from constant firefighting to clear ownership structures. The clarity they brought to our people processes was worth every rupee.",
    name: "Arun Menon",
    company: "Bengaluru-based SaaS Startup",
    stars: 5,
  },
  {
    quote:
      "They didn't just give us a document. HR Labs embedded with us for three months and rebuilt our entire performance review process. Our managers now actually look forward to appraisal season.",
    name: "Priya Krishnamurthy",
    company: "Chennai-based D2C Brand",
    stars: 5,
  },
  {
    quote:
      "As a 120-employee manufacturing SME, we struggled with retention. HR Labs helped us design a retention framework that cut attrition by nearly 40% in 18 months. Practical, measurable, real.",
    name: "Rajiv Sharma",
    company: "Pune-based Manufacturing Firm",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-base" aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="bg-white py-20 lg:py-28"
      aria-label="Client testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-inter font-medium text-label tracking-[0.08em] uppercase text-blue-mid mb-3"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-inter font-bold text-navy"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: "1.2" }}
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: "var(--shadow-hover)" }}
              className="bg-white border border-border rounded-md p-7 flex flex-col gap-4 cursor-default"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Quote icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-fit"
              >
                <Quote
                  size={28}
                  className="text-blue-mid/20 fill-blue-mid/20"
                  strokeWidth={0}
                  aria-hidden="true"
                />
              </motion.div>

              {/* Quote text */}
              <p
                className="font-inter italic text-slate flex-1"
                style={{ fontSize: "15px", lineHeight: "25px" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex flex-col gap-1.5 pt-2 border-t border-border">
                <Stars count={t.stars} />
                <p className="font-inter font-semibold text-navy text-sm mt-1">
                  {t.name}
                </p>
                <p className="font-inter text-slate text-xs">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
