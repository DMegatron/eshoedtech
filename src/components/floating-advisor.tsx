import { Phone } from "lucide-react";
import { site } from "@/data/site";

/** Floating "Talk to an advisor" button — mobile friendly */
export function FloatingAdvisor() {
  return (
    <a
      href={site.phoneHref}
      aria-label={`Call an Esho EduTech advisor at ${site.phone}`}
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-skyblue-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-skyblue-500/30 transition-all hover:-translate-y-0.5 hover:bg-skyblue-600 sm:bottom-5 sm:right-5 sm:px-5 sm:py-3 sm:text-sm"
    >
      <Phone size={15} aria-hidden="true" />
      Talk to an advisor
    </a>
  );
}
