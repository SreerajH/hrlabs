"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-base flex items-center pt-16"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6 lg:gap-7">
            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0)}
              className="font-inter font-medium text-label tracking-[0.08em] uppercase text-gold"
            >
              India&apos;s Trusted HR Consulting Firm
            </motion.p>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-playfair font-bold text-navy leading-tight"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: "1.1" }}
            >
              Building Organizations That Actually Work
            </motion.h1>

            {/* Subheading */}
            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-slate max-w-xl"
              style={{ fontSize: "17px", lineHeight: "27px" }}
            >
              18+ years of turning struggling startups into high-performance
              businesses. We fix your people, your processes, and your
              performance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap gap-4 mt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-mid text-white font-inter font-medium text-base rounded-pill hover:bg-blue-mid/90 hover:scale-[1.02] transition-all duration-200 shadow-md"
              >
                Start the Conversation
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-navy text-navy font-inter font-medium text-base rounded-pill hover:bg-navy hover:text-white transition-all duration-200"
              >
                See Our Work
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-1"
            >
              {[
                { value: "90+", label: "Companies" },
                { value: "4.8/5", label: "Rated" },
                { value: "320+", label: "Projects" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="hidden sm:block w-px h-4 bg-border" />
                  )}
                  <span className="font-inter font-bold text-navy text-lg">
                    {stat.value}
                  </span>
                  <span className="font-inter text-slate text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — geometric composition */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center"
          >
            {/* Main shape */}
            <div className="relative w-full max-w-lg mx-auto aspect-[4/4.5] rounded-[32px] overflow-hidden">
              {/* Gradient background */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #0F1F3D 0%, #1B4FD8 60%, #3B82F6 100%)",
                }}
              />

              {/* Geometric shapes */}
              <div
                className="absolute top-8 right-8 w-40 h-40 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, #C9A84C, transparent)",
                }}
              />
              <div
                className="absolute bottom-20 left-4 w-32 h-32 rounded-full opacity-15"
                style={{
                  background: "radial-gradient(circle, #EEF2FF, transparent)",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full opacity-10 border border-white"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-5 border border-white"
              />

              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div className="text-center">
                  <p className="font-inter text-white/60 text-sm uppercase tracking-widest mb-2">
                    Our Mission
                  </p>
                  <p className="font-playfair text-white font-bold text-3xl leading-tight text-center">
                    Help 1,00,000 Startups Build Effective Organizations
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 w-full mt-4">
                  {[
                    { n: "18+", l: "Years" },
                    { n: "90+", l: "Companies" },
                    { n: "320+", l: "Projects" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="bg-white/10 rounded-xl px-4 py-3 text-center backdrop-blur-sm border border-white/10"
                    >
                      <p className="font-playfair text-white font-bold text-2xl">
                        {s.n}
                      </p>
                      <p className="font-inter text-white/70 text-xs mt-0.5">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating rating card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-xl shadow-hover px-4 py-3 flex items-center gap-3 border border-border"
            >
              <div className="flex flex-col">
                <div className="flex text-gold gap-0.5 text-sm">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
                <p className="font-inter font-semibold text-navy text-sm mt-0.5">
                  4.8/5 Rating
                </p>
                <p className="font-inter text-slate text-xs">Google Reviews</p>
              </div>
            </motion.div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute -top-4 -right-4 lg:-right-6 bg-navy text-white rounded-xl shadow-hover px-4 py-3 border border-navy/20"
            >
              <p className="font-playfair font-bold text-2xl text-gold">18+</p>
              <p className="font-inter text-white/70 text-xs mt-0.5">
                Years of Excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
