import { BookOpen, Hand, Wrench, Network, Compass } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

/** §28 — What will you take away? (no job guarantees) */
const OUTCOMES = [
  { icon: BookOpen, title: "Technical Knowledge", text: "Understand fundamental IT concepts." },
  { icon: Hand, title: "Practical Skills", text: "Apply concepts through hands-on exercises." },
  { icon: Wrench, title: "Troubleshooting", text: "Develop structured problem-solving skills." },
  {
    icon: Network,
    title: "Infrastructure Understanding",
    text: "Understand how systems, networks and operating environments work together.",
  },
  {
    icon: Compass,
    title: "Career Direction",
    text: "Understand possible pathways into IT support, networking and system administration.",
  },
];

export function OutcomesSection() {
  return (
    <section id="outcomes" className="border-y border-skyblue-100 bg-skyblue-50/70">
      <div className="container-max py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Outcomes"
            title="What will you take away?"
            description="Real knowledge and practical ability — the things interviews and workplaces actually test. We don't promise jobs; we prepare you for skill pathways."
          />
        </Reveal>

        <div className="mt-9 sm:mt-12 grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.07} className="h-full">
              <div className="flex h-full flex-col items-center rounded-2xl border border-skyblue-100 bg-white p-4 sm:p-6 text-center shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-skyblue-50 text-skyblue-600 sm:h-12 sm:w-12">
                  <o.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-display text-sm sm:text-base font-semibold text-navy-900">{o.title}</h3>
                <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
