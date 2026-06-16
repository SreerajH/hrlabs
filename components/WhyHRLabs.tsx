"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Human-centered approach",
    desc: "We put people before policy — understanding culture before writing an SOP.",
  },
  {
    title: "In-person + remote delivery across India",
    desc: "On-ground presence in 6+ states, with remote capabilities for distributed teams.",
  },
  {
    title: "Proven in 50+ real companies, not theory",
    desc: "Every framework we recommend has been battle-tested in real Indian businesses.",
  },
  {
    title: "Mission-driven — partnered with NGO Loving Hearts",
    desc: "Our work extends beyond boardrooms. We believe business and social impact go hand in hand.",
  },
];

export default function WhyHRLabs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="why"
      ref={sectionRef}
      className="bg-blue-light py-20 lg:py-28"
      aria-label="Why choose HR Labs"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-start">
          {/* Left text block */}
          <div className="lg:sticky lg:top-24">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="font-inter font-medium text-label tracking-[0.08em] uppercase text-blue-mid mb-3"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-inter font-bold text-navy mb-5"
              style={{ fontSize: "clamp(26px, 3vw, 36px)", lineHeight: "1.2" }}
            >
              We Don&apos;t Just Consult. We Build.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-inter text-slate"
              style={{ fontSize: "17px", lineHeight: "27px" }}
            >
              Most consultants hand you a report and leave. We embed with your
              team, understand your context, and build HR systems that outlast
              our engagement. Our clients don&apos;t just survive — they scale.
            </motion.p>

            {/* Decorative stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 p-5 bg-white rounded-md border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <p className="font-playfair font-bold text-navy" style={{ fontSize: "40px" }}>
                18+
              </p>
              <p className="font-inter text-slate text-sm mt-1">
                Years working with Indian founders, startups, and SMEs
              </p>
            </motion.div>
          </div>

          {/* Right feature rows */}
          <div className="flex flex-col gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-white rounded-md border border-border p-6 flex gap-4 items-start hover:shadow-card transition-shadow duration-300"
              >
                <CheckCircle2
                  size={22}
                  className="text-blue-mid mt-0.5 flex-shrink-0"
                  strokeWidth={2}
                />
                <div>
                  <h3
                    className="font-inter font-semibold text-navy mb-1"
                    style={{ fontSize: "17px" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="font-inter text-slate"
                    style={{ fontSize: "15px", lineHeight: "23px" }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
