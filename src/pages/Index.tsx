import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Index;
