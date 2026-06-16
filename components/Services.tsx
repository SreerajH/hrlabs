"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Workflow, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "People Management",
    description:
      "Talent acquisition, retention frameworks, and org design that attract great people and keep them engaged. Build teams that perform — not just fill seats.",
  },
  {
    icon: Workflow,
    title: "Process Architecture",
    description:
      "SOPs, workflow design, and compliance systems that bring order to chaos. We document your best practices so your business can scale without losing quality.",
  },
  {
    icon: TrendingUp,
    title: "Performance Systems",
    description:
      "OKRs, KPI setup, and appraisal redesign that tie individual goals to company outcomes. Turn vague expectations into clear, measurable accountability.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-md border border-border p-8 hover:shadow-hover hover:border-l-4 hover:border-l-blue-mid transition-all duration-300 cursor-default"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="w-12 h-12 rounded-md bg-blue-light flex items-center justify-center mb-5 group-hover:bg-blue-mid transition-colors duration-300">
        <Icon
          size={24}
          className="text-blue-mid group-hover:text-white transition-colors duration-300"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="font-inter font-semibold text-navy mb-3" style={{ fontSize: "20px" }}>
        {service.title}
      </h3>
      <p className="font-inter text-slate" style={{ fontSize: "15px", lineHeight: "24px" }}>
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="services" className="bg-base py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="max-w-2xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-inter font-medium text-label tracking-[0.08em] uppercase text-blue-mid mb-3"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-inter font-bold text-navy"
            style={{ fontSize: "clamp(30px, 3.5vw, 42px)", lineHeight: "1.2" }}
          >
            HR Solutions Built for Indian Business Reality
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
