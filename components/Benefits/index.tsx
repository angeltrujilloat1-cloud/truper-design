"use client";

import { SectionHeading } from "@/components/UI/SectionHeading";
import { useTranslations } from "next-intl";

export default function Benefits() {
  const t = useTranslations("Benefits");

  const benefits = [
    {
      title: t("item1Title"),
      description: t("item1Description"),
    },
    {
      title: t("item2Title"),
      description: t("item2Description"),
    },
    {
      title: t("item3Title"),
      description: t("item3Description"),
    },
    {
      title: t("item4Title"),
      description: t("item4Description"),
    },
  ];

  return (
    <section id="benefits" className="fade-up px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[1.5rem] border border-[#2a2a2a] bg-[#111111] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#ff6b00]"
            >
              <div className="mb-5 h-10 w-10 rounded-full border border-[#ff6b00]/30 bg-[#ff6b00]/10" />
              <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#c5c5c5]">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
