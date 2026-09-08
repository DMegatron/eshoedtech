import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PackageCard } from "@/components/package-card";
import { packages } from "@/data/packages";

/** §16/§30 — the six packages; "Starting from ₹4,999"; complete program is prominent */
export function PackagesGrid() {
  const featured = packages.find((p) => p.featured)!;
  const rest = packages.filter((p) => !p.featured);

  return (
    <section id="packages" className="border-y border-skyblue-100 bg-skyblue-50/70">
      <div className="container-max py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Training Packages"
            title="Combine courses. Build a career path."
            description="Six packages pair complementary courses — each includes practical lab training. No need to choose courses blindly: compare what each program builds."
          />
        </Reveal>

        {/* Featured complete program */}
        <Reveal delay={0.08}>
          <div className="mx-auto mt-9 max-w-2xl sm:mt-11">
            <PackageCard pkg={featured} />
          </div>
        </Reveal>

        <div className="mt-4 sm:mt-5 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(0, 3).map((pkg, i) => (
            <Reveal key={pkg.slug} delay={i * 0.08} className="h-full">
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-4 sm:mt-5 grid max-w-4xl gap-4 sm:gap-5 sm:grid-cols-2">
          {rest.slice(3).map((pkg, i) => (
            <Reveal key={pkg.slug} delay={i * 0.08} className="h-full">
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-slate-500">
            Starting from <span className="font-bold text-navy-900">₹4,999</span> — practical/lab training included in every package.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
