import { BookOpen, Settings2, PenTool, Wrench, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

/** §26 — Learn → Configure → Practice → Troubleshoot → Build Confidence */
const STEPS = [
  { icon: BookOpen, title: "Learn", text: "Understand the concepts." },
  { icon: Settings2, title: "Configure", text: "Work with systems and networking technologies." },
  { icon: PenTool, title: "Practice", text: "Apply knowledge through practical exercises." },
  { icon: Wrench, title: "Troubleshoot", text: "Work through real-world-style technical problems." },
  { icon: BadgeCheck, title: "Build Confidence", text: "Develop familiarity with IT environments." },
];

export function PracticalSteps() {
  return (
    <section id="practical" className="border-y border-skyblue-100 bg-skyblue-50/70">
      <div className="container-max py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Lab-Based Learning"
            title="Theory is important. Practice makes it useful."
            description="Every Esho EduTech course mixes concept explanations with hands-on lab work — because the skill sticks when your hands do it."
          />
        </Reveal>

        <div className="mt-9 sm:mt-12 grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07} className="h-full">
              <div className="relative flex h-full flex-col items-center rounded-2xl border border-skyblue-100 bg-white p-4 sm:p-6 text-center shadow-sm">
                <span className="absolute right-3 top-3 font-display text-xs font-bold text-skyblue-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-skyblue-50 text-skyblue-600 sm:h-12 sm:w-12">
                  <step.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-display text-sm sm:text-base font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
