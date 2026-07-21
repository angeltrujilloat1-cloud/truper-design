"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhatsAppCta() {
  const t = useTranslations("WhatsAppCta");

  return (
    <section className="fade-up px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#2a2a2a] bg-[#111111] text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="grid gap-6 lg:grid-cols-[0.65fr_0.35fr] p-8 sm:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ff6b00]">
              {t("orderNow")}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              737-418-8887
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#c5c5c5]">
              {t("description")}
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-[#080808] p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff6b00]">
              {t("confidence")}
            </p>
            <p className="mt-4 text-3xl font-semibold text-white">{t("brand")}</p>
            <Link
              href="https://wa.me/17374188887"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#ff6b00] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#ff8c1a]"
            >
              <MessageCircle size={18} />
              {t("quoteWhatsapp")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
