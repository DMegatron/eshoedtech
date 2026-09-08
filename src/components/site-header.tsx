"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function scrollToSection(href: string) {
  if (window.location.pathname !== "/") {
    window.location.href = href.startsWith("/") ? href : "/" + href;
    return;
  }
  const el = document.getElementById(href.replace("/#", ""));
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (!mobileOpen) {
      scrollToSection(href);
      return;
    }
    setMobileOpen(false);
    const closeMs = 250;
    window.setTimeout(() => scrollToSection(href), closeMs + 50);
  };

  const HOME = pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="container-max flex h-14 sm:h-[68px] items-center justify-between gap-3">
        {/* Brand */}
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Esho EduTech home">
          <Image
            src="/logo.png"
            alt="Esho EduTech"
            width={40}
            height={40}
            className="h-9 w-9 rounded-lg object-contain sm:h-10 sm:w-10"
            priority
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-base font-bold text-navy-900 sm:text-lg">
              Esho <span className="text-skyblue-500">{site.nameSuffix}</span>
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-skyblue-600 sm:block">
              {site.location}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-skyblue-50 hover:text-skyblue-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="/#contact" onClick={(e) => handleNav(e, "/#contact")} className="btn-primary hidden py-2 text-xs sm:inline-flex sm:px-4">
            Enquire Now <ArrowRight size={14} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-navy-800 transition-colors hover:border-skyblue-400 hover:text-skyblue-600 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            id="mobile-menu"
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <nav className="container-max flex flex-col gap-1 py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-800 transition-colors hover:bg-skyblue-50 hover:text-skyblue-700"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
                <a
                  href={site.phoneHref}
                  className="rounded-lg bg-skyblue-50 px-3 py-2.5 text-sm font-semibold text-skyblue-700 text-center"
                >
                  Call: {site.phone}
                </a>
                <a
                  href="/#contact"
                  onClick={(e) => handleNav(e, "/#contact")}
                  className="btn-primary w-full py-2 text-xs"
                >
                  Enquire Now
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
