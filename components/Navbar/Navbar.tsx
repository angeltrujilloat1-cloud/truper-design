"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircleMore } from "lucide-react";

type NavbarProps = {
  logoSrc?: string;
};

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#benefits" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ logoSrc }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[90px] border-b transition-all duration-300 ${
        isScrolled
          ? "border-[#ff6b00]/40 bg-[#080808]/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-3" aria-label="Home TRUPER DESIGN">
          {logoSrc ? (
            <Image src={logoSrc} alt="TRUPER DESIGN" width={120} height={40} className="h-10 w-auto" />
          ) : (
            <div className="flex flex-col leading-none">
              <span className="text-xl font-semibold tracking-[0.28em] text-white">
                TRUPER
              </span>
              <span className="text-xl font-semibold tracking-[0.28em] text-[#ff6b00]">
                DESIGN
              </span>
            </div>
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative text-sm font-medium uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:text-[#ff6b00]"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 rounded-full bg-[#ff6b00] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:scale-[1.02]"
          >
            <MessageCircleMore size={18} />
            GET A QUOTE
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#ff6b00] hover:text-[#ff6b00] md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-white/10 bg-[#080808]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium uppercase tracking-[0.24em] text-white transition hover:text-[#ff6b00]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircleMore size={16} />
              GET A QUOTE
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
