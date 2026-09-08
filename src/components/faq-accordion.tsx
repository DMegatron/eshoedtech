"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white">
      <div className="container-max py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Straight answers about courses, packages, practical training and certification."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-9 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 text-left transition-colors hover:bg-skyblue-50/50"
                    >
                      <span className="font-display text-sm sm:text-base font-semibold text-navy-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={cn(
                          "shrink-0 text-skyblue-500 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 pb-4 sm:px-6 sm:pb-5 text-sm leading-relaxed text-slate-600">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
