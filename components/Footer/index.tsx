"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-[#2a2a2a] px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[#c5c5c5] sm:flex-row sm:items-center sm:justify-between">
        <p>{t("copyright")}</p>
        <div className="flex flex-wrap gap-5">
          <a href="#top" className="transition hover:text-[#ff6b00]">
            {t("home")}
          </a>
          <a href="#services" className="transition hover:text-[#ff6b00]">
            {t("services")}
          </a>
          <a href="#services" className="transition hover:text-[#ff6b00]">
            {t("gallery")}
          </a>
          <a href="#contact" className="transition hover:text-[#ff6b00]">
            {t("contact")}
          </a>
        </div>
      </div>
    </footer>
  );
}
