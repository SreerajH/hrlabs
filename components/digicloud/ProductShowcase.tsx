"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  body: string;
}

interface ProductShowcaseProps {
  eyebrow: string;
  headline: string;
  features: Feature[];
  ctaText: string;
  ctaHref: string;
  imageLeft: boolean;
  background: "white" | "tint";
  productName: string;
  productAccent: string;
}

function BrowserMockup({ productName, accent }: { productName: string; accent: string }) {
  return (
    <div
      className="w-full rounded-[16px] overflow-hidden border border-border"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Browser chrome */}
      <div className="bg-[#F1F3F4] px-4 py-3 flex items-center gap-3 border-b border-border">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate font-inter border border-border truncate">
          {ctaHrefToDisplay(productName)}
        </div>
      </div>
      {/* Product body placeholder */}
      <div
        className="relative flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${accent}18 0%, ${accent}08 100%)`,
          minHeight: "280px",
        }}
      >
        {/* Simulated UI skeleton */}
        <div className="absolute inset-0 p-6 flex flex-col gap-3 opacity-30">
          <div className="flex gap-3">
            <div className="w-1/3 h-8 rounded-md bg-current opacity-20" style={{ background: accent }} />
            <div className="w-1/4 h-8 rounded-md opacity-10" style={{ background: accent }} />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-16 rounded-lg opacity-10" style={{ background: accent }} />
            ))}
          </div>
          <div className="w-full h-20 rounded-lg opacity-10 mt-1" style={{ background: accent }} />
        </div>
        {/* Product name overlay */}
        <div className="relative z-10 text-center px-6">
          <div
            className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md"
            style={{ background: accent }}
          >
            <span className="font-playfair font-bold text-white text-xl">
              {productName[0]}
            </span>
          </div>
          <p className="font-inter font-semibold text-navy text-lg">{productName}</p>
          <p className="font-inter text-slate text-sm mt-1">Product Preview</p>
        </div>
      </div>
    </div>
  );
}

function ctaHrefToDisplay(name: string) {
  const map: Record<string, string> = {
    "OurDept.in": "ourdept.in",
    "myHRdept.in": "myhrdept.in",
    "Propalz.com": "propalz.com",
  };
  return map[name] ?? name.toLowerCase();
}

export default function ProductShowcase({
  eyebrow,
  headline,
  features,
  ctaText,
  ctaHref,
  imageLeft,
  background,
  productName,
  productAccent,
}: ProductShowcaseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const textCol = (
    <motion.div
      initial={{ opacity: 0, x: imageLeft ? 32 : -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center gap-6"
    >
      <p className="font-inter font-medium text-label tracking-[0.08em] uppercase text-blue-mid">
        {eyebrow}
      </p>
      <h3
        className="font-inter font-semibold text-navy"
        style={{ fontSize: "clamp(22px, 2.5vw, 30px)", lineHeight: "1.3" }}
      >
        {headline}
      </h3>
      <ul className="flex flex-col gap-4">
        {features.map((f) => (
          <li key={f.title} className="flex gap-3">
            <CheckCircle2
              size={20}
              className="text-blue-mid flex-shrink-0 mt-0.5"
              strokeWidth={2}
            />
            <div>
              <p className="font-inter font-semibold text-navy text-sm">{f.title}</p>
              <p className="font-inter text-slate text-sm mt-0.5" style={{ lineHeight: "22px" }}>
                {f.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-inter font-medium text-blue-mid text-sm hover:gap-3 transition-all duration-200"
      >
        {ctaText}
        <ArrowRight size={16} />
      </a>
    </motion.div>
  );

  const imageCol = (
    <motion.div
      initial={{ opacity: 0, x: imageLeft ? -32 : 32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <BrowserMockup productName={productName} accent={productAccent} />
    </motion.div>
  );

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-28 ${background === "tint" ? "bg-blue-light" : "bg-white"}`}
      aria-label={`${productName} product showcase`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          {imageLeft ? (
            <>
              {imageCol}
              {textCol}
            </>
          ) : (
            <>
              {textCol}
              {imageCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
