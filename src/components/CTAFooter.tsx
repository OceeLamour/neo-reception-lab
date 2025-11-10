import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTAFooter = () => {
  return (
    <section id="support" className="relative py-20 md:py-28 overflow-hidden">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-cta" />
      
      {/* Wave divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Transform
            <br />
            Every Customer Call?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 font-inter max-w-2xl mx-auto">
            Join hundreds of service businesses using VoiceSteer to deliver exceptional customer experiences, 
            automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary group"
            >
              Start Free Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Watch Demo
            </Button>
          </div>

          <p className="text-sm text-white/70 pt-4">
            No credit card required • 50 conversations free • Cancel anytime
          </p>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-accent opacity-20 blur-2xl" />
    </section>
  );
};