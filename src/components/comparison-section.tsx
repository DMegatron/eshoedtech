import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { courses } from "@/data/courses";

/** §29 — simple course comparison: focus, level, practical, suggested direction */
const DIRECTION: Record<string, string> = {
  "a-plus": "IT Support",
  "n-plus": "Networking",
  mcse: "System Administration",
  ccna: "Networking",
  ccnp: "Advanced Networking",
  linux: "Linux / System Administration",
};

export function ComparisonSection() {
  return (
    <section id="compare" className="bg-white">
      <div className="container-max py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Make It Clear"
            title="Compare what each course builds"
            description="Course → focus → next step. A suggested direction, not a promise — the right choice depends on your goal."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-9 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-skyblue-50/70 text-xs uppercase tracking-wider text-navy-800">
                  <th className="px-4 py-3 font-bold">Course</th>
                  <th className="px-4 py-3 font-bold">Main Focus</th>
                  <th className="px-4 py-3 font-bold">Level</th>
                  <th className="px-4 py-3 font-bold">Practical</th>
                  <th className="px-4 py-3 font-bold">Suggested Direction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {courses.map((c) => (
                  <tr key={c.slug} className="transition-colors hover:bg-skyblue-50/40">
                    <td className="px-4 py-3">
                      <Link href={`/courses/${c.slug}`} className="font-semibold text-skyblue-700 hover:underline">
                        {c.code}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{c.focus}</td>
                    <td className="px-4 py-3 text-slate-600">{c.level}</td>
                    <td className="px-4 py-3">
                      <Check size={16} className="text-skyblue-500" aria-label="Practical included" />
                    </td>
                    <td className="px-4 py-3 text-slate-600">{DIRECTION[c.slug]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
