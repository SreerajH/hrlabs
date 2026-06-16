"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Consulting", href: "#services" },
  { label: "What We Do", href: "#why" },
  { label: "Careers", href: "#careers" },
  { label: "Partners", href: "#ngo" },
  { label: "DigiCloud", href: "#digicloud" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0" aria-label="HR Labs home">
            <Image
              src="/images/hr-labs-logo.png"
              alt="HR Labs"
              width={140}
              height={44}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative font-inter font-medium text-[15px] text-navy hover:text-blue-mid transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-mid transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-blue-mid text-white font-inter font-medium text-sm rounded-pill hover:bg-blue-mid/90 hover:scale-[1.02] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-mid focus-visible:ring-offset-2"
          >
            Book a Consultation
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-navy p-2 rounded-md focus-visible:outline-2 focus-visible:outline-blue-mid"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-navy flex flex-col pt-20 px-8"
          >
            <ul className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-inter font-medium text-2xl text-white hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-10 inline-flex items-center justify-center px-6 py-3 bg-blue-mid text-white font-inter font-medium text-base rounded-pill hover:bg-blue-mid/90 transition-all"
            >
              Book a Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
