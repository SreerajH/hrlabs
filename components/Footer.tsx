import Image from "next/image";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#careers" },
];

const serviceLinks = [
  { label: "HR Consulting", href: "#services" },
  { label: "DigiCloud", href: "#digicloud" },
  { label: "Membership", href: "#membership" },
  { label: "Partners", href: "#ngo" },
];

const socialLinks = [
  { Icon: Twitter, href: "https://twitter.com", label: "X (Twitter)" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/hrlabss/", label: "LinkedIn" },
  { Icon: Facebook, href: "https://www.facebook.com/share/196zMZsVVU/", label: "Facebook" },
  { Icon: Instagram, href: "https://www.instagram.com/hrlabsglobal?igsh=MWZ1c2hybzIxcXFqMA==", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "#0B1930" }}
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* 4-col grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/hr-labs-logo.png"
              alt="HR Labs"
              width={130}
              height={40}
              className="h-9 w-auto object-contain brightness-0 invert"
            />
            <p className="font-inter text-white/60 text-sm leading-relaxed">
              People, Process &amp; Performance
            </p>
            <div className="flex gap-3 mt-1">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h3 className="font-inter font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-inter text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="font-inter font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-inter text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-inter font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a
                href="tel:+919742194666"
                className="hover:text-white transition-colors"
              >
                +91 97421 94666
              </a>
              <div className="flex gap-3 mt-1">
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <span>·</span>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t text-center"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="font-inter text-white/40 text-xs">
            © 2025 HR Labs · hrlabs.in · All Rights Reserved · Crafted in India
          </p>
        </div>
      </div>
    </footer>
  );
}
