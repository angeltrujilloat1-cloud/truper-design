"use client";

import { ArrowRight, MessageCircleMore, Sparkles } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function QualityBanner() {
  const t = useTranslations("QualityBanner");

  return (
    <section className="fade-up px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#ff6b00]/25 bg-[linear-gradient(135deg,_rgba(255,107,0,0.16),_rgba(8,8,8,0.95))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:p-10 lg:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6b00]/30 bg-[#ff6b00]/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-[#ff6b00]">
              <Sparkles size={14} />
              {t("badge")}
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#c5c5c5]">
              {t("description")}
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#080808]/80 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: t("responseTime"), value: "24h" },
                { label: t("premiumProjects"), value: "100+" },
                { label: t("detailLevel"), value: t("highest") },
                { label: t("focus"), value: t("conversion") },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.1rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#c5c5c5]">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <Link
              href="https://wa.me/17374188887"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#ff8c1a]"
            >
              <MessageCircleMore size={18} />
              {t("quoteWhatsapp")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
