"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Package, Store, Code2 } from "lucide-react";

const offers = [
  {
    Icon: Package,
    title: "SaaS Product Suite",
    body: "Ready-to-use software for HR, recruitment, and team management — built and maintained by our in-house team.",
  },
  {
    Icon: Store,
    title: "Software Marketplace",
    body: "Browse and procure the best business software through OurDept.in — curated, compared, and competitively priced.",
  },
  {
    Icon: Code2,
    title: "Tech Services",
    body: "Custom web solutions, automation, and digital transformation — delivered by the same team behind myHRdept and Propalz.",
  },
];

export default function DigiCloudOffers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="dc-offers"
      ref={ref}
      className="bg-base py-20 lg:py-28"
      aria-label="What DigiCloud offers"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-inter font-medium text-label tracking-[0.08em] uppercase text-blue-mid mb-3"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair font-bold text-navy"
            style={{ fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: "1.2" }}
          >
            Three Ways We Help Your Business Grow
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white border border-border rounded-md p-7 flex flex-col gap-4 hover:shadow-hover transition-all duration-300 hover:border-l-4 hover:border-l-blue-mid"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-light">
                <o.Icon size={22} className="text-blue-mid" strokeWidth={1.75} />
              </div>
              <h3 className="font-inter font-semibold text-navy" style={{ fontSize: "20px" }}>
                {o.title}
              </h3>
              <p className="font-inter text-slate" style={{ fontSize: "15px", lineHeight: "24px" }}>
                {o.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
