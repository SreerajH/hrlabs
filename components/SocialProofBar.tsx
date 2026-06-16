"use client";

import Image from "next/image";

const logos = [
  { src: "/images/outlook-logo.png", alt: "Outlook India", width: 110 },
  { src: "/images/zee-business-logo.png", alt: "Zee Business", width: 130 },
  { src: "/images/the-week-logo.png", alt: "The Week", width: 100 },
  { src: "/images/brandz-logo.png", alt: "BrandZ Magazine", width: 120 },
];

export default function SocialProofBar() {
  return (
    <section
      aria-label="As featured in"
      className="bg-white border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Label */}
          <p className="font-inter font-medium text-label tracking-[0.08em] uppercase text-slate flex-shrink-0">
            As Featured In
          </p>

          {/* Divider */}
          <span className="hidden md:block w-px h-6 bg-border" />

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={36}
                  className="h-7 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
