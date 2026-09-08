import type { Course } from "./courses";
import { getCourseBySlug } from "./courses";

export interface Package {
  slug: string;
  name: string;
  tagline: string;
  certs: string[]; // course slugs included
  price: number;
  priceLabel: string;
  labIncluded: true;
  focus: string; // skill combination
  description: string; // value proposition
  idealFor: string[];
  whyCombine: string[]; // "Why combine these courses?"
  skills: string[];
  outcome: string; // learning outcome
  direction: string; // potential direction
  featured?: boolean; // most visually prominent (Complete IT Program)
}

export const packages: Package[] = [
  {
    slug: "aplus-nplus-mcse",
    name: "A+ + N+ + MCSE",
    tagline: "with Lab",
    certs: ["a-plus", "n-plus", "mcse"],
    price: 4999,
    priceLabel: "₹4,999",
    labIncluded: true,
    focus: "Hardware + Networking + Microsoft/System Administration",
    description:
      "A foundation-oriented combination for learners interested in IT support, networking fundamentals and system administration.",
    idealFor: [
      "Beginners starting a full IT support pathway",
      "Learners interested in Windows administration",
      "Students who want hardware, networking and systems together",
    ],
    whyCombine: [
      "A+ explains how systems are built; N+ explains how they connect",
      "MCSE adds the administrator's view: servers, users and policies",
      "Together they mirror the daily work of an IT support role",
    ],
    skills: [
      "Hardware fundamentals",
      "Networking fundamentals",
      "System administration concepts",
      "Troubleshooting",
      "Infrastructure fundamentals",
    ],
    outcome:
      "A solid foundation across hardware, networking and Microsoft systems, preparing you for further development in support and administration.",
    direction: "IT Support → Networking / System Administration",
  },
  {
    slug: "aplus-nplus-ccna",
    name: "A+ + N+ + CCNA",
    tagline: "with Lab",
    certs: ["a-plus", "n-plus", "ccna"],
    price: 4999,
    priceLabel: "₹4,999",
    labIncluded: true,
    focus: "Hardware + Networking + Cisco",
    description:
      "A networking-oriented package that builds foundational IT knowledge before progressing into Cisco networking.",
    idealFor: [
      "Learners who want a networking direction early",
      "Students aiming at device-level configuration skills",
      "Freshers building toward network administration",
    ],
    whyCombine: [
      "A+ and N+ build the technical base first",
      "CCNA then applies those concepts on Cisco devices",
      "The result: from 'how networks work' to 'configure this network'",
    ],
    skills: [
      "Hardware fundamentals",
      "Networking concepts",
      "IP / networking fundamentals",
      "Cisco networking",
      "Troubleshooting",
    ],
    outcome:
      "Ability to understand, configure and troubleshoot networks — grounding IT fundamentals into working Cisco skills.",
    direction: "IT Support → Networking → Cisco",
  },
  {
    slug: "aplus-nplus-mcse-ccna",
    name: "A+ + N+ + MCSE + CCNA",
    tagline: "with Lab",
    certs: ["a-plus", "n-plus", "mcse", "ccna"],
    price: 6999,
    priceLabel: "₹6,999",
    labIncluded: true,
    focus: "Hardware + Networking + Microsoft + Cisco",
    description:
      "A broader infrastructure program combining system administration and networking — the two pillars of an IT team.",
    idealFor: [
      "Learners who want both Microsoft and Cisco skill sets",
      "Students targeting general IT infrastructure roles",
      "Those who don't want to choose between systems and networks yet",
    ],
    whyCombine: [
      "MCSE and CCNA together cover most of what SMEs run on",
      "One skills profile covers systems and network questions",
      "Wider practical exposure during training",
    ],
    skills: [
      "Hardware",
      "Networking",
      "Microsoft infrastructure",
      "Cisco networking",
      "Troubleshooting",
      "IT infrastructure fundamentals",
    ],
    outcome:
      "A broad, practical infrastructure skill base across systems and networks — versatile for multiple IT pathways.",
    direction: "IT Infrastructure / System Administration / Networking",
  },
  {
    slug: "aplus-nplus-ccna-ccnp",
    name: "A+ + N+ + CCNA + CCNP",
    tagline: "with Lab",
    certs: ["a-plus", "n-plus", "ccna", "ccnp"],
    price: 9999,
    priceLabel: "₹9,999",
    labIncluded: true,
    focus: "Hardware + Networking + Cisco + Advanced Networking",
    description:
      "A networking-focused progression from foundational knowledge into advanced Cisco networking — for learners serious about networking.",
    idealFor: [
      "Learners committed to a networking career",
      "Students wanting CCNA + CCNP depth, not just basics",
      "Those targeting enterprise network environments",
    ],
    whyCombine: [
      "Builds a clear ladder: fundamentals → Cisco → advanced Cisco",
      "CCNP adds enterprise routing, switching and troubleshooting depth",
      "Strongest package for network-oriented careers",
    ],
    skills: [
      "Hardware foundation",
      "Networking fundamentals",
      "Cisco networking",
      "Advanced networking concepts",
      "Network troubleshooting",
    ],
    outcome:
      "A deep networking profile, from basic concepts through advanced enterprise networking topics.",
    direction: "Networking → Advanced Networking",
  },
  {
    slug: "aplus-nplus-linux",
    name: "A+ + N+ + Linux",
    tagline: "with Lab",
    certs: ["a-plus", "n-plus", "linux"],
    price: 4999,
    priceLabel: "₹4,999",
    labIncluded: true,
    focus: "Hardware + Networking + Linux",
    description:
      "Combines core IT foundations with Linux administration knowledge — practical skills for modern server environments.",
    idealFor: [
      "Learners curious about Linux and open-source systems",
      "Students aiming at Linux / server administration",
      "Windows users looking to expand into Linux",
    ],
    whyCombine: [
      "Linux runs most servers and cloud infrastructure",
      "A+/N+ foundations make Linux administration easier to absorb",
      "A complementary alternative to the Microsoft path",
    ],
    skills: ["Hardware", "Networking", "Linux fundamentals", "Linux administration", "Troubleshooting"],
    outcome:
      "A working foundation in Linux administration alongside hardware and networking fundamentals.",
    direction: "IT Support → Linux / System Administration",
  },
  {
    slug: "aplus-nplus-mcse-ccna-ccnp-linux",
    name: "A+ + N+ + MCSE + CCNA + CCNP + Linux",
    tagline: "Complete IT Program — with Lab",
    certs: ["a-plus", "n-plus", "mcse", "ccna", "ccnp", "linux"],
    price: 12999,
    priceLabel: "₹12,999",
    labIncluded: true,
    focus: "Hardware + Networking + Microsoft + Cisco + Advanced Networking + Linux",
    description:
      "The broadest Esho EduTech package, combining multiple IT infrastructure and networking disciplines in one program.",
    idealFor: [
      "Learners who want comprehensive IT training",
      "Students who want maximum pathway flexibility",
      "Anyone building toward enterprise IT roles",
    ],
    whyCombine: [
      "Covers systems, networking and Linux in a single program",
      "Advances all the way to CCNP-level networking",
      "Adds Linux — the most in-demand server platform",
    ],
    skills: [
      "Hardware",
      "Networking",
      "Microsoft / System Administration",
      "Cisco",
      "Advanced Networking",
      "Linux",
      "Troubleshooting",
      "IT infrastructure concepts",
    ],
    outcome:
      "The most complete skill set Esho EduTech offers — across infrastructure, networking and Linux environments.",
    direction: "Comprehensive IT Infrastructure / Networking / System Administration",
    featured: true,
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getPackageCourses(pkg: Package): Course[] {
  return pkg.certs
    .map((slug) => getCourseBySlug(slug))
    .filter((c): c is Course => Boolean(c));
}

/** Packages that include a given course slug — for cross-links */
export function packagesContaining(courseSlug: string): Package[] {
  return packages.filter((p) => p.certs.includes(courseSlug));
}