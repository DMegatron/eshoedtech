import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, FlaskConical } from "lucide-react";
import { getPackageBySlug, getPackageCourses, packages } from "@/data/packages";
import { CREDENTIALS_PLACEHOLDER } from "@/data/courses";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};
  return {
    title: `${pkg.name} ${pkg.tagline} — ${pkg.priceLabel} | Esho EduTech`,
    description: pkg.description,
  };
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();
  const includedCourses = getPackageCourses(pkg);

  return (
    <div className="relative min-h-screen bg-white">
      <SiteHeader />
      <main>
        {/* ── Package Hero + Price ── */}
        <section className="bg-skyblue-50/70">
          <div className="container-max grid gap-6 py-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <Link href="/#packages" className="inline-flex items-center gap-1.5 text-sm font-medium text-skyblue-700 hover:underline">
                <ArrowLeft size={14} /> All packages
              </Link>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {pkg.featured && (
                  <span className="chip bg-navy-900 text-skyblue-300">Complete IT Program</span>
                )}
                <span className="chip gap-1.5 bg-skyblue-500 text-white">
                  <FlaskConical size={12} /> LAB INCLUDED
                </span>
              </div>
              <h1 className="mt-4 font-display text-2xl sm:text-4xl font-bold tracking-tight text-navy-900 text-balance">
                {pkg.name}
              </h1>
              <p className="mt-2 text-sm font-semibold text-skyblue-700">{pkg.tagline}</p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">{pkg.description}</p>
            </div>
            <div className="card flex flex-col items-center gap-1 p-6 text-center sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Program Fee</p>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-skyblue-600">{pkg.priceLabel}</p>
              <p className="text-xs text-slate-500">✓ Practical/Lab training included</p>
              <Link href="/#contact" className="btn-primary mt-4 w-full sm:w-auto">
                Enquire Now <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Courses included + progression ── */}
        <section className="container-max py-10 sm:py-14">
          <h2 className="font-display text-lg sm:text-2xl font-semibold text-navy-900">Courses included</h2>
          <p className="mt-2 text-sm text-slate-600">
            {pkg.focus}. Skills build in this order:
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {includedCourses.map((c, i) => (
              <span key={c.slug} className="flex items-center gap-2">
                {i > 0 && <ArrowRight size={14} className="text-skyblue-400" aria-hidden="true" />}
                <Link
                  href={`/courses/${c.slug}`}
                  className="rounded-xl border border-skyblue-100 bg-white px-3.5 py-2 text-sm font-semibold text-navy-900 shadow-sm transition-colors hover:border-skyblue-400 hover:text-skyblue-700"
                >
                  {c.code}
                </Link>
              </span>
            ))}
          </div>
        </section>
        {/* ── Who is it for + Why combine ── */}
        <section className="container-max grid gap-4 pb-10 sm:pb-14 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full bg-skyblue-50/70 p-5 sm:p-7">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">Who is this for?</h2>
              <ul className="mt-3 space-y-2">
                {pkg.idealFor.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check size={15} className="mt-0.5 shrink-0 text-skyblue-500" /> {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full p-5 sm:p-7">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">Why combine these courses?</h2>
              <ul className="mt-3 space-y-2">
                {pkg.whyCombine.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check size={15} className="mt-0.5 shrink-0 text-skyblue-500" /> {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* ── Skills + Practical/Lab + Outcomes ── */}
        <section className="border-y border-slate-100 bg-skyblue-50/70">
          <div className="container-max grid gap-6 py-10 sm:py-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-display text-lg sm:text-2xl font-semibold text-navy-900">Skills you build</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {pkg.skills.map((s) => (
                  <span key={s} className="rounded-full bg-white px-3.5 py-1.5 text-xs sm:text-sm font-medium text-navy-800 shadow-sm ring-1 ring-skyblue-100">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-7 card border-2 border-skyblue-200 bg-white p-5 sm:p-6">
                <h3 className="flex items-center gap-2 font-display text-base font-semibold text-navy-900">
                  <FlaskConical size={16} className="text-skyblue-500" /> Practical / Lab component
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Every course in this package includes hands-on lab practice: hardware assembly, network
                  configuration, server administration and troubleshooting exercises — the practical side is the point.
                </p>
              </div>
            </div>
            <Reveal delay={0.08}>
              <div className="card h-full p-5 sm:p-7">
                <h2 className="font-display text-lg sm:text-2xl font-semibold text-navy-900">Learning outcome</h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">{pkg.outcome}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-skyblue-600">Potential direction</p>
                <p className="mt-1 text-sm font-semibold text-navy-900">{pkg.direction}</p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <h3 className="font-display text-base font-semibold text-navy-900">Credential information</h3>
                  <p className="mt-1.5 text-sm italic text-slate-500">{CREDENTIALS_PLACEHOLDER}</p>
                  <p className="mt-1.5 text-sm text-slate-600">
                    Lab training is included in this package. Ask an advisor for the latest certification and exam guidance.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Enquire CTA ── */}
        <section className="container-max py-10 sm:py-14">
          <div className="rounded-2xl bg-gradient-to-r from-skyblue-500 to-skyblue-600 p-6 text-center sm:p-10">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white text-balance">
              Ready for {pkg.name}?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base text-white/85">
              Ask about batches, the lab schedule and whether this package matches your goal.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-md transition-all hover:-translate-y-0.5"
              >
                Enquire Now <ArrowRight size={15} />
              </Link>
              <Link
                href="/#pick"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Not sure? Compare goals
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}