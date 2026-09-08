import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <span
        className={cn(
          "inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-skyblue-600",
          centered && "justify-center"
        )}
      >
        <span className="inline-block h-px w-6 bg-skyblue-500 sm:w-8" aria-hidden="true" />
        {eyebrow}
        {centered && (
          <span className="inline-block h-px w-6 bg-skyblue-500 sm:w-8" aria-hidden="true" />
        )}
      </span>
      <h2 className="mt-2.5 sm:mt-4 font-display text-2xl sm:text-4xl font-bold tracking-tight text-navy-900 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
