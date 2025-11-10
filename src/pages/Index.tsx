import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import BenefitsSection from "@/components/BenefitsSection";
import ForWhoSection from "@/components/ForWhoSection";
import IncludedSection from "@/components/IncludedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <main>
        <HeroSection />
        <ManifestoSection />
        <BenefitsSection />
        <ForWhoSection />
        <IncludedSection />
        <TestimonialsSection />
        <PricingSection />
        <AboutSection />
        <FinalCTASection />
      </main>
      <footer className="bg-foreground text-white py-8 text-center">
        <p className="text-sm">
          © 2025 Menopausa Leve - Nutri Carol Althoff | Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
};

export default Index;
