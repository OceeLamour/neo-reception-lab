import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { Pricing } from "@/components/Pricing";
import { CTAFooter } from "@/components/CTAFooter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <Pricing />
      <CTAFooter />
      <Footer />
    </main>
  );
};

export default Index;