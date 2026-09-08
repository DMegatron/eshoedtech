"use client";

import Link from "next/link";
import { ArrowRight, Monitor, Network, BookOpen, ShieldCheck, Terminal, GraduationCap, FlaskConical } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { scrollToSection } from "@/components/site-header";

const LEARN_ITEMS = [
  { icon: Monitor, label: "A+ Hardware" },
  { icon: Network, label: "N+ Networking" },
  { icon: BookOpen, label: "Microsoft" },
  { icon: ShieldCheck, label: "Cisco CCNA/CCNP" },
  { icon: Terminal, label: "Linux" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-skyblue-50/60">
      <div className="bg-grid-light absolute inset-0 [mask-image:linear-gradient(to_bottom,black_0%,transparent_90%)]" aria-hidden="true" />
      <div className="container-max relative flex min-h-[100svh-3.5rem] sm:min-h-[88vh] flex-col items-center justify-center py-16 sm:py-24 text-center">
        <Reveal className="flex w-full flex-col items-center">
          <span className="chip border border-skyblue-200 bg-white text-skyblue-700">
            <FlaskConical size={12} aria-hidden="true" /> Classroom training · Sector V, Kolkata
          </span>
          <h1 className="mt-5 sm:mt-7 max-w-3xl font-display text-3xl leading-[1.12] sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 text-balance">
            Learn IT Skills. Practice Them. <span className="text-skyblue-500">Build Your Career.</span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed text-slate-600 text-pretty">
            Classroom-based training in Hardware, Networking, Microsoft, Cisco and Linux — with a strong
            focus on practical learning and hands-on lab experience.
          </p>
          <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <Link href="/#courses" onClick={(e) => { e.preventDefault(); scrollToSection("/#courses"); }} className="btn-primary btn-lg">
              Explore Courses <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/#packages" onClick={(e) => { e.preventDefault(); scrollToSection("/#packages"); }} className="btn-outline btn-lg">
              View Packages
            </Link>
          </div>
        </Reveal>

        {/* What you can learn strip */}
        <Reveal delay={0.15} className="mt-12 sm:mt-16 w-full">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
            {LEARN_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-center gap-2 rounded-xl border border-skyblue-100 bg-white px-3 py-2.5 shadow-sm"
              >
                <item.icon size={15} className="shrink-0 text-skyblue-500" aria-hidden="true" />
                <span className="text-xs sm:text-[13px] font-semibold text-navy-800">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
