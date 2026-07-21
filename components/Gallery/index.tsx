import Image from "next/image";
import { SectionHeading } from "@/components/UI/SectionHeading";

const galleryItems = [
  {
    label: "Custom T-Shirts",
    src: "/images/truper/custom-tshirt-black.jpeg",
    alt: "Custom black apparel mockup with premium branding",
  },
  {
    label: "Embroidery",
    src: "/images/truper/custom-embroidery.jpeg",
    alt: "Black polo shirt custom embroidery mockup",
  },
  {
    label: "Caps",
    src: "/images/truper/truper-cap.jpeg",
    alt: "Premium branded cap mockup for headwear services",
  },
  {
    label: "Polos",
    src: "/images/truper/truper-polo.jpeg",
    alt: "Premium black polo apparel mockup",
  },
  {
    label: "Business Logos",
    src: "/images/truper/graphic-design.jpeg",
    alt: "Graphic design studio mockup with brand identity visuals",
  },
  {
    label: "Vehicle Graphics",
    src: "/images/truper/truper-cap-angled.jpeg",
    alt: "Premium apparel mockup with strong black studio styling",
  },
  {
    label: "Brand Identity",
    src: "/images/truper/truper-banner.jpg",
    alt: "Premium brand identity mockup with dynamic composition",
  },
  {
    label: "Packaging",
    src: "/images/truper/custom-ts-print.jpeg",
    alt: "Custom t-shirt printing mockup with premium brand artwork",
  },
  {
    label: "Company Uniforms",
    src: "/images/truper/custom-hoodie.jpeg",
    alt: "Custom hoodie apparel mockup for premium uniforms",
  },
  {
    label: "Storefront Graphics",
    src: "/images/truper/dtf-printing.jpeg",
    alt: "DTF printing mockup with premium brand application",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="fade-up px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="Premium work samples with strong visual presence."
          description="A curated presentation of designs that reinforce brand quality and product impact."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article
              key={`${item.label}-${index}`}
              className="group overflow-hidden rounded-[1.75rem] border border-[#2a2a2a] bg-[#111111] transition duration-300 hover:-translate-y-1 hover:border-[#ff6b00]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-sm font-semibold uppercase tracking-[0.28em] text-white">
                  {item.label}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
