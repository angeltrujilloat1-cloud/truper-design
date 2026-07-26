import Image from "next/image";
import { MessageCircle } from "lucide-react";

const features = [
  {
    title: "Premium production",
    description: "We deliver refined outputs with exceptional materials and premium finish.",
  },
  {
    title: "Bold identity",
    description: "Brand work designed to make every touchpoint feel confident and memorable.",
  },
  {
    title: "Fast execution",
    description: "Studio speed, rigorous process and clear delivery to move your project ahead.",
  },
  {
    title: "Dedicated support",
    description: "We guide every step, from briefing to launch, with clarity and precision.",
  },
];

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    alt: "Premium branded t-shirt mockup",
  },
  {
    src: "https://images.unsplash.com/photo-1528701800489-2e5a53ac3fbb?auto=format&fit=crop&w=900&q=80",
    alt: "Lifestyle cap mockup",
  },
  {
    src: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
    alt: "Premium polo shirt mockup",
  },
];

export default function Hero() {
  return (
    <section id="top" className="fade-up relative overflow-hidden bg-[#050505] px-6 pt-24 pb-16 text-white sm:px-8 lg:px-10 lg:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,107,0,0.12),transparent_30%)]" />
      <div className="absolute left-[-8%] top-20 h-72 w-72 rounded-full bg-[#ff6b00]/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.32em] text-[#ff6b00]">
              TRUPER DESIGN
            </p>
            <h1 className="text-[clamp(3.5rem,5vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-white sm:text-[5.5rem]">
              Your brand,
              <br />
              your style,
              <br />
              <span className="text-[#ff6b00]">crafted with impact.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#c5c5c5] sm:text-xl">
              Premium identity and product design for brands that stand out.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5210000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-6 py-3 text-base font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#ff8c1a]"
              >
                <MessageCircle size={18} />
                QUOTE ON WHATSAPP
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#ff6b00] hover:text-[#ff6b00]"
              >
                VIEW WORK
              </a>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-[1.5rem] border border-[#2a2a2a] bg-[#111111]/90 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff6b00]">
                    {feature.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c5c5c5]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#2a2a2a] bg-[#111111] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-8">
              <div className="relative rounded-[2rem] border border-white/10 bg-[#080808] p-6">
                <div className="absolute left-5 top-6 h-[220px] w-[170px] rounded-[1.75rem] border border-white/10 bg-[#111111] shadow-xl shadow-black/40">
                  <div className="absolute inset-0 rounded-[1.75rem] bg-[#ff6b00]/10 blur-3xl" />
                  <div className="relative h-full overflow-hidden rounded-[1.75rem]">
                    <Image
                      src={heroImages[0].src}
                      alt={heroImages[0].alt}
                      fill
                      sizes="(max-width: 768px) 180px, 220px"
                      className="object-cover hover-zoom"
                      priority
                    />
                  </div>
                </div>

                <div className="absolute right-10 top-14 h-28 w-28 rounded-[1.75rem] border border-white/10 bg-[#111111] shadow-xl shadow-black/40">
                  <div className="absolute inset-0 rounded-[1.75rem] bg-[#ff6b00]/10 blur-3xl" />
                  <div className="relative h-full overflow-hidden rounded-[1.75rem]">
                    <Image
                      src={heroImages[1].src}
                      alt={heroImages[1].alt}
                      fill
                      sizes="(max-width: 768px) 100px, 120px"
                      className="object-cover hover-zoom"
                      priority
                    />
                  </div>
                </div>

                <div className="absolute bottom-24 left-1/2 h-32 w-32 -translate-x-1/2 rounded-[1.75rem] border border-white/10 bg-[#111111] shadow-xl shadow-black/40">
                  <div className="absolute inset-0 rounded-[1.75rem] bg-[#ff6b00]/10 blur-3xl" />
                  <div className="relative h-full overflow-hidden rounded-[1.75rem]">
                    <Image
                      src={heroImages[2].src}
                      alt={heroImages[2].alt}
                      fill
                      sizes="(max-width: 768px) 140px, 160px"
                      className="object-cover hover-zoom"
                      priority
                    />
                  </div>
                </div>

                <div className="absolute inset-x-8 bottom-6 rounded-[1.5rem] border border-white/10 bg-[#080808]/95 p-4 text-sm text-[#c5c5c5] backdrop-blur-sm">
                  <p className="font-semibold uppercase tracking-[0.28em] text-[#ff6b00]">Product composition</p>
                  <p className="mt-2 text-[#c5c5c5]">
                    Premium mockup set for apparel and merchandise with a modern presentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
