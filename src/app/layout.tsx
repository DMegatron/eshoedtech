import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esho EduTech | Practical IT Training — Hardware, Networking, Microsoft, Cisco & Linux in Sector V, Kolkata",
  description:
    "Classroom-based IT training at Sector V, Kolkata: A+, N+, Microsoft, CCNA, CCNP and Linux courses — with strong practical/lab learning. Six packages starting from ₹4,999.",
  keywords: [
    "IT training Kolkata",
    "A+ course Kolkata",
    "networking course Sector V",
    "CCNA training Kolkata",
    "MCSE training",
    "Linux administration course",
    "practical IT lab training",
    "Esho EduTech",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-slate-600">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
