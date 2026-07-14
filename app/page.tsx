import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { AIChatSection } from '@/components/sections/AIChatSection';
import { FinancialMetrics } from '@/components/sections/FinancialMetrics';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { FounderBenefits } from '@/components/sections/FounderBenefits';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-background text-foreground overflow-hidden">
        <Hero />
        <FinancialMetrics />
        <FeaturesGrid />
        <FounderBenefits />
        <AIChatSection />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
