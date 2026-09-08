import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, Clock, FlaskConical, GraduationCap, Users } from "lucide-react";
import { courses, getCourseBySlug } from "@/data/courses";
import { packagesContaining } from "@/data/packages";
import { PackageCard } from "@/components/package-card";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} | Esho EduTech`,
    description: course.shortDescription,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const related = course.relatedCourses
    .map((s) => courses.find((c) => c.slug === s))
    .filter(Boolean);
  const inPackages = packagesContaining(course.slug);

  return (
    <div className="relative min-h-screen bg-white">
      <SiteHeader />
      <main>
        {/* ── Course Hero ── */}
        <section className="bg-skyblue-50/70">
          <div className="container-max py-10 sm:py-14">
            <Link href="/#courses" className="inline-flex items-center gap-1.5 text-sm font-medium text-skyblue-700 hover:underline">
              <ArrowLeft size={14} /> All courses
            </Link>
            <div className="mt-4 max-w-3xl">
              <span className="rounded-xl bg-white px-3 py-1.5 font-display text-xl font-bold text-skyblue-600 shadow-sm ring-1 ring-skyblue-100">
                {course.code}
              </span>
              <h1 className="mt-4 font-display text-2xl sm:text-4xl font-bold tracking-tight text-navy-900 text-balance">
                {course.title}
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">{course.shortDescription}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { icon: GraduationCap, label: course.learningMode },
                  { icon: FlaskConical, label: `Practical: ${course.practicalFocus}` },
                  { icon: Users, label: course.level },
                  { icon: Clock, label: `Duration: ${course.duration}` },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="chip gap-1.5 border border-skyblue-100 bg-white text-slate-600">
                    <Icon size={12} className="text-skyblue-500" /> {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ── Overview + Who is it for ── */}
        <section className="container-max grid gap-4 py-10 sm:py-14 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <div className="card h-full p-5 sm:p-7">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">Course Overview</h2>
              {course.overview.map((p) => (
                <p key={p.slice(0, 24)} className="mt-3 text-sm leading-relaxed text-slate-600">{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full bg-skyblue-50/70 p-5 sm:p-7">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">Who is this for?</h2>
              <ul className="mt-3 space-y-2">
                {course.whoIsFor.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check size={15} className="mt-0.5 shrink-0 text-skyblue-500" /> {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* ── What you learn (syllabus confirmed by the institute) ── */}
        <section className="border-y border-slate-100 bg-white">
          <div className="container-max py-10 sm:py-14">
            <h2 className="font-display text-lg sm:text-2xl font-semibold text-navy-900">What will you learn?</h2>
            <div className="mt-5 grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
              {course.keyLearning.map((k) => (
                <div key={k} className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-skyblue-50/50 p-3.5">
                  <Check size={15} className="mt-0.5 shrink-0 text-skyblue-500" />
                  <span className="text-[13px] sm:text-sm text-slate-700">{k}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs italic text-slate-400">Final syllabus is confirmed and updated by the institute.</p>
          </div>
        </section>

        {/* ── Practical / Lab — prominent per spec §9 ── */}
        <section className="container-max py-10 sm:py-14">
          <div className="card border-2 border-skyblue-200 bg-gradient-to-b from-skyblue-50/80 to-white p-5 sm:p-8">
            <span className="chip gap-1.5 bg-skyblue-500 text-white">
              <FlaskConical size={12} /> Practical / Lab
            </span>
            <h2 className="mt-3 font-display text-lg sm:text-2xl font-semibold text-navy-900">What will you practice?</h2>
            <div className="mt-5 grid gap-2 sm:grid-cols-2 sm:gap-3">
              {course.practice.map((p) => (
                <div key={p} className="flex items-start gap-2.5 rounded-xl bg-white px-3.5 py-3 shadow-sm ring-1 ring-skyblue-100">
                  <FlaskConical size={15} className="mt-0.5 shrink-0 text-skyblue-500" />
                  <span className="text-[13px] sm:text-sm font-medium text-navy-800">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why learn + Skills + Outcomes + Credentials ── */}
        <section className="container-max grid gap-4 pb-10 sm:pb-14 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-5 sm:p-7">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">Why learn {course.code}?</h2>
              <ul className="mt-3 space-y-2.5">
                {course.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check size={15} className="mt-0.5 shrink-0 text-skyblue-500" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                {course.skills.map((s) => (
                  <span key={s} className="rounded-full bg-skyblue-50 px-3 py-1 text-xs font-semibold text-skyblue-700">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <div className="card flex-1 p-5 sm:p-7">
                <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">What can you do after learning this?</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{course.outcome.description}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-skyblue-600">Potential career areas</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {course.outcome.careerAreas.map((c) => (
                    <span key={c} className="chip bg-slate-100 text-slate-700">{c}</span>
                  ))}
                </div>
              </div>
              <div className="card bg-skyblue-50/70 p-5 sm:p-7">
                <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">Credentials & Certification</h2>
                <p className="mt-2 text-sm italic text-slate-500">{course.credentials}</p>
                <p className="mt-2 text-sm text-slate-600">
                  Lab training is included. Ask an advisor for the current certification and exam guidance.
                </p>
              </div>
            </div>
          </Reveal>
        </section>
        {/* ── Related courses ── */}
        <section className="border-t border-slate-100 bg-white">
          <div className="container-max py-10 sm:py-14">
            <h2 className="font-display text-lg sm:text-2xl font-semibold text-navy-900">Related courses</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {related.map(
                (r) =>
                  r && (
                    <Link
                      key={r.slug}
                      href={`/courses/${r.slug}`}
                      className="card card-hover group p-4 sm:p-5"
                    >
                      <span className="rounded-lg bg-skyblue-50 px-2 py-1 text-sm font-bold text-skyblue-600">{r.code}</span>
                      <p className="mt-2 text-sm font-semibold text-navy-900">{r.title.split("— ")[1] ?? r.title}</p>
                      <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-skyblue-600">
                        View course <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>

        {/* ── Available packages including this course ── */}
        {inPackages.length > 0 && (
          <section className="border-t border-slate-100 bg-skyblue-50/70">
            <div className="container-max py-10 sm:py-14">
              <h2 className="font-display text-lg sm:text-2xl font-semibold text-navy-900">
                Packages that include {course.code}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Combine {course.code} with complementary courses — practical lab training included.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {inPackages.map((pkg) => (
                  <PackageCard key={pkg.slug} pkg={pkg} compact />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Enquire CTA ── */}
        <section id="enquire" className="container-max py-10 sm:py-14">
          <div className="rounded-2xl bg-gradient-to-r from-skyblue-500 to-skyblue-600 p-6 text-center sm:p-10">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white text-balance">
              Interested in {course.code} training?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base text-white/85">
              Talk to an advisor — they'll explain the curriculum, lab practice and which package fits your goal.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-md transition-all hover:-translate-y-0.5"
              >
                Enquire Now <ArrowRight size={15} />
              </Link>
              <Link
                href="/#packages"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Packages
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}