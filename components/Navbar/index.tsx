"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#benefits" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-[10px]">
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="relative overflow-hidden rounded-none border border-[rgba(255,255,255,0.08)] bg-[#0B0B0B] shadow-[0_8px_26px_rgba(0,0,0,0.3)]">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-[#F47A20]" />

          <div className="relative flex h-[72px] items-center justify-between px-6 md:px-7 lg:px-8">
            <Link href="#top" className="flex items-center gap-3" aria-label="TRUPER DESIGN home">
              <div className="flex items-center justify-center text-[22px] font-bold tracking-[0.16em] leading-none">
                <span className="text-white">T</span>
                <span className="text-[#F47A20]">D</span>
              </div>
              <div className="hidden items-center gap-1.5 sm:flex">
                <span className="text-[15px] font-bold uppercase tracking-[0.17em] leading-none text-white">TRUPER</span>
                <span className="text-[15px] font-bold uppercase tracking-[0.17em] leading-none text-[#F47A20]">DESIGN</span>
              </div>
            </Link>

            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative text-[13px] font-bold uppercase tracking-[0.08em] text-[rgba(255,255,255,0.88)] [text-rendering:geometricPrecision] transition-all duration-[250ms] hover:text-[#F47A20]"
                >
                  <span>{item.label}</span>
                  <span className="absolute -bottom-0.5 left-1/2 h-px w-[70%] -translate-x-1/2 scale-x-0 bg-[#F47A20] transition-transform duration-[250ms] group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-4 md:flex">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex text-white/85 transition duration-300 hover:text-[#F47A20] hover:drop-shadow-[0_0_8px_rgba(244,122,32,0.28)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex text-white/85 transition duration-300 hover:text-[#F47A20] hover:drop-shadow-[0_0_8px_rgba(244,122,32,0.28)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.5 8.5h2V5.2c-.35-.05-1.53-.15-2.9-.15-2.87 0-4.85 1.75-4.85 4.97v2.78H4.5V16h3.25v8h4v-8h3.15l.5-3.17h-3.65v-2.46c0-.92.25-1.87 1.75-1.87Z" />
                  </svg>
                </Link>
              </div>

              <Link
                href="https://wa.me/17374188887"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[42px] items-center gap-2 rounded-[6px] bg-[#F47A20] px-[28px] text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_6px_14px_rgba(244,122,32,0.18)] transition-all duration-[250ms] ease-out hover:-translate-y-[1px] hover:brightness-[1.05] hover:shadow-[0_8px_20px_rgba(244,122,32,0.25)]"
              >
                GET A QUOTE
                <ArrowRight size={16} />
              </Link>

              <button
                type="button"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[rgba(255,255,255,0.04)] text-white/90 transition duration-300 hover:bg-[rgba(244,122,32,0.15)] hover:text-[#F47A20] md:hidden"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden border-t border-white/10 bg-[rgba(10,10,10,0.95)] px-6 transition-all duration-300 md:hidden ${
              isMenuOpen ? "max-h-64 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={`mobile-${item.label}`}
                  href={item.href}
                  className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[rgba(255,255,255,0.88)] transition-colors duration-200 hover:text-[#F47A20]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
