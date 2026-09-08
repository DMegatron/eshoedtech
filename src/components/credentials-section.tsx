import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { courses } from "@/data/courses";

/** §32 — data-driven; only verified facts. Never fabricate certification claims. */
const STATUS = "To be confirmed";

export function CredentialsSection() {
  return (
    <section id="credentials" className="bg-white">
      <div className="container-max py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Training & Credentials"
            title="Certification information"
            description="Esho EduTech provides classroom training and practical lab preparation. Detailed certification and exam information will be updated once confirmed by the institute."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-9 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-skyblue-50/70 text-xs uppercase tracking-wider text-navy-800">
                  <th className="px-4 py-3 font-bold">Course</th>
                  <th className="px-4 py-3 font-bold">Certification</th>
                  <th className="px-4 py-3 font-bold">Exam Preparation</th>
                  <th className="px-4 py-3 font-bold">Institute Certificate</th>
                  <th className="px-4 py-3 font-bold">Lab Training</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {courses.map((c) => (
                  <tr key={c.slug}>
                    <td className="px-4 py-3 font-semibold text-navy-900">{c.code}</td>
                    <td className="px-4 py-3 text-slate-400 italic">{STATUS}</td>
                    <td className="px-4 py-3 text-slate-400 italic">{STATUS}</td>
                    <td className="px-4 py-3 text-slate-400 italic">{STATUS}</td>
                    <td className="px-4 py-3 text-skyblue-700">✓ Included</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[13px] sm:text-sm italic text-slate-500">
            Certification details will be updated by Esho EduTech. Please speak to an advisor for current
            certification and exam guidance — results stay honest when expectations are honest.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
