"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/UI/SectionHeading";
import { useTranslations } from "next-intl";

const serviceImages = [
  {
    src: "/images/truper/services-gallery/custom-caps.jpeg",
    alt: "Premium embroidered cap showcase",
  },
  {
    src: "/images/truper/services-gallery/graphic-design.jpeg",
    alt: "Graphic design service showcase",
  },
  {
    src: "/images/truper/services-gallery/dtf-printing.jpeg",
    alt: "DTF printing service showcase",
  },
  {
    src: "/images/truper/services-gallery/embroidery.jpeg",
    alt: "Embroidery service showcase",
  },
  {
    src: "/images/truper/services-gallery/custom-apparel.jpeg",
    alt: "Custom apparel service showcase",
  },
  {
    src: "/images/truper/services-gallery/custom-tshirt-printing.jpeg",
    alt: "Custom t-shirt printing service showcase",
  },
];

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="fade-up px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {serviceImages.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={1200}
              height={1500}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="block h-auto w-full rounded-[18px] object-cover transition-all duration-[350ms] ease-out hover:scale-[1.03]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
