"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

type Product = {
  label: string;
  description: string;
  src: string;
  alt: string;
};

export default function Products() {
  const t = useTranslations("Products");

  const products: Product[] = [
    {
      label: t("item1Label"),
      description: t("item1Description"),
      src: "/images/truper/truper-tshirt.jpeg",
      alt: "Black t-shirt mockup with premium logo styling",
    },
    {
      label: t("item2Label"),
      description: t("item2Description"),
      src: "/images/truper/truper-polo.jpeg",
      alt: "Black polo apparel mockup with clean premium finish",
    },
    {
      label: t("item3Label"),
      description: t("item3Description"),
      src: "/images/truper/truper-cap.jpeg",
      alt: "Black cap mockup with premium embroidery branding",
    },
    {
      label: t("item4Label"),
      description: t("item4Description"),
      src: "/images/truper/truper-hoodie.jpeg",
      alt: "Premium hoodie mockup with elevated dark styling",
    },
  ];

  return (
    <section className="fade-up px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ff6b00]">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.label}
              className="group overflow-hidden rounded-[1.75rem] border border-[#2a2a2a] bg-[#111111] transition duration-300 hover:-translate-y-1 hover:border-[#ff6b00]"
            >
              <div className="relative flex items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#f5f5f5] p-6" style={{height: 'clamp(260px, 300px, 320px)'}}>
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={280}
                  height={280}
                  className="h-auto w-full max-w-[280px] object-contain"
                />
              </div>
              <div className="p-6">
                <p className="text-base font-semibold text-white">{product.label}</p>
                <p className="mt-3 text-sm leading-7 text-[#c5c5c5]">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
