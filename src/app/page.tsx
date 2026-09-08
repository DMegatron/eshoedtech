import { ContactSection } from "@/components/contact-section";
import { ComparisonSection } from "@/components/comparison-section";
import { CourseGrid } from "@/components/course-grid";
import { CredentialsSection } from "@/components/credentials-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { FloatingAdvisor } from "@/components/floating-advisor";
import { GoalPicker } from "@/components/goal-picker";
import { Hero } from "@/components/hero";
import { OutcomesSection } from "@/components/outcomes-section";
import { PackagesGrid } from "@/components/packages-grid";
import { PracticalSteps } from "@/components/practical-steps";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillJourney } from "@/components/skill-journey";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <SiteHeader />
      <main>
        <Hero />
        <CourseGrid />
        <PracticalSteps />
        <SkillJourney />
        <PackagesGrid />
        <ComparisonSection />
        <OutcomesSection />
        <CredentialsSection />
        <GoalPicker />
        <FaqAccordion />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingAdvisor />
    </div>
  );
}
