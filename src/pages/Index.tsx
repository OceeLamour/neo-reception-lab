import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { TransparencyControl } from "@/components/TransparencyControl";
import { UseCases } from "@/components/UseCases";
import { Pricing } from "@/components/Pricing";
import { CTAFooter } from "@/components/CTAFooter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <TransparencyControl />
      <UseCases />
      <Pricing />
      <CTAFooter />
      <Footer />
    </main>
  );
};

export default Index;