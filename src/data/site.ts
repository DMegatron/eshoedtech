export const site = {
  name: "Esho",
  nameSuffix: "EduTech",
  tagline: "Practical IT Training — Hardware, Networking, Microsoft, Cisco & Linux",
  location: "Sector V, Kolkata",
  phone: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  email: "admissions@eshoedtech.com",
  address: ["Esho EduTech", "Sector V, Kolkata, West Bengal"],
  copyright: `© ${new Date().getFullYear()} Esho EduTech. All Rights Reserved.`,
};

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Courses", href: "/#courses" },
  { label: "Packages", href: "/#packages" },
  { label: "Which Program?", href: "/#pick" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];