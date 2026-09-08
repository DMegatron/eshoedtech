import { MoveDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

/** §13/§24 — explain one course vs combinations vs the complete program */
const TIERS = [
  {
    step: "SINGLE COURSE",
    heading: "Build One Skill",
    why: "Choose a single course when you want to focus on one specific technical skill or strengthen an existing area of knowledge.",
    bestFor: ["Beginners exploring a specific field", "Students with limited time", "Professionals strengthening one skill"],
  },
  {
    step: "TWO RELATED COURSES",
    heading: "Combine Complementary Skills",
    why: "Two courses pair related foundations — e.g. A+ + N+ builds computers and connectivity together, or N+ + CCNA moves from concepts to device configuration.",
    bestFor: ["Learners with a clear direction", "Building foundations with a goal"],
  },
  {
    step: "MULTI-COURSE PACKAGE",
    heading: "Broader IT Knowledge",
    why: "Three or four courses build broader IT capability — the A+ + N+ + MCSE + CCNA package, for example, covers systems and networks together.",
    bestFor: ["Career changers", "Freshers preparing for support/admin pathways"],
  },
  {
    step: "COMPLETE PROGRAM",
    heading: "Comprehensive IT Skill Set",
    why: "The full program across hardware, Microsoft, Cisco, advanced networking and Linux — a single long learning path with the widest practical coverage.",
    bestFor: ["Learners wanting comprehensive training", "Multi-domain infrastructure goals"],
    featured: true,
  },
];

export function SkillJourney() {
  return (
    <section id="journey" className="bg-white">
      <div className="container-max py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Build Your Skills Step by Step"
            title="Start small. Build bigger."
            description="You don't have to decide everything today. This is how one course grows into a complete skill set."
          />
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.step} delay={i * 0.06}>
              <div className="relative">
                <div
                  className={
                    "card p-5 sm:p-7 " +
                    (tier.featured
                      ? "border-2 border-skyblue-400 shadow-md shadow-skyblue-500/10"
                      : "")
                  }
                >
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-skyblue-50 font-display font-bold text-skyblue-600">
                      {i + 1}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-skyblue-600">
                        {tier.step}
                      </span>
                      <h3 className="mt-1 font-display text-lg sm:text-xl font-semibold text-navy-900">
                        {tier.heading}
                      </h3>
                      <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-slate-600">{tier.why}</p>
                      <p className="mt-3 text-[13px] sm:text-sm text-slate-500">
                        <span className="font-semibold text-navy-800">Best for: </span>
                        {tier.bestFor.join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>
                {i < TIERS.length - 1 && (
                  <div className="flex justify-center py-2.5" aria-hidden="true">
                    <MoveDown size={18} className="text-skyblue-300" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
