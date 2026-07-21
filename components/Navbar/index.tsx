"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useLocaleSwitcher } from "@/components/UI/LocaleProvider";

function LanguageSwitcher() {
  const t = useTranslations("Navbar");
  const { locale, setLocale } = useLocaleSwitcher();

  return (
    <div className="inline-flex h-[42px] items-center rounded-full border border-[#2d2d2d] bg-black px-[18px] py-[12px] text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-[#ff6a00] hover:bg-[#151515]">
      <button
        type="button"
        className={`transition duration-300 ${locale === "en" ? "text-[#ff6a00]" : "text-white"}`}
        onClick={() => setLocale("en")}
      >
        <span>🇺🇸 {t("langEn")}</span>
      </button>
      <span className="mx-3 text-white/70">|</span>
      <button
        type="button"
        className={`transition duration-300 ${locale === "es" ? "text-[#ff6a00]" : "text-white"}`}
        onClick={() => setLocale("es")}
      >
        <span>🇪🇸 {t("langEs")}</span>
      </button>
    </div>
  );
}

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("home"), href: "#top" },
    { label: t("services"), href: "#services" },
    { label: t("about"), href: "#benefits" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#2a2a2a] bg-[#080808]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[90px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-3 text-base font-semibold uppercase tracking-[0.34em] text-white">
          <span className="text-[#ff6b00]">TRUPER</span>
          <span className="text-white">DESIGN</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-[0.26em] text-white transition duration-300 hover:text-[#ff6b00]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <LanguageSwitcher />
        </div>

        <Link
          href="https://wa.me/17374188887"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#ff6b00] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-[#ff8c1a] md:inline-flex"
        >
          <MessageCircle size={18} />
          {t("quote")}
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#ff6b00] hover:text-[#ff6b00] md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={t("menu")}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-white/10 bg-[#080808]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col items-center gap-4 text-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-[0.26em] text-white transition hover:text-[#ff6b00]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2">
              <LanguageSwitcher />
            </div>

            <Link
              href="https://wa.me/17374188887"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircle size={18} />
              {t("quote")}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
