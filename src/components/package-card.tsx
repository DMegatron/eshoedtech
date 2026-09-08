import Link from "next/link";
import { ArrowRight, Check, FlaskConical } from "lucide-react";
import type { Package } from "@/data/packages";

/** Compact package card — homepage grid + cross-links */
export function PackageCard({ pkg, compact = false }: { pkg: Package; compact?: boolean }) {
  return (
    <a href={`/packages/${pkg.slug}`} className="block h-full" aria-label={`View package: ${pkg.name}`}>
      <article
        className={
          "card relative flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg " +
          (pkg.featured
            ? "border-2 border-skyblue-400 bg-gradient-to-b from-skyblue-50/70 to-white shadow-md shadow-skyblue-500/10"
            : "card-hover")
        }
      >
        {pkg.featured && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-skyblue-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
            Complete IT Program
          </span>
        )}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base sm:text-lg font-semibold leading-snug text-navy-900">{pkg.name}</h3>
          <span className="chip shrink-0 gap-1 bg-skyblue-100 text-skyblue-800">
            <FlaskConical size={11} aria-hidden="true" /> LAB
          </span>
        </div>
        <p className="mt-1 text-[13px] font-semibold text-skyblue-600">{pkg.focus}</p>
        {!compact && (
          <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-slate-600">{pkg.description}</p>
        )}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {pkg.skills.slice(0, compact ? 3 : 5).map((s) => (
            <span key={s} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
              {s}
            </span>
          ))}
        </div>

        {!compact && (
          <ul className="mt-3.5 space-y-1.5">
            {pkg.whyCombine.slice(0, 2).map((w) => (
              <li key={w} className="flex items-start gap-2 text-[13px] sm:text-sm text-slate-600">
                <Check size={14} className="mt-0.5 shrink-0 text-skyblue-500" aria-hidden="true" />
                {w}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <p className={pkg.featured ? "font-display text-xl sm:text-2xl font-extrabold text-skyblue-600" : "font-display text-xl sm:text-2xl font-extrabold text-navy-900"}>
              {pkg.priceLabel}
            </p>
            <p className="text-[11px] text-slate-500">✓ Practical/Lab training</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-skyblue-600">
            Details <ArrowRight size={15} aria-hidden="true" />
          </span>
        </div>
      </article>
    </a>
  );
}
