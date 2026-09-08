export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** 13594 -> "13.5k+" · 980 -> "980+" */
export function formatCompact(n: number): string {
  if (n >= 1000) {
    const v = Math.floor(n / 100) / 10;
    return `${v % 1 === 0 ? v.toFixed(0) : v.toFixed(1)}k+`;
  }
  return `${n}+`;
}
