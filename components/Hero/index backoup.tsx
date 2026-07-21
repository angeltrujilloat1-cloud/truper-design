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

export default function Hero() {
  return (
    <section id="top" className="fade-up relative bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,107,0,0.12),transparent_30%)]" />
      <div className="absolute left-[-8%] top-20 h-72 w-72 rounded-full bg-[#ff6b00]/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      {/* TWO-COLUMN GRID: 45% / 55% */}
      <div
        className="relative grid"
        style={{
          gridTemplateColumns: '45% 55%',
          alignItems: 'center',
          minHeight: '850px',
        }}
      >
        {/* LEFT COLUMN - 45% */}
        <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-10 py-16">
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
              href="https://wa.me/17374188887"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-6 py-3 text-base font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#ff8c1a]"
            >
              <MessageCircle size={18} />
              QUOTE ON WHATSAPP
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#ff6b00] hover:text-[#ff6b00]"
            >
              VIEW WORK
            </a>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 max-w-2xl">
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

        {/* RIGHT COLUMN - 55% */}
        <div className="flex items-center justify-center" style={{ minHeight: '850px' }}>
          <Image
            src="/images/truper/truper-banner.jpg"
            alt="Premium TRUPER DESIGN studio photography showcase"
            width={900}
            height={850}
            sizes="55vw"
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      {/* MOBILE: stack image below text */}
      <style>{`
        @media (max-width: 767px) {
          #top > div.grid {
            grid-template-columns: 1fr !important;
          }
          #top > div.grid > div:last-child {
            min-height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
