import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { courses } from "@/data/courses";

/** §6 — six individual course cards: explanation, skills, practical focus, outcome */
export function CourseGrid() {
  return (
    <section id="courses" className="bg-white">
      <div className="container-max py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Explore Our IT Training"
            title="Six courses. One goal: practical IT skill."
            description="Every course is classroom-based with a heavy practical component. Click any course to see the full curriculum, lab work, benefits and outcomes."
          />
        </Reveal>

        <div className="mt-9 sm:mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.slug} delay={(i % 3) * 0.08} className="h-full">
              <article className="card card-hover flex h-full flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-xl bg-skyblue-50 px-3 py-1.5 font-display text-base sm:text-lg font-bold tracking-tight text-skyblue-600">
                    {course.code}
                  </span>
                  <span className="chip bg-slate-100 text-slate-600">{course.level}</span>
                </div>

                <h3 className="mt-3.5 font-display text-base sm:text-lg font-semibold leading-snug text-navy-900">
                  {course.title.split("— ")[1] ?? course.title}
                </h3>
                <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-slate-600">
                  {course.shortDescription}
                </p>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {course.skills.map((s) => (
                    <span key={s} className="rounded-full bg-skyblue-50 px-2.5 py-0.5 text-[11px] font-semibold text-skyblue-700">
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="mt-3.5 space-y-1.5">
                  <li className="flex items-start gap-2 text-[13px] sm:text-sm text-slate-600">
                    <Check size={14} className="mt-0.5 shrink-0 text-skyblue-500" aria-hidden="true" />
                    Practical: {course.practicalFocus}
                  </li>
                  <li className="flex items-start gap-2 text-[13px] sm:text-sm text-slate-600">
                    <Check size={14} className="mt-0.5 shrink-0 text-skyblue-500" aria-hidden="true" />
                    {course.learningMode} · {course.level}
                  </li>
                </ul>

                <div className="mt-auto pt-5">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-skyblue-600 transition-colors hover:text-skyblue-700"
                  >
                    View Course
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
