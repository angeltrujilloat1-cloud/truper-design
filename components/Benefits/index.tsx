import { SectionHeading } from "@/components/UI/SectionHeading";
import { Compass, ShieldCheck, Sparkles, Workflow } from "lucide-react";

const benefits = [
  {
    title: "Strategic identity",
    icon: Compass,
    description:
      "We define your visual language and messaging so every piece feels precise, premium, and unmistakably yours.",
  },
  {
    title: "Results-driven process",
    icon: Workflow,
    description:
      "A streamlined studio workflow keeps every stage aligned with your target and business goals.",
  },
  {
    title: "High-impact visuals",
    icon: Sparkles,
    description:
      "We design with contrast, hierarchy, and material detail that give your brand real presence.",
  },
  {
    title: "Flawless delivery",
    icon: ShieldCheck,
    description:
      "Every asset is polished with care so the execution is as strong as the concept.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="fade-up px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Benefits"
          title="Design that brings clarity, authority and real brand value."
          description="We build visual systems and experiences with intent, consistency and a high level of execution that stands out from the first contact."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-[1.5rem] border border-[#2a2a2a] bg-[#111111] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#ff6b00]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#ff6b00]/30 bg-[#ff6b00]/10">
                  <Icon className="h-7 w-7 text-[#FF7A00]" />
                </div>
              <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#c5c5c5]">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
