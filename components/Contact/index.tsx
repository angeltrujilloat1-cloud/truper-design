"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="fade-up px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#2a2a2a] bg-[#111111] p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff6b00]">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#c5c5c5]">
              {t("description")}
            </p>
          </div>

          <form className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm text-[#c5c5c5]">
                <span className="mb-2 block font-medium text-white">{t("fullName")}</span>
                <input
                  type="text"
                  className="w-full rounded-[1rem] border border-[#2a2a2a] bg-[#080808] px-4 py-3 text-white outline-none transition focus:border-[#ff6b00]"
                />
              </label>
              <label className="text-sm text-[#c5c5c5]">
                <span className="mb-2 block font-medium text-white">{t("email")}</span>
                <input
                  type="email"
                  className="w-full rounded-[1rem] border border-[#2a2a2a] bg-[#080808] px-4 py-3 text-white outline-none transition focus:border-[#ff6b00]"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm text-[#c5c5c5]">
                <span className="mb-2 block font-medium text-white">{t("phone")}</span>
                <input
                  type="tel"
                  className="w-full rounded-[1rem] border border-[#2a2a2a] bg-[#080808] px-4 py-3 text-white outline-none transition focus:border-[#ff6b00]"
                />
              </label>
              <label className="text-sm text-[#c5c5c5]">
                <span className="mb-2 block font-medium text-white">{t("productNeeded")}</span>
                <select className="w-full rounded-[1rem] border border-[#2a2a2a] bg-[#080808] px-4 py-3 text-white outline-none transition focus:border-[#ff6b00]">
                  <option>{t("selectOption")}</option>
                  <option>{t("optionDtf")}</option>
                  <option>{t("optionEmbroidery")}</option>
                  <option>{t("optionDesign")}</option>
                </select>
              </label>
            </div>

            <label className="text-sm text-[#c5c5c5]">
              <span className="mb-2 block font-medium text-white">{t("projectDetails")}</span>
              <textarea
                rows={4}
                className="w-full rounded-[1rem] border border-[#2a2a2a] bg-[#080808] px-4 py-3 text-white outline-none transition focus:border-[#ff6b00]"
              />
            </label>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#ff8c1a]"
            >
              <MessageCircle size={18} />
              {t("submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
