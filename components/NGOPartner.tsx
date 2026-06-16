"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function NGOPartner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="ngo"
      ref={ref}
      className="relative py-10 lg:py-12"
      style={{
        background: "#FAF7F2",
        borderTop: "2px solid #C9A84C",
      }}
      aria-label="NGO Partner — Loving Hearts"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Heart
                size={16}
                className="text-gold fill-gold"
                aria-hidden="true"
              />
              <p className="font-inter font-medium text-label tracking-[0.08em] uppercase text-gold">
                Our Social Commitment
              </p>
            </div>
            <h2
              className="font-inter font-bold text-navy mb-3"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: "1.3" }}
            >
              Business Growth. Social Impact.
            </h2>
            <p
              className="font-inter text-slate"
              style={{ fontSize: "15px", lineHeight: "24px" }}
            >
              HR Labs is proudly partnered with{" "}
              <strong className="text-navy">Loving Hearts</strong>, an NGO
              dedicated to uplifting underprivileged communities in Bangalore.
              We believe the same principles that build great organizations —
              empathy, systems thinking, and human dignity — apply equally to
              social transformation.
            </p>
          </motion.div>

          {/* Right logo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center md:justify-end gap-6"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="bg-white rounded-lg p-5 border border-border shadow-card">
                <Image
                  src="/images/loving-hearts-logo.png"
                  alt="Loving Hearts NGO"
                  width={160}
                  height={60}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="font-inter text-slate text-xs text-center">
                Registered NGO Partner
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
